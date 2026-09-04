import body from './03-pukur-vs-biofloc.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '03-pukur-vs-biofloc'

const LEAD = `এটাই এই বইয়ের একমাত্র অধ্যায় যা আপনাকে বলতে পারে — "বায়োফ্লক করবেন না"। বিক্রেতা বা প্রশিক্ষণ কেন্দ্র এই তুলনাটা কখনো সৎভাবে দেবে না, কারণ তাদের ট্যাংক বিক্রি করতে হয়। আমাদের কিছু বিক্রি করার নেই।`

/** অধ্যায় 03 — content: `./03-pukur-vs-biofloc.body.html` */
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
