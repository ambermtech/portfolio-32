import orbitImg from '../assets/project-orbit.png'
import museImg from '../assets/project-muse.png'
import sproutImg from '../assets/project-sprout.png'
import { ArrowIcon } from './Icons'

const projects = [
  {
    name: 'Orbit',
    description:
      'Analytics Dashboard. Real-time metrics with beautiful, accessible data visualizations.',
    image: orbitImg,
    tone: 'lavender' as const,
  },
  {
    name: 'Muse',
    description:
      'Creative Portfolio Platform. A no-fuss portfolio builder for creatives. Fast, minimal, and lovely to use.',
    image: museImg,
    tone: 'terracotta' as const,
  },
  {
    name: 'Sprout',
    description:
      'Wellness Companion App. Habit tracking, mindful reminders, and gentle encouragement.',
    image: sproutImg,
    tone: 'sage' as const,
  },
]

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="section-inner">
        <div className="work__header reveal">
          <div>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-lede">
              A few recent projects I&apos;m proud of.
            </p>
          </div>
          <a href="#work" className="text-link">
            View All Work
            <ArrowIcon />
          </a>
        </div>

        <div className="work__grid">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`project-card project-card--${project.tone} reveal`}
              style={{ animationDelay: `${0.08 * (i + 1)}s` }}
            >
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt=""
                  width={480}
                  height={480}
                />
              </div>
              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href="#work" className="text-link text-link--compact">
                  View Project
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
