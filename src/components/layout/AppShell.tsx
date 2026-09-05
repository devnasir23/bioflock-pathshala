import { Sidebar } from '@/components/layout/Sidebar'
import { InstallPrompt } from '@/components/pwa/InstallPrompt'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePwaInstall } from '@/hooks/usePwaInstall'
import { useTheme } from '@/hooks/useTheme'
import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './AppShell.module.css'

export function AppShell({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const [navOpen, setNavOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()
  const { showInstallButton, openSheet } = usePwaInstall()
  const location = useLocation()

  useEffect(() => {
    setNavOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (isDesktop) setNavOpen(false)
  }, [isDesktop])

  return (
    <div className={styles.root}>
      {!isDesktop ? (
        <header className={styles.topbar}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="মেনু"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <span className={styles.topbarTitle}>বায়োফ্লক পাঠশালা</span>
          <div className={styles.topbarActions}>
            {showInstallButton ? (
              <button
                type="button"
                className={styles.installBtn}
                aria-label="অ্যাপ ইনস্টল করুন"
                title="ইনস্টল"
                onClick={openSheet}
              >
                ইনস্টল
              </button>
            ) : null}
            <button
              type="button"
              className={styles.themeIconBtn}
              aria-label="থিম বদলান"
              onClick={toggleTheme}
            >
              {isDark ? '☀' : '☾'}
            </button>
          </div>
        </header>
      ) : null}

      {!isDesktop && navOpen ? (
        <button
          type="button"
          className={styles.overlay}
          aria-label="মেনু বন্ধ"
          onClick={() => setNavOpen(false)}
        />
      ) : null}

      <Sidebar open={isDesktop || navOpen} onNavigate={() => setNavOpen(false)} />

      <main className={styles.main}>{children}</main>
      <InstallPrompt />
    </div>
  )
}
