/** Shared capture of Chrome's install event — must load before React paint. */

export type BeforeInstallPromptEvent = Event & {
  readonly platforms: string[]
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
  prompt: () => Promise<void>
}

type Listener = () => void

let deferredPrompt: BeforeInstallPromptEvent | null = null
const listeners = new Set<Listener>()

function notify() {
  listeners.forEach((fn) => fn())
}

export function getDeferredInstallPrompt() {
  return deferredPrompt
}

export function subscribeInstallPrompt(listener: Listener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function clearDeferredInstallPrompt() {
  deferredPrompt = null
  notify()
}

export function isStandaloneDisplay() {
  if (typeof window === 'undefined') return false
  const mq = window.matchMedia('(display-mode: standalone)').matches
  const iosStandalone =
    'standalone' in navigator &&
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
  return mq || iosStandalone
}

export function isIosDevice() {
  if (typeof navigator === 'undefined') return false
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
}

type NavigatorWithRelatedApps = Navigator & {
  getInstalledRelatedApps?: () => Promise<Array<{ platform: string }>>
}

/**
 * Detects an already-installed copy of this same PWA even while it's being
 * viewed in a regular browser tab (display-mode alone can't tell us that).
 * Chromium-only; relies on the self-referencing `related_applications` entry
 * in the web manifest. Falls back to false everywhere else.
 */
export async function isAppAlreadyInstalled() {
  const nav = navigator as NavigatorWithRelatedApps
  if (typeof nav.getInstalledRelatedApps !== 'function') return false
  try {
    const apps = await nav.getInstalledRelatedApps()
    return apps.length > 0
  } catch {
    return false
  }
}

export function captureInstallPromptEvents() {
  if (typeof window === 'undefined') return

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    deferredPrompt = event as BeforeInstallPromptEvent
    notify()
  })

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null
    notify()
  })
}
