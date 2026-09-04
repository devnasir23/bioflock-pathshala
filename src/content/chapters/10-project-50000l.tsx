import body from './10-project-50000l.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '10-project-50000l'

const LEAD = `এই ধাপে আপনি মাছ চাষ করেন না — একটা প্রতিষ্ঠান চালান। বারোটা ট্যাংক, দুজন বেতনভুক্ত কর্মী, পনেরো লাখ টাকার বিনিয়োগ আর এক বছরের পূর্ণ লাভ-ক্ষতির হিসাব। সংখ্যাগুলো এখানে নির্মম, কিন্তু সৎ।`

/** অধ্যায় 10 — content: `./10-project-50000l.body.html` */
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
