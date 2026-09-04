export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'bp-theme'

export function readStoredTheme(): ThemeMode | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return null
}

export function preferSystemTheme(): ThemeMode {
  if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function resolveInitialTheme(): ThemeMode {
  return readStoredTheme() ?? preferSystemTheme()
}

export function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute('data-bp-theme', mode)
}

export function persistTheme(mode: ThemeMode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* ignore */
  }
}
