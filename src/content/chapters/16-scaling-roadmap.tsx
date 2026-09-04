import body from './16-scaling-roadmap.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '16-scaling-roadmap'

const LEAD = `এই বইয়ের সব হিসাব এক জায়গায় — পাঁচ বছরের একটা পথ, প্রতিটা ধাপে কত টাকা লাগে, কত আসে, আর পরের ধাপে যাওয়ার শর্ত কী। কোনো ধাপ লাফিয়ে পার হওয়া যায় না।`

/** অধ্যায় 16 — content: `./16-scaling-roadmap.body.html` */
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
