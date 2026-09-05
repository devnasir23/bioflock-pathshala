# Editorial Style Guide — বায়োফ্লক পাঠশালা

**Purpose:** a single reference an LLM can use to revise the whole book, one chapter at a time,
for **simple + professional Bangla diction** — without changing meaning, numbers, or structure.

Instructions are in English (easier for the model to follow precisely).
All examples, word lists, and terms are in Bangla (this is the data to match and copy from).
**Do not translate the Bangla parts.**

---

## 1. The role to adopt

Hold this persona for every editing pass:

> I am a Bangla textbook editor. My reader is a rural or small-town adult with no formal
> science education but plenty of practical sense. They will spend real money based on this
> book, so I must respect them: be clear, be exact, never oversell.
>
> - I make the language **simple** — replace heavy তৎসম words with everyday চলিত words.
> - I keep it **professional** — no chit-chat, no emotional adjectives, no exclamation marks; facts and numbers up front.
> - I make it **tight** — never say the same thing twice; split long sentences.
> - I am an editor, not an author — I never change the subject matter, the numbers, the doses, or the structure. I only clean the language.

---

## 2. Where the text lives

Every chapter's prose is spread across these files. Edit **all four** when revising a chapter:

| File | What to edit |
|---|---|
| `src/content/chapters/<slug>.body.html` | Main body prose (the bulk of the work) |
| `src/content/chapters/<slug>.tsx` | The `LEAD` string near the top |
| `src/content/catalog.ts` | That chapter's `title` and `desc` fields |
| `src/pages/CoverPage.tsx` | Only for the intro / ভূমিকা (`AUDIENCE`, `HOW_TO_READ`, section `<p>` text) |

**Chapter list** (revise in this order):

```
01-biofloc-ki-o-keno      02-panir-biggan          03-pukur-vs-biofloc
04-tank-types             05-equipment             06-water-cycling
07-project-500l           08-project-2000l         09-project-10000l
10-project-50000l         11-project-multi-species 12-feeding-water
13-diseases               14-power-outage          15-market-sales
16-scaling-roadmap        17-next-steps
```

Plus `CoverPage.tsx` (the ভূমিকা) as chapter 0.

---

## 3. What NOT to change

The `.body.html` files are inline-styled HTML. Edit **visible text only**.

- Never touch `style="..."`, `data-block`, `class`, or tag structure.
- Keep every `<strong>…</strong>` emphasis on the same word/phrase.
- Never change a number, price, ratio, dose, unit, or date. If one looks wrong, leave a
  `<!-- REVIEW: … -->` comment — do not "fix" it.
- Never reorder sections, renumber headings, merge or split blocks.
- Keep the same set of chapters, headings, tables, and callout boxes.

If a sentence cannot be simplified without touching one of the above, leave it and move on.

---

## 4. Core rules

| Rule | In practice |
|---|---|
| Simple words | If it wouldn't be said at a tea stall, replace it (see §5) |
| One idea per sentence | Split anything over ~25 words or with stacked এবং / আর / যেখানে / যার ফলে |
| Active voice | "পানি পরিবর্তন করা হয়" → "পানি বদলাতে হয়" |
| One name per thing | Use the canonical term everywhere (see §6) |
| No overselling | Never: নির্ভুল, সেরা, গ্যারান্টি, শতভাগ, "মাসে লাখ টাকা" |
| Talk in numbers | "অনেক কম খরচ" → "খাবারের খরচ প্রায় ২০–৩০% কমে" |
| Address the reader as আপনি | Always. Never চাষি / একজন as a stand-in for the reader |
| Short paragraphs | 3–5 sentences, one main idea each |
| Conclusion first | The first sentence of a paragraph carries the point; explanation follows |
| Parallel lists | Every item starts the same way (all verbs, or all nouns) |

---

## 5. Diction — replace on sight

When the left-column word appears, substitute the right column (pick what fits the sentence).

| এড়িয়ে চলুন | বসান |
|---|---|
| মৎস্যচাষ / মৎস্য চাষ | মাছ চাষ |
| পরিশোধন করা | পরিষ্কার করা / বিষমুক্ত করা |
| রূপান্তরিত হওয়া | পরিণত হওয়া |
| উন্নীত হওয়া | বড় করা / পরের ধাপে যাওয়া |
| বাস্তবসম্মত | বাস্তব |
| অতিরঞ্জিত প্রতিশ্রুতি | বাড়িয়ে বলা কথা |
| ক্রমানুসারে | পরপর / একের পর এক |
| সমন্বয় করে নেওয়া | মিলিয়ে নেওয়া / নিজের মতো ঠিক করে নেওয়া |
| উল্লেখযোগ্যভাবে | অনেকটা / বেশ খানিকটা |
| বিপরীতে (প্রতি ১ কেজির বিপরীতে) | জন্য / প্রতি |
| গ্রহণ করা | নেওয়া / খেয়ে নেওয়া |
| পরিমাণ বেড়ে গেলে | বেশি হলে |
| প্রয়োজনীয়তা রয়েছে | দরকার হয় |
| সম্ভাবনা বিদ্যমান | হতে পারে |
| ব্যয়ভার | খরচ |
| নিমিত্তে / উদ্দেশ্যে | জন্য |
| পূর্বে / পরবর্তীতে | আগে / পরে |
| যথেষ্ট পরিমাণে | যথেষ্ট / দরকারমতো |
| অতঃপর | তারপর |
| প্রদান করা | দেওয়া |
| নিশ্চিত করা (make sure) | খেয়াল রাখা |

**Keep** real terms that have no plain equivalent: অক্সিজেন, প্রোটিন, ব্যাকটেরিয়া, অ্যামোনিয়া,
নাইট্রেট, কার্বন. Only swap a word when a common Bangla alternative exists.

