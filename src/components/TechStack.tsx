import { WaveDivider, WavyUnderline } from './Icons'

const stack = [
  {
    name: 'Vite',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="#BD34FE"
          d="M16.2 2.5 29.5 26.3c.5.9-.2 2-1.2 2H3.7c-1 0-1.7-1.1-1.2-2L16.2 2.5Z"
        />
        <path
          fill="#41D1FF"
          d="M16.2 7.2 8.3 21.5h4.4l3.5-6.4 3.5 6.4h4.4L16.2 7.2Z"
        />
      </svg>
    ),
  },
  {
    name: 'React 19',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.4">
          <ellipse cx="16" cy="16" rx="11" ry="4.5" />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.5"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.5"
            transform="rotate(120 16 16)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="4" fill="#3178C6" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontFamily="Syne, sans-serif"
          fontWeight="700"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: 'Single Page',
    detail: 'no routing',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="26"
          height="22"
          rx="3"
          fill="none"
          stroke="#7DD3C7"
          strokeWidth="2"
        />
        <path d="M3 11h26" stroke="#7DD3C7" strokeWidth="2" />
        <circle cx="7.5" cy="8" r="1" fill="#7DD3C7" />
        <circle cx="11" cy="8" r="1" fill="#7DD3C7" />
        <circle cx="14.5" cy="8" r="1" fill="#7DD3C7" />
      </svg>
    ),
  },
  {
    name: 'Plain CSS',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="#7DD3C7"
          fontSize="18"
          fontFamily="Syne, sans-serif"
          fontWeight="600"
        >
          {'{}'}
        </text>
      </svg>
    ),
  },
]

export default function TechStack() {
  return (
    <section className="stack" id="stack">
      <WaveDivider className="stack__wave" fill="var(--color-ink)" />
      <div className="stack__inner section-inner">
        <h2 className="stack__title reveal">
          Tech Stack
          <WavyUnderline className="stack__underline" />
        </h2>

        <ul className="stack__list">
          {stack.map((item, i) => (
            <li
              key={item.name}
              className="stack__item reveal"
              style={{ animationDelay: `${0.06 * (i + 1)}s` }}
            >
              <span className="stack__icon">{item.icon}</span>
              <span className="stack__label">
                {item.name}
                {item.detail ? (
                  <span className="stack__detail">{item.detail}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
