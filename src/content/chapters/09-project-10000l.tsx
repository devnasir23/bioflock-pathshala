import body from './09-project-10000l.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '09-project-10000l'

const LEAD = `এখানে আপনি আর চাষি নন — ব্যবস্থাপক। চারটা ট্যাংক, ছয় সপ্তাহের চাকা, ব্লোয়ার, জেনারেটর, আর এক বছরের পূর্ণ হিসাব — চাকরি ছাড়ার আগে সংখ্যাগুলো ঠান্ডা মাথায় দেখে নিন।`

/** অধ্যায় 09 — content: `./09-project-10000l.body.html` */
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
