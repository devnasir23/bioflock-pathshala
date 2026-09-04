import body from './06-water-cycling.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '06-water-cycling'

const LEAD = `ট্যাংক তৈরি, যন্ত্র বসানো। এখন পানিকে জীবন্ত করার পালা। মাছ ছাড়ার আগের ১৫ দিন — দিন ধরে ধরে কী করবেন, কী মাপবেন, আর কখন বুঝবেন পানি তৈরি।`

/** অধ্যায় 06 — content: `./06-water-cycling.body.html` */
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
