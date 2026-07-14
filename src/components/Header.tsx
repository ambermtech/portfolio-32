import { useEffect, useState } from 'react'
import { Star } from './Icons'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="logo" aria-label="Amber M home">
          AM
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--lavender btn--sm header-cta">
          Let&apos;s Talk
          <Star className="icon-star" />
        </a>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="nav-mobile is-open">
          <nav aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn--lavender"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
              <Star className="icon-star" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
