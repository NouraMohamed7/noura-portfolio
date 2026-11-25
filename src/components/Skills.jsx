import { motion } from 'framer-motion'
import Reveal from './Reveal'

const groups = [
  { title: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Framer Motion', 'Axios', 'Vite', 'Responsive design'] },
  { title: 'Backend', items: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Authentication', 'Database design', 'Next.js', 'Supabase'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code', 'npm', 'Composer'] },
  { title: 'Computer science', items: ['Data structures', 'Algorithms', 'OOP', 'Problem solving'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="kicker">Skills</p>
          <h2>What I work with</h2>
        </Reveal>
        <div className="skill-grid">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08} className="skill-card">
              <h3>{g.title}</h3>
              <ul className="tags tags-lg">
                {g.items.map((s, i) => (
                  <motion.li key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.04 }} whileHover={{ y: -2 }}>
                    {s}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
