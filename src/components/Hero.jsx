import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import mee from '../assets/mee.png'

const titles = ['React Developer', 'Laravel Developer', 'Full Stack Developer']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1))
        if (displayText.length === 1) {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }, 50)
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1))
        if (displayText.length === currentTitle.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, titleIndex])

  return (
    <header className="hero-section">
      <div className="position-absolute top-0 end-0 w-50 h-100 dot-grid" style={{ zIndex: 0, pointerEvents: 'none' }} />
      <div className="warm-glow position-absolute inset-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: 'none' }} />

      <div className="container-xl position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <motion.div className="col-md-5 order-md-1 order-2"
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="portrait-wrap">
              <div className="portrait-glow" />
              <div className="portrait-border">
                <img className="portrait-img"
                  src={mee}
                   alt="Noura Mohamed - Web Developer" />
              </div>
            </div>
          </motion.div>

          <motion.div className="col-md-7 order-md-2 order-1"
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className="hero-eyebrow mb-3">
              <span className="material-symbols-outlined align-middle me-1" style={{ fontSize: 16 }}>spark</span>
              Creative Web Developer
            </div>

            <motion.h1 className="hero-name mb-4"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              Noura Mohamed
            </motion.h1>

            <motion.div className="mb-4"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
              <h2 className="hero-subtitle" style={{ marginBottom: 8 }}>
                <span style={{ color: 'var(--primary)' }}>{displayText}</span>
                <span className="typing-cursor">|</span>
              </h2>
              <p style={{ color: 'var(--on-muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 500 }}>
                I build fast, scalable and modern web applications using React and Laravel.
              </p>
            </motion.div>

            <motion.div className="hero-badge mt-4 mb-5"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ width: 32, height: 1.5, background: 'var(--primary-dim)' }} />
              <span className="label-tag text-primary-gold">By Noura Mohamed — Zagazig, EG</span>
            </motion.div>

            <motion.div className="d-flex gap-3 flex-wrap mt-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}>
              <a href="#projects" className="btn-hire text-decoration-none">View Work</a>
              <a href="#contact" className="text-decoration-none d-flex align-items-center gap-2"
                style={{ color: 'var(--on-muted)', fontSize: 14, fontWeight: 500 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--primary)' }}>mail</span> Get in touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="scroll-cue"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
        <p>scroll</p>
      </motion.div>
    </header>
  )
}
