import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'

const contacts = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'noramohamedibrahim19@gmail.com',
    href: 'mailto:noramohamedibrahim19@gmail.com',
    copyable: true,
  },
  {
    icon: 'call',
    label: 'Phone',
    value: '+20 106 494 3625',
    href: 'tel:+201064943625',
  },
  {
    icon: 'link',
    label: 'GitHub',
    value: 'NouraMohamed7',
    href: 'https://github.com/NouraMohamed7',
  },
]

export default function Contact() {
  const [toast, setToast] = useState(false)

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email)
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <section id="contact" className="section-pad bg-surface-lo">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            style={{
              position: 'fixed',
              top: 24,
              left: '50%',
              zIndex: 9999,
              background: 'var(--primary)',
              color: '#432c03',
              padding: '10px 24px',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '.05em',
            }}
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-xl">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <AnimatedSection direction="right" duration={0.8}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,60px)', color: 'var(--primary)', lineHeight: 1.1, marginBottom: 48 }}>
                Let's Work<br />Together
              </h2>
            </AnimatedSection>

            <div className="d-flex flex-column gap-4">
              {contacts.map((c, i) => (
                <AnimatedSection key={c.label} delay={i * 0.1}>
                  <div className="d-flex align-items-center gap-4">
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener' : undefined} className="contact-link">
                      <div className="contact-icon">
                        <span className="material-symbols-outlined">{c.icon}</span>
                      </div>
                      <div>
                        <p className="contact-label">{c.label}</p>
                        <p className="contact-value">{c.value}</p>
                      </div>
                    </a>
                    {c.copyable && (
                      <button
                        onClick={() => copyEmail(c.value)}
                        className="btn-hire"
                        style={{ padding: '4px 12px', fontSize: 11 }}
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <AnimatedSection direction="left" duration={0.9} delay={0.1}>
              <div className="position-relative">
                <div className="dot-grid position-absolute" style={{ inset: -32, zIndex: 0, pointerEvents: 'none' }} />
                <div className="phone-mockup" style={{ position: 'relative', zIndex: 1 }}>
                  <div className="phone-notch"><div className="phone-notch-pill" /></div>
                  <div className="phone-inner">
                    <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: 18, marginBottom: 22 }}>Send a Message</h4>
                    <div className="phone-field"><p className="phone-field-label">Your Name</p></div>
                    <div className="phone-field"><p className="phone-field-label">Your Email</p></div>
                    <div className="phone-field" style={{ paddingBottom: 22 }}><p className="phone-field-label">Message</p></div>
                    <button className="phone-send">Send Message</button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