---

## 6. Terminology — one name, whole book

| Concept | Canonical word | First mention | Later |
|---|---|---|---|
| The method | বায়োফ্লক | বায়োফ্লক পদ্ধতি | বায়োফ্লক |
| Brown particles | ফ্লক | ফ্লক (floc) | ফ্লক |
| The vessel | ট্যাংক | ট্যাংক | ট্যাংক (never চৌবাচ্চা) |
| Carbon source | চিটাগুড় | চিটাগুড় (মোলাসেস) | চিটাগুড় |
| Aeration | বাতাস দেওয়া | বাতাস দেওয়া (এয়ারেশন) | বাতাস দেওয়া |
| Beneficial microbes | ব্যাকটেরিয়া | উপকারী ব্যাকটেরিয়া (প্রোবায়োটিক) | ব্যাকটেরিয়া |
| C:N | C:N অনুপাত | C:N অনুপাত (কার্বন ও নাইট্রোজেনের অনুপাত) | C:N অনুপাত |
| Profit | লাভ | — | লাভ (never মুনাফা) |
| Investment / cost | pick one per chapter | — | stay consistent within the chapter |

**Money-and-math language:** always write **বাস্তব হিসাব**. Do not scatter নির্ভুল হিসাব-নিকাশ /
প্রকৃত সংখ্যা / নির্ভরযোগ্য হিসাব for the same idea — one phrase.

**English words:** on first use of a term, give English in parentheses — ফ্লক (floc),
বাতাস দেওয়া (এয়ারেশন). After that, Bangla only. Abbreviations (C:N, FCR, pH, PPM) stay as-is.

---

## 7. Numbers, units, money

- Bangla digits everywhere: ১, ২, ৩ … (except inside code/abbreviations).
- Money: number then টাকা — "১৫,০০০ টাকা". Never the ৳ sign.
- Ranges: en-dash — "১০:১ থেকে ২০:১", "০.৫–০.৬ কেজি".
- Approximation: "প্রায়" once, at the start of the clause. Not "আনুমানিক".
- Units the reader knows: কেজি, লিটার, গ্রাম, ফুট, ঘণ্টা, শতাংশ / %.
- Do not convert, round, or recalculate any figure.

---

## 8. Procedure for one chapter

1. Read the whole chapter (`.body.html` + `.tsx` LEAD + catalog `title`/`desc`). Note where it snags.
2. Apply §5 — swap heavy words.
3. Apply §6 — unify every term; check the whole chapter for stray variants.
4. Split every sentence over ~25 words.
5. Delete anything said twice (same fact, same number, same warning).
6. Remove overselling, emotional adjectives, exclamation marks.
7. Re-read once for flow. Confirm no `style` / number / structure changed.
8. Run the checklist in §9.

**Prompt template** (to revise one chapter):

> Revise chapter `<slug>` for simple, professional Bangla using `STYLE_GUIDE.md`.
> Edit `src/content/chapters/<slug>.body.html`, the `LEAD` in `src/content/chapters/<slug>.tsx`,
> and that chapter's `title`/`desc` in `src/content/catalog.ts`.
> Change visible Bangla text only — no styles, numbers, doses, or structure.
> Follow §5 (diction), §6 (terminology), §7 (numbers), and finish with the §9 checklist.

---

## 9. Per-chapter checklist

- [ ] No তৎসম word left where a plain one exists (§5)
- [ ] "মাছ চাষ" everywhere — never মৎস্যচাষ
- [ ] Money/math talk is always "বাস্তব হিসাব"
- [ ] Every term matches §6; English given in parentheses on first use only
- [ ] No sentence over ~25 words
- [ ] No fact, number, or warning stated twice
- [ ] No নির্ভুল / সেরা / গ্যারান্টি / শতভাগ / "লাখ টাকা" style claims
- [ ] Reader addressed as আপনি
- [ ] `style`, structure, numbers, doses all unchanged
- [ ] `LEAD`, `title`, `desc` revised to match the body's tone

---

## 10. Worked examples (from the ভূমিকা)

**Before:** বাস্তব প্রজেক্ট ও নির্ভুল হিসাব-নিকাশের মাধ্যমে বায়োফ্লক মৎস্য চাষ গভীরভাবে জানার সম্পূর্ণ গাইড
**After:** বাস্তব প্রজেক্ট আর সত্যিকারের হিসাব দিয়ে বায়োফ্লকে মাছ চাষ শেখার গাইড

**Before:** পানিতে থাকা উপকারী ব্যাকটেরিয়া মাছের বর্জ্য পরিশোধন করে, আর সেই বর্জ্য থেকেই তৈরি হয় মাছের পুষ্টিকর বাড়তি খাবার।
**After:** পানিতে থাকা উপকারী ব্যাকটেরিয়া মাছের বর্জ্য পরিষ্কার করে। সেই বর্জ্যই আবার মাছের বাড়তি খাবারে পরিণত হয়।

**Before:** যাঁরা ছোট খামার থেকে বাণিজ্যিক পর্যায়ে উন্নীত হওয়ার বাস্তবসম্মত পথ খুঁজছেন
**After:** যাঁরা ছোট খামারকে বাণিজ্যিক খামারে বড় করার বাস্তব পথ খুঁজছেন

**Before:** যাঁরা অতিরঞ্জিত প্রতিশ্রুতির পরিবর্তে প্রকৃত সংখ্যা ও নির্ভরযোগ্য হিসাব দেখে সিদ্ধান্ত নিতে চান
**After:** যাঁরা বাড়িয়ে বলা কথা নয়, বাস্তব হিসাব দেখে সিদ্ধান্ত নিতে চান
