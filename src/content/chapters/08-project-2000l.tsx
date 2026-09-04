import body from './08-project-2000l.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '08-project-2000l'

const LEAD = `এই ধাপে প্রথমবার টাকা আসে। কিন্তু আসে শুধু তখনই, যখন মাছ ঠিক বাছেন। মাছের পছন্দ, নার্সারি, বাতাসের হিসাব আর ছয় মাসের পূর্ণ লাভ-লোকসান।`

/** অধ্যায় 08 — content: `./08-project-2000l.body.html` */
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
