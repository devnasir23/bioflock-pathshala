import body from './01-biofloc-ki-o-keno.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '01-biofloc-ki-o-keno'

const LEAD = `বিজ্ঞানের একটা ছোট বিপ্লব — একদম শুরু থেকে বোঝা। এই অধ্যায় পড়া শেষে আপনি জানবেন বায়োফ্লক আসলে কী, ট্যাংকের ভেতরে কী ঘটে, আর এটা আপনার জন্য ঠিক কি না।`

/** অধ্যায় 01 — content: `./01-biofloc-ki-o-keno.body.html` */
export default function Chapter() {
  const meta = getChapter(SLUG)!
  const part = getPartForChapter(SLUG)!

  return (
    <ChapterShell
      id={meta.id}
      title={meta.title}
      lead={LEAD}
      partNum={part.num}
      partTitle={part.title}
      accent={part.accent}
    >
      <ChapterHtml html={body} />
    </ChapterShell>
  )
}
