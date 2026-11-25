import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const EMAIL = 'noramohamedibrahim19@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL) } catch (e) {}
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-box">
          <p className="kicker">Contact</p>
          <h2>Let's work together</h2>
          <p className="lead">Interested in working together or have a question? Email is the quickest way to reach me.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}><Icon name="mail" /> {EMAIL}</a>
            <button className="btn btn-ghost" onClick={copy} aria-live="polite">
              <Icon name={copied ? 'check' : 'copy'} /> {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/noura-mohamed-22o/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a href="https://github.com/NouraMohamed7" target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a>
            <a href="/Noura_Mohamed_Resume.pdf" target="_blank" rel="noopener noreferrer"><Icon name="download" /> CV</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
