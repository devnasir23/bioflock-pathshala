import { Link } from 'react-router-dom'
import type { ChapterMeta } from '@/content/catalog'
import { chapterNum } from '@/lib/bn'
import styles from './ChapterPager.module.css'

type ChapterPagerProps = {
  prev: ChapterMeta | null
  next: ChapterMeta | null
  showCoverPrev?: boolean
}

export function ChapterPager({ prev, next, showCoverPrev }: ChapterPagerProps) {
  return (
    <nav className={styles.pager} aria-label="অধ্যায় নেভিগেশন">
      {prev ? (
        <Link to={`/adhyay/${prev.slug}`} className={styles.btn}>
          <span className={styles.dir}>← আগের অধ্যায়</span>
          <span className={styles.label}>
            {chapterNum(prev.id)} · {prev.title}
          </span>
        </Link>
      ) : showCoverPrev ? (
        <Link to="/" className={styles.btn}>
          <span className={styles.dir}>← আগের পাতা</span>
          <span className={styles.label}>প্রচ্ছদ ও ভূমিকা</span>
        </Link>
      ) : (
        <span className={styles.spacer} />
      )}

      {next ? (
        <Link to={`/adhyay/${next.slug}`} className={`${styles.btn} ${styles.next}`}>
          <span className={styles.dir}>পরের অধ্যায় →</span>
          <span className={styles.label}>
            {chapterNum(next.id)} · {next.title}
          </span>
        </Link>
      ) : (
        <span className={styles.spacer} />
      )}
    </nav>
  )
}
