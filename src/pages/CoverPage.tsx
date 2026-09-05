import { Link } from 'react-router-dom'
import { BrandMark } from '@/components/brand/BrandMark'
import { PARTS } from '@/content/catalog'
import { chapterNum } from '@/lib/bn'
import styles from './CoverPage.module.css'

const AUDIENCE = [
  'যাঁরা বায়োফ্লক সম্পর্কে কিছুই জানেন না, একেবারে শুরু থেকে শিখতে চান',
  'যাঁরা বাড়িতে ছোট একটি ট্যাংক দিয়ে নিজে হাতে করে দেখতে চান',
  'যাঁরা শখ হিসেবে বা পুরোদস্তুর পেশা হিসেবে মাছ চাষ শুরু করার কথা ভাবছেন',
  'যাঁরা ছোট খামারকে বাণিজ্যিক খামারে বড় করার বাস্তব পথ খুঁজছেন',
  'যাঁরা বাড়িয়ে বলা কথা নয়, বাস্তব হিসাব দেখে সিদ্ধান্ত নিতে চান',
]

const HOW_TO_READ = [
  'পর্ব ১ ও ২ কখনও এড়িয়ে যাবেন না — আসল ভিত্তি এই দুই পর্বেই তৈরি হয়',
  'পর্ব ৩-এর প্রজেক্টগুলো পরপর পড়ার দরকার নেই — নিজের বাজেট ও লক্ষ্যের সঙ্গে যেটি সবচেয়ে মেলে, সেখান থেকে শুরু করুন',
  'প্রতিটি প্রজেক্টকে একটি নমুনা হিসেবে দেখুন — নিজের অবস্থা বুঝে সংখ্যাগুলো মিলিয়ে নিন',
  'পর্ব ৪ সবসময় হাতের কাছে রাখুন — চাষ শুরুর পর বারবার এখানে ফিরে আসবেন',
  'প্রথম চক্র শেষ হলে, যখন ব্যবসা বড় করার কথা ভাববেন, তখন পর্ব ৫ পড়ুন',
]

export function CoverPage() {
  const first = PARTS[0]!.chapters[0]!

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.tagline}>শুরু থেকে শেখার বিস্তারিত গাইড</p>
        <BrandMark size={88} />
        <h1 className={styles.title}>বায়োফ্লক পাঠশালা</h1>
        <p className={styles.subtitle}>
          হাতেকলমে প্রজেক্ট আর বাস্তব হিসাব দিয়ে বায়োফ্লকে মাছ চাষ শেখার গাইড
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
          বায়োফ্লক একটি আধুনিক মাছ চাষ পদ্ধতি। এতে অল্প পানিতে অনেক বেশি
          মাছ চাষ করা যায়। পানিতে থাকা উপকারী ব্যাকটেরিয়া মাছের বর্জ্য
          পরিষ্কার করে। সেই বর্জ্যই আবার মাছের বাড়তি খাবারে পরিণত হয়।
          এই বইয়ে ধাপে ধাপে দেখানো হয়েছে, এই পদ্ধতিতে কীভাবে মাছ চাষ
          শুরু করবেন।
        </p>
        <p>
          বইয়ের মূল অংশজুড়ে রয়েছে বাস্তব প্রজেক্ট। ছোট ঘরোয়া ট্যাংক থেকে
          শুরু করে বড় বাণিজ্যিক খামার পর্যন্ত প্রতিটি প্রজেক্টে থাকছে খরচের
          হিসাব — কী কী কিনতে হবে, খরচ মোটামুটি কেমন পড়তে পারে, আর কতদিনে
          ফল পাবেন। দাম বাজার ও সময়ের সঙ্গে বদলায়, তাই টাকার অঙ্কগুলো
          ধারণা হিসেবে ধরুন।
        </p>
        <p>
          এই বইয়ে বাড়িয়ে বলা কোনো আয়ের প্রতিশ্রুতি নেই। লাভের সঙ্গে ঝুঁকি
          আর সাধারণ ভুলগুলোও খোলাখুলি বলা হয়েছে, যাতে আপনি বাস্তব ছবিটা বুঝে
          শুরু করতে পারেন।
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
