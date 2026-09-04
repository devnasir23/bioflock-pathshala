import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useTheme } from '@/hooks/useTheme'
import styles from './AppShell.module.css'

export function AppShell({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const [navOpen, setNavOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()
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
          <button
            type="button"
            className={styles.themeIconBtn}
            aria-label="থিম বদলান"
            onClick={toggleTheme}
          >
            {isDark ? '☀' : '☾'}
          </button>
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
    </div>
  )
}
