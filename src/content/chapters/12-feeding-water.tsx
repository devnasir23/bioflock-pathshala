import body from './12-feeding-water.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '12-feeding-water'

const LEAD = `প্রজেক্টের অধ্যায়গুলো বলেছে কী বানাবেন। এই অধ্যায় বলবে প্রতিদিন সকাল থেকে রাত পর্যন্ত ঠিক কী করবেন — কত খাবার, কোন সংখ্যা মাপা, আর কোন সংখ্যা দেখলে হাত থেমে যাবে।`

/** অধ্যায় 12 — content: `./12-feeding-water.body.html` */
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
