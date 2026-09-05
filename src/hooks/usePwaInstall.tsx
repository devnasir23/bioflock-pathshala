import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  clearDeferredInstallPrompt,
  getDeferredInstallPrompt,
  isAppAlreadyInstalled,
  isIosDevice,
  isStandaloneDisplay,
  subscribeInstallPrompt,
} from '@/lib/pwaInstall'

const DISMISS_KEY = 'bp-pwa-install-dismissed-until'

function isAutoDismissed() {
  try {
    const until = Number(localStorage.getItem(DISMISS_KEY) || 0)
    return until > Date.now()
  } catch {
    return false
  }
}

function dismissForDays(days: number) {
  try {
    localStorage.setItem(
      DISMISS_KEY,
      String(Date.now() + days * 24 * 60 * 60 * 1000),
    )
  } catch {
    /* ignore */
  }
}

export type InstallPromptMode = 'chrome' | 'ios' | 'manual'

type PwaInstallContextValue = {
  open: boolean
  mode: InstallPromptMode | null
  installing: boolean
  /** Show install entry points (header / sidebar). Hidden when already installed. */
  showInstallButton: boolean
  /** Native Chrome install is available right now. */
  canNativeInstall: boolean
  openSheet: () => void
  install: () => Promise<void>
  dismiss: () => void
}

const PwaInstallContext = createContext<PwaInstallContextValue | null>(null)

function resolveMode(): InstallPromptMode {
  if (getDeferredInstallPrompt()) return 'chrome'
  if (isIosDevice()) return 'ios'
  return 'manual'
}

export function PwaInstallProvider({ children }: { children: ReactNode }) {
  const [installed, setInstalled] = useState(() => isStandaloneDisplay())
  const [canNativeInstall, setCanNativeInstall] = useState(() =>
    Boolean(getDeferredInstallPrompt()),
  )
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<InstallPromptMode | null>(null)
  const [installing, setInstalling] = useState(false)

  useEffect(() => {
    const syncInstalled = () => setInstalled(isStandaloneDisplay())
    syncInstalled()
    const mq = window.matchMedia('(display-mode: standalone)')
    mq.addEventListener('change', syncInstalled)
    return () => mq.removeEventListener('change', syncInstalled)
  }, [])

  // Catches the case where the app is already installed but is currently
  // being viewed in a normal browser tab (display-mode check alone misses this).
  useEffect(() => {
    let cancelled = false
    void isAppAlreadyInstalled().then((yes) => {
      if (yes && !cancelled) setInstalled(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    return subscribeInstallPrompt(() => {
      setCanNativeInstall(Boolean(getDeferredInstallPrompt()))
      if (isStandaloneDisplay()) setInstalled(true)
    })
  }, [])

  // Auto bottom-sheet once (respects dismiss + already-installed).
  useEffect(() => {
    if (installed || isAutoDismissed()) return

    const reveal = () => {
      if (installed || isAutoDismissed() || isStandaloneDisplay()) return
      if (getDeferredInstallPrompt()) {
        setMode('chrome')
        setOpen(true)
        return
      }
      if (isIosDevice()) {
        setMode('ios')
        setOpen(true)
      }
    }

    const t1 = window.setTimeout(reveal, 1800)
    const t2 = window.setTimeout(reveal, 4500)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [installed, canNativeInstall])

  const openSheet = useCallback(() => {
    if (isStandaloneDisplay()) return
    setMode(resolveMode())
    setOpen(true)
  }, [])

  const dismiss = useCallback(() => {
    dismissForDays(14)
    setOpen(false)
  }, [])

  const install = useCallback(async () => {
    const deferred = getDeferredInstallPrompt()
    if (!deferred) return
    setInstalling(true)
    try {
      await deferred.prompt()
      const choice = await deferred.userChoice
      clearDeferredInstallPrompt()
      setCanNativeInstall(false)
      setOpen(false)
      if (choice.outcome === 'accepted') setInstalled(true)
      if (choice.outcome === 'dismissed') dismissForDays(7)
    } finally {
      setInstalling(false)
    }
  }, [])

  const value = useMemo<PwaInstallContextValue>(
    () => ({
      open: open && mode !== null,
      mode,
      installing,
      showInstallButton: !installed,
      canNativeInstall,
      openSheet,
      install,
      dismiss,
    }),
    [
      open,
      mode,
      installing,
      installed,
      canNativeInstall,
      openSheet,
      install,
      dismiss,
    ],
  )

  return (
    <PwaInstallContext.Provider value={value}>{children}</PwaInstallContext.Provider>
  )
}

export function usePwaInstall() {
  const ctx = useContext(PwaInstallContext)
  if (!ctx) throw new Error('usePwaInstall must be used within PwaInstallProvider')
  return ctx
}
