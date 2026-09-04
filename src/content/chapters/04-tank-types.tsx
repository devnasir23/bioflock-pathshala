import body from './04-tank-types.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '04-tank-types'

const LEAD = `তেরপল, ড্রাম নাকি সিমেন্ট — আপনার জন্য কোনটা ঠিক। সাথে যে জিনিসটা নিয়ে কেউ কথা বলে না অথচ সবচেয়ে বেশি দুর্ঘটনা ঘটায়: ট্যাংকের <em>নিচের</em> অংশ।`

/** অধ্যায় 04 — content: `./04-tank-types.body.html` */
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
