import { useCallback, useEffect, useState } from 'react'
import {
  clearDeferredInstallPrompt,
  getDeferredInstallPrompt,
  isIosDevice,
  isStandaloneDisplay,
  subscribeInstallPrompt,
} from '@/lib/pwaInstall'

const DISMISS_KEY = 'bp-pwa-install-dismissed-until'

function isDismissed() {
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

export type InstallPromptMode = 'chrome' | 'ios' | null

/**
 * Controls the bottom install sheet.
 * Chrome/Android: waits for beforeinstallprompt, then shows after a short delay.
 * iOS Safari: shows Add-to-Home-Screen tip (no native prompt API).
 */
export function usePwaInstall() {
  const [mode, setMode] = useState<InstallPromptMode>(null)
  const [canPrompt, setCanPrompt] = useState(
    () => Boolean(getDeferredInstallPrompt()),
  )
  const [open, setOpen] = useState(false)
  const [installing, setInstalling] = useState(false)

  useEffect(() => {
    return subscribeInstallPrompt(() => {
      setCanPrompt(Boolean(getDeferredInstallPrompt()))
    })
  }, [])

  useEffect(() => {
    if (isStandaloneDisplay() || isDismissed()) return

    const reveal = () => {
      if (isStandaloneDisplay() || isDismissed()) return
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

    // Let first paint settle; Chrome often fires beforeinstallprompt around then.
    const t1 = window.setTimeout(reveal, 1800)
    const t2 = window.setTimeout(reveal, 4500)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [canPrompt])

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
      setCanPrompt(false)
      setOpen(false)
      if (choice.outcome === 'dismissed') dismissForDays(7)
    } finally {
      setInstalling(false)
    }
  }, [])

  return {
    open: open && mode !== null,
    mode,
    installing,
    install,
    dismiss,
  }
}
