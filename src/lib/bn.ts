const BN = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'] as const

/** Convert ASCII digits to Bengali digits. */
export function bn(value: string | number): string {
  return String(value).replace(/\d/g, (d) => BN[Number(d)]!)
}

/** Pad chapter id → বাংলা ০১, ০২, … */
export function chapterNum(id: number): string {
  return bn(id < 10 ? `0${id}` : `${id}`)
}
