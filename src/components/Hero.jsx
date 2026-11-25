import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import mee from '../assets/noura.jpg'
import Icon from './Icon'

const roles = ['React.js', 'Laravel', 'PHP', 'REST APIs']
const ease = [0.16, 1, 0.3, 1]

function Typing() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [text, setText] = useState(reduce ? roles[0] : '')
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (reduce) return
    const word = roles[i]
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1))
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400)
        } else {
          setText(word.slice(0, text.length - 1))
          if (text.length - 1 === 0) { setDel(false); setI((i + 1) % roles.length) }
        }
      },
      del ? 45 : 90
    )
    return () => clearTimeout(t)
  }, [text, del, i, reduce])

  return (
    <span className="typing">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: d, ease },
  })
  return (
    <section id="top" className="hero">
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...item(0.05)}>
            <span className="dot" /> Full Stack Developer
          </motion.p>
          <motion.h1 {...item(0.15)}>
            Hi, I'm <span className="grad">Noura Mohamed</span>
          </motion.h1>
          <motion.p className="hero-line" {...item(0.28)}>
            I build web apps with <Typing />
          </motion.p>
          <motion.p className="hero-sub" {...item(0.4)}>
            Information Systems graduate from Zagazig University, based in Zagazig, Egypt. I work on both the frontend and the backend.
          </motion.p>
          <motion.div className="hero-actions" {...item(0.52)}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View projects <Icon name="arrow" />
            </a>
            <a href="/Noura_Mohamed_Resume.pdf" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <Icon name="download" /> Download CV
            </a>
          </motion.div>
          <motion.div className="socials" {...item(0.64)}>
            <a href="https://github.com/NouraMohamed7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href="https://www.linkedin.com/in/noura-mohamed-22o/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href="mailto:noramohamedibrahim19@gmail.com" aria-label="Email"><Icon name="mail" size={20} /></a>
          </motion.div>
        </div>
        <motion.div
          className="hero-photo"
          initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <motion.div className="photo-ring" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} aria-hidden="true" />
          <motion.div className="photo-frame" animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <img src={mee} alt="Noura Mohamed" width="920" height="1256" />
          </motion.div>
          <motion.div className="chip chip-a" animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>React.js</motion.div>
          <motion.div className="chip chip-b" animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>Laravel</motion.div>
        </motion.div>
      </div>
    </section>
  )
}
