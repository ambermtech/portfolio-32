import heroPortrait from '../assets/hero-portrait.png'
import { ArrowIcon, CherryIcon, Star, WavyUnderline } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <div className="hero__text reveal">
          <h1 className="hero__name">
            <span className="hero__name-row">
              Amber M
              <Star className="hero__star" />
            </span>
            <WavyUnderline className="hero__wave" />
          </h1>

          <p className="hero__role">Senior Software Developer</p>

          <p className="hero__bio">
            I build fast, accessible, and delightful web experiences with clean
            code and thoughtful design. 10+ years shipping products users love.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--dark">
              View My Work
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn--outline">
              Let&apos;s Talk
              <CherryIcon className="icon-cherry" />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal reveal--delay">
          <div className="hero__blob" aria-hidden="true" />
          <img
            src={heroPortrait}
            alt="Amber M seated at a table with surreal props against an orange backdrop"
            className="hero__portrait"
            width={720}
            height={720}
          />
        </div>
      </div>
    </section>
  )
}
