import body from './05-equipment.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '05-equipment'

const LEAD = `এয়ার পাম্প থেকে টেস্ট কিট — কোনটা <em>অবশ্যই</em> লাগবে, কোনটা পরে, আর কোনটা দোকানদার জোর করে বেচে দেন। সাথে তিনটা আকারের পূর্ণ তালিকা ও আন্দাজি খরচ।`

/** অধ্যায় 05 — content: `./05-equipment.body.html` */
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
