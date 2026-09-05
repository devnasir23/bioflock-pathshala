type BrandMarkProps = {
  size?: number
  className?: string
}

export function BrandMark({ size = 38, className }: BrandMarkProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      width={size}
      height={size}
      alt="বায়োফ্লক পাঠশালা লোগো"
      className={className}
      style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
    />
  )
}
