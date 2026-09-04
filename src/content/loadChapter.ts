import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

/** Lazy chapter modules — each file becomes its own JS chunk. */
const modules = import.meta.glob<{ default: ComponentType }>(
  './chapters/*.tsx',
)

/** Stable lazy components (created once). Do not call lazy() during render. */
const chapterLazyMap: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {}

for (const [path, loader] of Object.entries(modules)) {
  const slug = path.replace('./chapters/', '').replace(/\.tsx$/, '')
  chapterLazyMap[slug] = lazy(loader)
}

export function getLazyChapter(slug: string) {
  return chapterLazyMap[slug] ?? null
}

export function chapterChunkKeys() {
  return Object.keys(chapterLazyMap)
}
