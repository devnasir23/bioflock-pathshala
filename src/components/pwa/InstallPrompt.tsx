import { BrandMark } from '@/components/brand/BrandMark'
import { usePwaInstall } from '@/hooks/usePwaInstall'
import styles from './InstallPrompt.module.css'

export function InstallPrompt() {
  const { open, mode, installing, install, dismiss } = usePwaInstall()

  if (!open || !mode) return null

  return (
    <div className={styles.root} role="dialog" aria-modal="true" aria-labelledby="bp-install-title">
      <button
        type="button"
        className={styles.backdrop}
        aria-label="বন্ধ করুন"
        onClick={dismiss}
      />
      <div className={styles.sheet}>
        <div className={styles.handle} aria-hidden />
        <div className={styles.header}>
          <BrandMark size={52} />
          <div className={styles.copy}>
            <h2 id="bp-install-title" className={styles.title}>
              অ্যাপ হিসেবে ইনস্টল করুন
            </h2>
            <p className={styles.sub}>
              হোম স্ক্রিনে রাখুন — অফলাইনেও অধ্যায় পড়া যাবে, দ্রুত খুলবে।
            </p>
          </div>
        </div>

        {mode === 'chrome' ? (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primary}
              onClick={() => void install()}
              disabled={installing}
            >
              {installing ? 'ইনস্টল হচ্ছে…' : 'ইনস্টল করুন'}
            </button>
            <button type="button" className={styles.secondary} onClick={dismiss}>
              এখন নয়
            </button>
          </div>
        ) : (
          <div className={styles.ios}>
            <ol className={styles.steps}>
              <li>
                নিচের <strong>Share</strong> (□↑) বাটনে ট্যাপ করুন
              </li>
              <li>
                <strong>Add to Home Screen</strong> বেছে নিন
              </li>
              <li>
                <strong>Add</strong> চাপুন
              </li>
            </ol>
            <button type="button" className={styles.secondary} onClick={dismiss}>
              বুঝেছি
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
