import body from './17-next-steps.body.html?raw'
import { ChapterHtml } from '@/components/chapter/ChapterHtml'
import { ChapterShell } from '@/components/chapter/ChapterShell'
import { getChapter, getPartForChapter } from '@/content/catalog'

const SLUG = '17-next-steps'

const LEAD = `বই শেষ হলো, কাজ শুরু হলো। এই অধ্যায়ে আগামী ৩০ দিনের কাজের তালিকা, কোথায় সত্যিকারের সহায়তা পাওয়া যায়, ভুয়া প্রশিক্ষণ চেনার উপায়, আর পুরো বইয়ের সংখ্যাগুলো এক নজরে।`

/** অধ্যায় 17 — content: `./17-next-steps.body.html` */
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
