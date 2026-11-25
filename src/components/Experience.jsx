import { motion } from 'framer-motion'
import Reveal from './Reveal'

const items = [
  {
    date: '2024',
    title: 'Backend Trainee',
    org: 'NTI',
    desc: 'Trained in PHP, Laravel and MySQL. Built the CleanCity backend as my graduation project, with REST APIs, Sanctum auth and role-based access.',
  },
  {
    date: '2024',
    title: 'Frontend Intern',
    org: 'Bravo',
    desc: 'Built responsive React interfaces from design files.',
  },
  {
    date: '2024',
    title: 'API Testing Intern',
    org: 'Zagazig University',
    desc: 'Tested API endpoints and wrote documentation for university systems.',
  },
  {
    date: 'Class of 2026',
    title: 'B.Sc. Information Systems',
    org: 'Zagazig University, Faculty of Computer and Information',
    desc: 'Graduation project: Exclusive supplier dashboard, where I led the frontend.',
  },
]

const awards = [
  { title: 'Deep Dive Frontend', badge: '1st place', desc: 'Awarded first place for advanced React and UI work.' },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="kicker">Experience</p>
          <h2>Training, internships and education</h2>
        </Reveal>
        <div className="timeline">
          <motion.span className="timeline-line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.4, ease: 'easeOut' }} aria-hidden="true" />
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="tl-item">
              <span className="tl-dot" aria-hidden="true" />
              <span className="tl-date">{it.date}</span>
              <h3>{it.title}</h3>
              <p className="tl-org">{it.org}</p>
              <p>{it.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="award">
            <span className="badge">{awards[0].badge}</span>
            <div>
              <h3>{awards[0].title}</h3>
              <p>{awards[0].desc}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
