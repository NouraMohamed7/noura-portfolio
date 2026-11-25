import Reveal from './Reveal'
import CountUp from './CountUp'

const stats = [
  { to: 3, suffix: '+', label: 'Internships and trainings' },
  { to: 5, suffix: '+', label: 'Projects built' },
  { to: 1, suffix: 'st', label: 'Place, Deep Dive Frontend' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal>
          <p className="kicker">About</p>
          <h2>A developer who likes working across the whole stack</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead">
            I build frontends in React.js and backends in PHP and Laravel. I'm graduating in Information Systems from the Faculty of Computer and Information at Zagazig University, class of 2026.
          </p>
          <p>
            I trained on the backend at NTI and on the frontend at Bravo. My projects include a waste reporting platform, a seller dashboard for a medical marketplace, and an e-commerce app. I also built an HR system for a real business.
          </p>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
