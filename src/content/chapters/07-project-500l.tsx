import body from './07-project-500l.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '07-project-500l'

const LEAD = `উঠানের এক কোণে একটা ট্যাংক। পুরো কেনাকাটার তালিকা, প্রতিদিনের রুটিন, খাবারের হিসাব — আর শেষে সৎ হিসাব: এতে কত টাকা আসে, কত যায়।`

/** অধ্যায় 07 — content: `./07-project-500l.body.html` */
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
