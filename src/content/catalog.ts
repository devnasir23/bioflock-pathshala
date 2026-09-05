/** Single source of truth for book navigation & chapter metadata.
 *  Edit a chapter? Open `src/content/chapters/<slug>.tsx`.
 *  Add a chapter? Register it here AND add the matching file.
 */

export type ChapterStatus = 'ready' | 'draft'

export type PartAccent =
  | 'teal'
  | 'green'
  | 'amber'
  | 'red'
  | 'violet'

export type ChapterMeta = {
  id: number
  slug: string
  title: string
  desc: string
  status: ChapterStatus
}

export type PartMeta = {
  id: string
  num: string
  title: string
  accent: PartAccent
  chapters: ChapterMeta[]
}

export const PARTS: PartMeta[] = [
  {
    id: 'part-01',
    num: '০১',
    title: 'ভিত্তি জ্ঞান',
    accent: 'teal',
    chapters: [
      {
        id: 1,
        slug: '01-biofloc-ki-o-keno',
        title: 'বায়োফ্লক কী ও কেন',
        desc: 'একেবারে শুরু থেকে বায়োফ্লক বোঝা',
        status: 'ready',
      },
      {
        id: 2,
        slug: '02-panir-biggan',
        title: 'পানির বিজ্ঞান, সহজ করে',
        desc: 'ব্যাকটেরিয়া, C:N অনুপাত আর নাইট্রোজেন চক্র সহজ ভাষায়',
        status: 'ready',
      },
      {
        id: 3,
        slug: '03-pukur-vs-biofloc',
        title: 'পুকুর বনাম বায়োফ্লক',
        desc: 'কখন কোনটা বেছে নেবেন — খোলাখুলি তুলনা',
        status: 'ready',
      },
    ],
  },
  {
    id: 'part-02',
    num: '০২',
    title: 'সেটআপ শেখা',
    accent: 'green',
    chapters: [
      {
        id: 4,
        slug: '04-tank-types',
        title: 'ট্যাংকের প্রকারভেদ',
        desc: 'তেরপল, ড্রাম নাকি সিমেন্ট — আপনার জন্য কোনটা ঠিক',
        status: 'ready',
      },
      {
        id: 5,
        slug: '05-equipment',
        title: 'যন্ত্রপাতির তালিকা',
        desc: 'এয়ার পাম্প থেকে টেস্ট কিট — ছবি ও দামসহ পুরো তালিকা',
        status: 'ready',
      },
      {
        id: 6,
        slug: '06-water-cycling',
        title: 'পানি তৈরির প্রথম ধাপ',
        desc: 'মাছ ছাড়ার আগে ফ্লক তৈরির ধাপে ধাপে রুটিন',
        status: 'ready',
      },
    ],
  },
  {
    id: 'part-03',
    num: '০৩',
    title: 'বাস্তব প্রজেক্ট',
    accent: 'amber',
    chapters: [
      {
        id: 7,
        slug: '07-project-500l',
        title: 'প্রজেক্ট ১: ৫০০ লিটার হোম পাইলট',
        desc: 'শেখার প্রথম ধাপ — পুরো বাজেট ও পরিকল্পনা',
        status: 'ready',
      },
      {
        id: 8,
        slug: '08-project-2000l',
        title: 'প্রজেক্ট ২: ২,০০০ লিটার পারিবারিক খামার',
        desc: 'বাড়তি আয়ের বাস্তব হিসাব',
        status: 'ready',
      },
      {
        id: 9,
        slug: '09-project-10000l',
        title: 'প্রজেক্ট ৩: ১০,০০০ লিটার সেমি-কমার্শিয়াল',
        desc: 'পুরোদস্তুর পেশা হিসেবে',
        status: 'ready',
      },
      {
        id: 10,
        slug: '10-project-50000l',
        title: 'প্রজেক্ট ৪: ৫০,০০০+ লিটার কমার্শিয়াল খামার',
        desc: 'কর্মী, বিনিয়োগ ও লাভ-ক্ষতির বাস্তব হিসাব',
        status: 'ready',
      },
      {
        id: 11,
        slug: '11-project-multi-species',
        title: 'প্রজেক্ট ৫: কয়েক ধরনের মাছ ও সবজি একসাথে',
        desc: 'কই + তেলাপিয়া + সবজি একসাথে',
        status: 'ready',
      },
    ],
  },
  {
    id: 'part-04',
    num: '০৪',
    title: 'যত্ন ও সমস্যা সমাধান',
    accent: 'red',
    chapters: [
      {
        id: 12,
        slug: '12-feeding-water',
        title: 'খাওয়ানো ও পানি ব্যবস্থাপনা',
        desc: 'প্রতিদিনের যে রুটিন আপনাকে দক্ষ করবে',
        status: 'ready',
      },
      {
        id: 13,
        slug: '13-diseases',
        title: 'রোগ চেনা ও সামলানো',
        desc: 'লক্ষণ চিনে দ্রুত চিকিৎসা — প্রতিটি রোগ এক নজরে',
        status: 'ready',
      },
      {
        id: 14,
        slug: '14-power-outage',
        title: 'বিদ্যুৎ চলে গেলে',
        desc: 'ব্যাকআপ পরিকল্পনা ও ঝুঁকি ব্যবস্থাপনা',
        status: 'ready',
      },
    ],
  },
  {
    id: 'part-05',
    num: '০৫',
    title: 'ব্যবসা বড় করা',
    accent: 'violet',
    chapters: [
      {
        id: 15,
        slug: '15-market-sales',
        title: 'বাজার ও বিক্রয় কৌশল',
        desc: 'কোথায়, কাকে, কীভাবে বিক্রি করবেন',
        status: 'ready',
      },
      {
        id: 16,
        slug: '16-scaling-roadmap',
        title: 'বড় করার রোডম্যাপ: ধাপে ধাপে',
        desc: 'বাস্তব সংখ্যা দিয়ে ধাপে ধাপে বড় হওয়ার পথ',
        status: 'ready',
      },
      {
        id: 17,
        slug: '17-next-steps',
        title: 'পরের ধাপ ও শেখার উৎস',
        desc: 'যেখান থেকে শেখা চালিয়ে যাবেন',
        status: 'ready',
      },
    ],
  },
]

export const FLAT_CHAPTERS: ChapterMeta[] = PARTS.flatMap((p) => p.chapters)

export function getChapter(slug: string): ChapterMeta | undefined {
  return FLAT_CHAPTERS.find((c) => c.slug === slug)
}

export function getPartForChapter(slug: string): PartMeta | undefined {
  return PARTS.find((p) => p.chapters.some((c) => c.slug === slug))
}

export function getNeighbors(slug: string) {
  const idx = FLAT_CHAPTERS.findIndex((c) => c.slug === slug)
  return {
    prev: idx > 0 ? FLAT_CHAPTERS[idx - 1] : null,
    next: idx >= 0 && idx < FLAT_CHAPTERS.length - 1 ? FLAT_CHAPTERS[idx + 1] : null,
    index: idx,
  }
}
