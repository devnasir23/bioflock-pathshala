import body from './14-power-outage.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '14-power-outage'

const LEAD = `বায়োফ্লকে বিদ্যুৎ মানে অক্সিজেন, আর অক্সিজেন মানে জীবন। এই অধ্যায়ে হাতে কত সময় আছে তার হিসাব, চার স্তরের ব্যাকআপ দামসহ, আর যে খাতাটা লিখে রাখলে দুর্যোগের রাতে ভাবতে হয় না।`

/** অধ্যায় 14 — content: `./14-power-outage.body.html` */
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
