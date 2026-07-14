import cherryImg from '../assets/cherry.png'
import { ArrowIcon } from './Icons'

const contacts = [
  {
    label: 'Email',
    value: 'hello@alexmorgan.dev',
    href: 'mailto:hello@alexmorgan.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4 7l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Remote (Global)',
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s-7-5.4-7-11a7 7 0 1 1 14 0c0 5.6-7 11-7 11Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: 'Website',
    value: 'alexmorgan.dev',
    href: 'https://alexmorgan.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/alexmorgandev',
    href: 'https://github.com/alexmorgandev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexmorgandev',
    href: 'https://linkedin.com/in/alexmorgandev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H3.7v11.3h2.8V9ZM5.1 3.8a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.3 12.6c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V8.9h-2.8c0 .8 0 11.4 0 11.4h2.8v-6.4c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6v6.1h2.8v-6.6Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-inner site-footer__grid" id="about">
        <div className="site-footer__intro reveal">
          <p className="eyebrow">Let&apos;s create something great</p>
          <img
            src={cherryImg}
            alt=""
            className="site-footer__cherry"
            width={72}
            height={72}
          />
          <h2 className="site-footer__headline">
            Let&apos;s build something lovely
          </h2>
        </div>

        <ul className="site-footer__contacts reveal">
          {contacts.map((item) => (
            <li key={item.label}>
              <span className="contact-icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="visually-hidden">{item.label}: </span>
                  {item.value}
                </a>
              ) : (
                <span>
                  <span className="visually-hidden">{item.label}: </span>
                  {item.value}
                </span>
              )}
            </li>
          ))}
        </ul>

        <aside className="availability reveal reveal--delay">
          <p>Available for new opportunities</p>
          <a href="mailto:hello@alexmorgan.dev" className="btn btn--dark">
            Say Hello
            <ArrowIcon />
          </a>
        </aside>
      </div>

      <div className="site-footer__bottom section-inner">
        <p>© {new Date().getFullYear()} Amber M</p>
        <span className="site-footer__mark" aria-hidden="true">
          AM
        </span>
      </div>
    </footer>
  )
}
