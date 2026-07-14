export function Star({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
    </svg>
  )
}

export function WavyUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 16"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 10C30 2 50 14 80 8C110 2 130 14 160 8C190 2 210 14 240 8C255 5 268 8 278 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 13L13 3M13 3H5.5M13 3V10.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WaveDivider({
  className = '',
  fill = 'currentColor',
}: {
  className?: string
  fill?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40C120 10 240 70 360 40C480 10 600 70 720 40C840 10 960 70 1080 40C1200 10 1320 70 1440 40V80H0V40Z"
        fill={fill}
      />
    </svg>
  )
}

export function CherryIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4C12 4 10 1 7 2"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 4C12 4 14 1 17 2"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="15" r="5" fill="#C62828" />
      <circle cx="15.5" cy="15" r="5" fill="#E53935" />
      <circle cx="7" cy="13" r="1.2" fill="#FF8A80" opacity="0.7" />
      <circle cx="14" cy="13" r="1.2" fill="#FF8A80" opacity="0.7" />
    </svg>
  )
}
