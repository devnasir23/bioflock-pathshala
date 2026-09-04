import type { ReactNode } from 'react'
import type { PartAccent } from '@/content/catalog'
import { chapterNum } from '@/lib/bn'
import '@/styles/chapter.css'

type ChapterShellProps = {
  id: number
  title: string
  lead: string
  partNum: string
  partTitle: string
  accent: PartAccent
  children: ReactNode
}

export function ChapterShell({
  id,
  title,
  lead,
  partNum,
  partTitle,
  accent,
  children,
}: ChapterShellProps) {
  return (
    <article className="chapter" data-accent={accent}>
      <div className="chapter__banner">
        <div className="chapter__banner-inner">
          পর্ব {partNum} · {partTitle}
        </div>
      </div>
      <header className="chapter__hero">
        <div className="chapter__kicker">
          <span className="chapter__kicker-label">অধ্যায়</span>
          <span className="chapter__kicker-num">{chapterNum(id)}</span>
        </div>
        <h1 className="chapter__title">{title}</h1>
        <p
          className="chapter__lead"
          dangerouslySetInnerHTML={{ __html: lead }}
        />
      </header>
      <div className="chapter__body">{children}</div>
    </article>
  )
}

type CalloutProps = {
  label?: string
  variant?: 'default' | 'tip' | 'warn'
  children: ReactNode
}

export function Callout({ label, variant = 'default', children }: CalloutProps) {
  const mod =
    variant === 'tip' ? 'callout--tip' : variant === 'warn' ? 'callout--warn' : ''
  return (
    <aside className={`callout ${mod}`.trim()}>
      {label ? <span className="callout__label">{label}</span> : null}
      {children}
    </aside>
  )
}

export function DraftPlaceholder({ note }: { note?: string }) {
  return (
    <div className="draft-note">
      {note ?? 'এই অধ্যায়ের কনটেন্ট এখনো লেখা হয়নি।'}
    </div>
  )
}
