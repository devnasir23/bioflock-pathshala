import { Link } from 'react-router-dom'
import { BrandMark } from '@/components/brand/BrandMark'
import { PARTS } from '@/content/catalog'
import { chapterNum } from '@/lib/bn'
import styles from './CoverPage.module.css'

const AUDIENCE = [
  'যিনি বায়োফ্লক সম্পর্কে কিছুই জানেন না, একদম প্রথম থেকে শিখতে চান',
  'যিনি বাড়িতে ছোট একটা ট্যাংক দিয়ে পরীক্ষা করে দেখতে চান',
  'যিনি পার্ট-টাইম বা ফুল-টাইম মাছ চাষকে পেশা হিসেবে নিতে ভাবছেন',
  'যিনি ছোট খামার থেকে বাণিজ্যিক পর্যায়ে বড় হওয়ার বাস্তব পথ খুঁজছেন',
  'যিনি অতিরঞ্জিত প্রতিশ্রুতি না শুনে সত্যিকারের সংখ্যা ও হিসাব দেখতে চান',
]

const HOW_TO_READ = [
  'পর্ব ১ ও ২ কখনো বাদ দেবেন না — এখানেই আসল বোঝাপড়া তৈরি হয়',
  'পর্ব ৩-এর প্রজেক্টগুলো ক্রম অনুযায়ী পড়ার দরকার নেই — বাজেট ও লক্ষ্যের সাথে যেটা মেলে সেটা থেকে শুরু করুন',
  'প্রতিটা প্রজেক্ট অধ্যায়কে নমুনা হিসেবে ব্যবহার করুন — নিজের পরিস্থিতি অনুযায়ী সংখ্যা বদলে নিন',
  'পর্ব ৪ হাতের কাছে রাখুন — চাষ শুরুর পর বারবার ফিরে আসতে হবে',
  'পর্ব ৫ পড়ুন যখন প্রথম চক্র শেষ হয়ে গেছে এবং বড় হওয়ার কথা ভাবছেন',
]

export function CoverPage() {
  const first = PARTS[0]!.chapters[0]!

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.tagline}>একটি হাতে-কলমে শেখার বই</p>
        <BrandMark size={88} />
        <h1 className={styles.title}>বায়োফ্লক পাঠশালা</h1>
        <p className={styles.subtitle}>
          বাস্তব প্রজেক্ট দিয়ে হাতে-কলমে মাছ চাষ শেখার সম্পূর্ণ গাইড
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
          বায়োফ্লক একটা পদ্ধতি, যেখানে অল্প পানিতে অনেক মাছ চাষ করা যায়। পানিতে
          থাকা ভালো ব্যাকটেরিয়া মাছের ময়লা পরিষ্কার করে, আর সেই ময়লা থেকেই
          তৈরি হয় মাছের বাড়তি খাবার। এই বইয়ে ধাপে ধাপে দেখানো হয়েছে কীভাবে
          এই পদ্ধতিতে মাছ চাষ শুরু করবেন।
        </p>
        <p>
          বইয়ের মূল অংশ হলো বাস্তব প্রজেক্ট। ৫০০ লিটারের ছোট ঘরোয়া ট্যাংক থেকে
          শুরু করে ৫০,০০০ লিটারের বড় খামার পর্যন্ত — প্রতিটা অধ্যায়ে থাকবে আসল
          হিসাব: কত টাকা লাগবে, কী কী কিনতে হবে, কতদিনে ফল পাবেন।
        </p>
        <p>
          মাসে লাখ টাকা আয়ের বড় বড় কথা এই বইয়ে নেই। লাভের পাশাপাশি ঝুঁকি ও
          সাধারণ ভুলগুলোও খোলাখুলি বলা হয়েছে, যাতে আসল চিত্র বুঝে শুরু করতে
          পারেন।
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
