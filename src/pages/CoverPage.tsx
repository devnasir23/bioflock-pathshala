import { Link } from 'react-router-dom'
import { BrandMark } from '@/components/brand/BrandMark'
import { PARTS } from '@/content/catalog'
import { chapterNum } from '@/lib/bn'
import styles from './CoverPage.module.css'

const AUDIENCE = [
  'যাঁরা বায়োফ্লক সম্পর্কে এখনও কিছুই জানেন না এবং একেবারে গোড়া থেকে শিখতে চান',
  'যাঁরা বাড়িতে একটি ছোট ট্যাংক দিয়ে নিজে হাতে পরীক্ষা করে দেখতে চান',
  'যাঁরা খণ্ডকালীন বা পূর্ণকালীন পেশা হিসেবে মাছ চাষ শুরু করার কথা ভাবছেন',
  'যাঁরা ছোট খামার থেকে বাণিজ্যিক পর্যায়ে উন্নীত হওয়ার বাস্তবসম্মত পথ খুঁজছেন',
  'যাঁরা অতিরঞ্জিত প্রতিশ্রুতির পরিবর্তে প্রকৃত সংখ্যা ও নির্ভরযোগ্য হিসাব দেখে সিদ্ধান্ত নিতে চান',
]

const HOW_TO_READ = [
  'পর্ব ১ ও ২ কখনও এড়িয়ে যাবেন না — এই দুটি পর্বেই আসল ভিত্তি তৈরি হয়',
  'পর্ব ৩-এর প্রজেক্টগুলো ক্রমানুসারে পড়ার প্রয়োজন নেই — আপনার বাজেট ও লক্ষ্যের সঙ্গে যেটি সবচেয়ে বেশি মেলে, সেখান থেকেই শুরু করুন',
  'প্রতিটি প্রজেক্ট-অধ্যায়কে একটি নমুনা হিসেবে দেখুন — নিজের পরিস্থিতি অনুযায়ী সংখ্যাগুলো সমন্বয় করে নিন',
  'পর্ব ৪ সবসময় হাতের কাছে রাখুন — চাষ শুরুর পর বারবার এখানে ফিরে আসতে হবে',
  'প্রথম চক্র শেষ হওয়ার পর, যখন ব্যবসা বড় করার কথা ভাবছেন, তখন পর্ব ৫ পড়ুন',
]

export function CoverPage() {
  const first = PARTS[0]!.chapters[0]!

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.tagline}>একটি বিস্তারিত জ্ঞানভিত্তিক গাইড</p>
        <BrandMark size={88} />
        <h1 className={styles.title}>বায়োফ্লক পাঠশালা</h1>
        <p className={styles.subtitle}>
          বাস্তব প্রজেক্ট ও নির্ভুল হিসাব-নিকাশের মাধ্যমে বায়োফ্লক মৎস্য চাষ গভীরভাবে জানার সম্পূর্ণ গাইড
        </p>
        <p className={styles.scope}>
          ৫০০ লিটারের ঘরোয়া ট্যাংক থেকে শুরু করে ৫০,০০০+ লিটারের বাণিজ্যিক
          খামার পর্যন্ত
        </p>
        <p className={styles.author}>লেখক: নাসরুল্লাহ</p>
        <Link className={styles.cta} to={`/adhyay/${first.slug}`}>
          পড়া শুরু করুন →
        </Link>
      </section>

      <section className={styles.section}>
        <h2>ভূমিকা</h2>
        <p>
          বায়োফ্লক একটি আধুনিক মৎস্যচাষ পদ্ধতি, যেখানে অল্প পানিতে অনেক বেশি
          মাছ চাষ করা সম্ভব। পানিতে থাকা উপকারী ব্যাকটেরিয়া মাছের বর্জ্য
          পরিশোধন করে, আর সেই বর্জ্য থেকেই তৈরি হয় মাছের পুষ্টিকর বাড়তি
          খাবার। এই বইয়ে ধাপে ধাপে দেখানো হয়েছে কীভাবে এই পদ্ধতিতে মাছ চাষ
          শুরু করতে হয়।
        </p>
        <p>
          বইয়ের মূল অংশজুড়ে রয়েছে বাস্তব প্রজেক্ট। ৫০০ লিটারের ছোট ঘরোয়া
          ট্যাংক থেকে শুরু করে ৫০,০০০ লিটারের বাণিজ্যিক খামার পর্যন্ত — প্রতিটি
          অধ্যায়ে থাকছে প্রকৃত হিসাব: কত টাকা বিনিয়োগ লাগবে, কী কী কিনতে হবে,
          এবং কতদিনে ফল পাওয়া যাবে।
        </p>
        <p>
          মাসে লাখ টাকা আয়ের অতিরঞ্জিত প্রতিশ্রুতি এই বইয়ে নেই। লাভের পাশাপাশি
          ঝুঁকি ও সাধারণ ভুলগুলোও খোলাখুলিভাবে আলোচনা করা হয়েছে, যাতে আপনি
          বাস্তব চিত্র বুঝে শুরু করতে পারেন।
        </p>
      </section>

      <section className={styles.section}>
        <h2>এই বই কাদের জন্য</h2>
        <ul className={styles.list}>
          {AUDIENCE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>বইটি কীভাবে পড়বেন</h2>
        <ol className={styles.steps}>
          {HOW_TO_READ.map((item, i) => (
            <li key={item}>
              <span className={styles.stepNum}>{chapterNum(i + 1)}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>সূচিপত্র</h2>
        {PARTS.map((part) => (
          <div key={part.id} className={styles.tocPart} data-accent={part.accent}>
            <div className={styles.tocPartHead}>
              পর্ব {part.num} · {part.title}
            </div>
            {part.chapters.map((ch) => (
              <Link
                key={ch.slug}
                to={`/adhyay/${ch.slug}`}
                className={styles.tocItem}
              >
                <span className={styles.tocNum}>{chapterNum(ch.id)}</span>
                <span>
                  <strong>{ch.title}</strong>
                  <span className={styles.tocDesc}>{ch.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
