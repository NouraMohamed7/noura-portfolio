import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'

const projects = [
  {
    title: 'CleanCity',
    tag: 'NTI graduation project',
    desc: 'Waste reporting platform with complaint tracking and geolocation-based assignment. Laravel backend with REST APIs, Sanctum auth and role-based access, plus a React frontend.',
    tech: ['Laravel', 'React.js', 'MySQL', 'Sanctum'],
    links: [
      { label: 'Frontend', href: 'https://github.com/NouraMohamed7/clean-city-frontend' },
      { label: 'Backend', href: 'https://github.com/NouraMohamed7/clean-city-backend' },
    ],
    art: 'a',
  },
  {
    title: 'MedConnect',
    tag: 'Seller dashboard',
    desc: 'React.js portal for sellers with authentication, product and order management, and sales analytics.',
    tech: ['React.js', 'REST API', 'Analytics'],
    links: [{ label: 'Code', href: 'https://github.com/NouraMohamed7/Grad-Project' }],
    art: 'b',
  },
  {
    title: 'Exclusive',
    tag: 'Faculty graduation project',
    desc: 'Supplier dashboard for Exclusive. I led the frontend, built with React.js and Vite.',
    tech: ['React.js', 'Vite'],
    links: [{ label: 'Code', href: 'https://github.com/NouraMohamed7/Exclusive-my-pro' }],
    art: 'c',
  },
  {
    title: 'Blue Berry',
    tag: 'Frontend diploma final project',
    desc: 'E-commerce app with search, cart validation, wishlist, product comparison and a dark and light mode. State handled with Context API.',
    tech: ['React.js', 'Bootstrap', 'Framer Motion'],
    links: [
      { label: 'Live demo', href: 'https://nouramohamed7.github.io/blue-berry-ecommerce/', primary: true },
      { label: 'Code', href: 'https://github.com/NouraMohamed7/blue-berry-ecommerce' },
    ],
    img: '/projects/blueberry.png',
  },
  {
    title: 'Office System',
    tag: 'Built for a real business',
    desc: 'HR and workforce system covering attendance, roles and reports. Built with Next.js, TypeScript and Supabase.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    private: true,
    art: 'd',
  },
]

function Card({ p, i }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (reduce) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <Reveal delay={(i % 2) * 0.1} className={i === 0 ? 'card-wrap card-wide' : 'card-wrap'}>
      <motion.article
        ref={ref}
        className="card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        whileHover={reduce ? undefined : { y: -6 }}
      >
        <div className={`card-media ${p.img ? '' : 'art art-' + p.art}`}>
          {p.img ? (
            <img src={p.img} alt={`${p.title} homepage`} loading="lazy" />
          ) : (
            <span className="art-title">{p.title}</span>
          )}
        </div>
        <div className="card-body">
          <p className="card-tag">{p.tag}</p>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <ul className="tags">
            {p.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="card-links">
            {p.private && <span className="private"><Icon name="lock" size={15} /> Private repository</span>}
            {p.links?.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={l.primary ? 'link-primary' : ''}>
                {l.label === 'Live demo' ? <Icon name="external" size={15} /> : <Icon name="github" size={15} />} {l.label}
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">Projects</p>
          <h2>Selected work</h2>
        </Reveal>
        <div className="cards">
          {projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}
        </div>
        <Reveal>
          <p className="more">
            More on <a href="https://github.com/NouraMohamed7" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
