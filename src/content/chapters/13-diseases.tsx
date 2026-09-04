import body from './13-diseases.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '13-diseases'

const LEAD = `মাছ অসুস্থ হলে হাতে সময় থাকে কয়েক ঘণ্টা। এই অধ্যায়ে লক্ষণ দেখে রোগ চেনার টেবিল, প্রতিটা চিকিৎসার সঠিক মাত্রা, আর সবচেয়ে জরুরি কথাটা — ওষুধ দেওয়ার আগে পানি মাপুন।`

/** অধ্যায় 13 — content: `./13-diseases.body.html` */
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
