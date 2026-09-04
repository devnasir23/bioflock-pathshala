import body from './11-project-multi-species.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '11-project-multi-species'

const LEAD = `শিং, কই, পোনা আর সবজি — এক শেডের নিচে চারটা আয়ের ধারা। এই অধ্যায়ের হিসাব প্রমাণ করবে যে বৈচিত্র্য লাভ বাড়ায় না, কিন্তু খারাপ বছরে খামারকে বাঁচিয়ে রাখে।`

/** অধ্যায় 11 — content: `./11-project-multi-species.body.html` */
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
