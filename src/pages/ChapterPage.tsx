import { Suspense } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ChapterPager } from '@/components/layout/ChapterPager'
import {
  getChapter,
  getNeighbors,
  getPartForChapter,
} from '@/content/catalog'
import { getLazyChapter } from '@/content/loadChapter'

export function ChapterPage() {
  const { slug = '' } = useParams()
  const meta = getChapter(slug)
  const part = getPartForChapter(slug)
  const Chapter = meta ? getLazyChapter(meta.slug) : null

  if (!meta || !part || !Chapter) {
    return <Navigate to="/" replace />
  }

  const { prev, next, index } = getNeighbors(meta.slug)

  return (
    <>
      <Suspense
        key={meta.slug}
        fallback={
          <div style={{ padding: '48px 24px', color: 'var(--bp-muted)' }}>
            অধ্যায় লোড হচ্ছে…
          </div>
        }
      >
        <Chapter />
      </Suspense>
      <ChapterPager prev={prev} next={next} showCoverPrev={index === 0} />
    </>
  )
}
