import body from './02-panir-biggan.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '02-panir-biggan'

const LEAD = `অধ্যায় ০১-এ জেনেছেন বায়োফ্লক কী। এই অধ্যায়ে জানবেন <em>কেন</em> কাজ করে। ভয় পাবেন না — একটাও কঠিন সূত্র মুখস্থ করতে হবে না। শুধু পাঁচটা জিনিস বুঝলেই আপনি ট্যাংকের ভেতরের পুরো খেলাটা পড়তে পারবেন।`

/** অধ্যায় 02 — content: `./02-panir-biggan.body.html` */
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
