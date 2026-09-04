type ChapterHtmlProps = {
  html: string
}

/** Renders a migrated legacy chapter body (inline styles + --bp-* tokens). */
export function ChapterHtml({ html }: ChapterHtmlProps) {
  return (
    <div
      className="chapter-html"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
