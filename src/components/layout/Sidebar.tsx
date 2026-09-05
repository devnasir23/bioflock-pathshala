import { NavLink } from 'react-router-dom'
import { BrandMark } from '@/components/brand/BrandMark'
import { PARTS } from '@/content/catalog'
import { usePwaInstall } from '@/hooks/usePwaInstall'
import { useTheme } from '@/hooks/useTheme'
import { chapterNum } from '@/lib/bn'
import styles from './Sidebar.module.css'

type SidebarProps = {
  open: boolean
  onNavigate: () => void
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  const { isDark, toggleTheme } = useTheme()
  const { showInstallButton, openSheet } = usePwaInstall()

  return (
    <aside
      className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}
      aria-label="বইয়ের সূচি"
    >
      <NavLink to="/" className={styles.brand} onClick={onNavigate}>
        <BrandMark />
        <span className={styles.brandText}>
          <span className={styles.brandTitle}>বায়োফ্লক পাঠশালা</span>
          <span className={styles.brandTag}>একটি বিস্তারিত জ্ঞানভিত্তিক গাইড</span>
        </span>
      </NavLink>

      <div className={styles.themeRow}>
        <span>{isDark ? 'রাতের মোড' : 'দিনের মোড'}</span>
        <button type="button" className={styles.themeBtn} onClick={toggleTheme}>
          <span aria-hidden>{isDark ? '☀' : '☾'}</span>
          <span>{isDark ? 'দিন' : 'রাত'}</span>
        </button>
      </div>

      {showInstallButton ? (
        <div className={styles.installRow}>
          <button
            type="button"
            className={styles.installBtn}
            onClick={() => {
              openSheet()
              onNavigate()
            }}
          >
            অ্যাপ ইনস্টল করুন
          </button>
        </div>
      ) : null}

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.coverLink} ${isActive ? styles.activeCover : ''}`
          }
          onClick={onNavigate}
        >
          প্রচ্ছদ ও ভূমিকা
        </NavLink>

        {PARTS.map((part) => (
          <div key={part.id} className={styles.part} data-accent={part.accent}>
            <div className={styles.partLabel}>
              <span className={styles.partDot} />
              <span>
                পর্ব {part.num} · {part.title}
              </span>
            </div>
            {part.chapters.map((ch) => (
              <NavLink
                key={ch.slug}
                to={`/adhyay/${ch.slug}`}
                className={({ isActive }) =>
                  `${styles.chapterLink} ${isActive ? styles.activeChapter : ''}`
                }
                onClick={onNavigate}
              >
                <span className={styles.chapterNum}>{chapterNum(ch.id)}</span>
                <span className={styles.chapterMeta}>
                  <span className={styles.chapterTitle}>{ch.title}</span>
                  <span className={styles.chapterDesc}>{ch.desc}</span>
                </span>
                {ch.status === 'draft' ? (
                  <span className={styles.badge}>শীঘ্রই</span>
                ) : null}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
