import bustImg from '../assets/experience-bust.png'

const roles = [
  {
    title: 'Senior Front-End Developer',
    company: 'Brightline',
    dates: '2021—Present',
    summary:
      'Building intuitive, high-performance web apps with React and TypeScript. Leading UI architecture and mentoring engineers.',
  },
  {
    title: 'Front-End Developer',
    company: 'MakeHaus',
    dates: '2017—2021',
    summary:
      'Shipped features end-to-end, improved performance by 40%, and elevated design systems at scale.',
  },
  {
    title: 'UI Developer',
    company: 'Pixel & Co',
    dates: '2014—2017',
    summary:
      'Collaborated with designers to build responsive, accessible interfaces that users love.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-inner experience__layout">
        <div className="experience__timeline reveal">
          <ol className="timeline">
            {roles.map((role) => (
              <li key={`${role.company}-${role.dates}`} className="timeline__item">
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__content">
                  <h3>
                    {role.title}{' '}
                    <span className="timeline__company">@ {role.company}</span>
                  </h3>
                  <p className="timeline__dates">{role.dates}</p>
                  <p className="timeline__summary">{role.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="experience__art reveal reveal--delay">
          <img
            src={bustImg}
            alt="A lace-gloved hand placing a cherry on a classical marble bust"
            width={640}
            height={640}
          />
        </figure>
      </div>
    </section>
  )
}
