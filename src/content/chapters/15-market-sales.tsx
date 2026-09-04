import body from './15-market-sales.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '15-market-sales'

const LEAD = `মাছ চাষ করা অর্ধেক কাজ। বাকি অর্ধেক — কাকে, কোথায়, কীভাবে, কোন দামে বিক্রি করবেন। এই অধ্যায়ের একটা সিদ্ধান্ত আপনার লাভ দেড়গুণ করতে পারে, একটা ভুল সেটা শূন্য করতে পারে।`

/** অধ্যায় 15 — content: `./15-market-sales.body.html` */
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
