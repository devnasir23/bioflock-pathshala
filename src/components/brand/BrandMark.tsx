type BrandMarkProps = {
  size?: number
  className?: string
}

export function BrandMark({ size = 38, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      className={className}
      aria-hidden
    >
      <circle
        cx="500"
        cy="500"
        r="462"
        fill="none"
        stroke="#F6C453"
        strokeWidth="46"
      />
      <circle cx="500" cy="500" r="400" fill="#0F7F8C" />
      <path
        d="M 150 400 Q 250 360 350 400 T 550 400 T 750 400 T 870 400"
        fill="none"
        stroke="#ffffff"
        strokeWidth="22"
        opacity="0.3"
      />
      <g transform="translate(500,560) rotate(-8) scale(1.35)">
        <path
          d="M -140 0 C -140 -55 -60 -90 40 -60 C 100 -40 130 -10 155 0 C 130 10 100 40 40 60 C -60 90 -140 55 -140 0 Z"
          fill="#F6C453"
        />
        <path d="M -140 0 L -190 -35 L -175 0 L -190 35 Z" fill="#F6C453" />
        <circle cx="20" cy="-15" r="11" fill="#0B3D4A" />
      </g>
    </svg>
  )
}
