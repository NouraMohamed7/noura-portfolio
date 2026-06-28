import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    featured: true,
    label: 'Featured Case Study',
    title: 'CleanCity',
    desc: 'A sophisticated urban management platform designed to streamline municipal services and community engagement through an intuitive dashboard.',
    tech: ['Laravel', 'React', 'MySQL'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg1ZJHY0biiYO1vhBl-DEVMzAtW9jAGdSJXQ_8GgjBpR0Y8e_rP6xvzBGjhD-Id5aMa4qjj60MLalj200AVH20u2rB6_kakQRM0sTWDmPzrEs9hi9u873Q6bEo23dT134RmB0tmr3a_8u7iQyYoQcDwxQJlBiu0KIJEScE-mM7g_UxAlzWr6eD4byKqUlbh5Glwng45rEG-Z7h4u5sK3bcprwfICuUlBiD-fezmc0nJeDVcE5vp7dT17DT1HFIxhz5Dera6YQGnVY',
    live: '#',
    github: 'https://github.com/NouraMohamed7/clean-city-backend',
  },
  {
    title: 'MedConnect',
    desc: 'Bridging the gap between patients and providers with a secure, real-time consultation ecosystem.',
    tech: ['PHP', 'REST API'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9XdV9myF-wwWfDGUIQ4ccB1I1hLDFy16bfeW2uvdVXHZj2FsctdSz82Ws2jq-PU4l5Qvkm_V6N9_49WNy8VTxjF_wTwfPRFy_UTFPro-KZvR8PzupDlJJB2L7hDeTmPFnyqg6i3d_qze1vyJIKvAbvLntj5XxVHHPbuvZi1MlUIISEhm5cfSEpnUxLsDtwfFrsm0ACxXehAWhpOBU0xwMITYKZNHizcOklvlzB9W5SNHCoOgobOBqG3LEDXkZzBPwBeQTgtMeNMA',
    live: '#',
    github: 'https://github.com/NouraMohamed7/Grad-Project',
  },
 {
  title: 'Blue Berry',
  desc: 'A full-featured E-commerce platform with smart search, real-time cart validation, wishlist, product comparison, and dark/light mode — built with real API integration and Context API state management.',
  tech: ['React', 'Bootstrap', 'Framer Motion'],
  img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900',
  live: 'https://nouramohamed7.github.io/blue-berry-ecommerce/',
  github: 'https://github.com/NouraMohamed7/blue-berry-ecommerce',
},
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-xl">
        <AnimatedSection>
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary-gold" style={{ fontSize: 14 }}>square</span>
                <span className="label-tag text-primary-gold">Portfolio</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,60px)', color: 'var(--on-surface)' }}>
                Selected Projects
              </h2>
            </div>
            <span className="material-symbols-outlined text-primary-gold" style={{ fontSize: 40 }}>arrow_outward</span>
          </div>
        </AnimatedSection>

        {/* Featured */}
        <AnimatedSection>
          <div className="project-card project-card-featured mb-4">
            <div className="row g-0">
              <div className="col-lg-5 d-flex flex-column justify-content-center p-5">
                <span className="label-tag text-primary-gold mb-3">{projects[0].label}</span>
                <h3 className="font-display mb-3" style={{ fontSize: 36, color: 'var(--on-surface)' }}>{projects[0].title}</h3>
                <p className="text-muted-gold mb-4" style={{ fontSize: 15 }}>{projects[0].desc}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {projects[0].tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div className="d-flex gap-3">
                  <a href={projects[0].live} target="_blank" rel="noopener noreferrer" className="btn-hire text-decoration-none">View Live</a>
                  <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: 'var(--on-muted)', fontSize: 14 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>code</span> Source Code
                  </a>
                </div>
              </div>
              <div className="col-lg-7 project-img-wrap" style={{ minHeight: 340, overflow: 'hidden', position: 'relative' }}>
                <img className="project-img" src={projects[0].img} alt="CleanCity dashboard" style={{ height: '100%', minHeight: 340 }} />
                <div className="project-overlay">
                  <a href={projects[0].live} target="_blank" rel="noopener noreferrer" className="btn-hire text-decoration-none">View Live</a>
                  <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="btn-hire text-decoration-none" style={{ marginLeft: 12 }}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="row g-4">
          {projects.slice(1).map((p, i) => (
            <div className="col-md-6" key={p.title}>
              <AnimatedSection delay={i * 0.12}>
                <div className="project-card d-flex flex-column">
                  <div className="project-img-wrap" style={{ overflow: 'hidden', clipPath: 'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)', marginBottom: 24, flexShrink: 0, position: 'relative' }}>
                    <img className="project-img" src={p.img} alt={p.title} style={{ width: '100%', aspectRatio: '16/10' }} />
                    <div className="project-overlay">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-hire text-decoration-none">View Live</a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-hire text-decoration-none" style={{ marginLeft: 12 }}>GitHub</a>
                    </div>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="font-display mb-3" style={{ fontSize: 24, color: 'var(--on-surface)' }}>{p.title}</h3>
                    <p className="text-muted-gold mb-4" style={{ fontSize: 14 }}>{p.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="d-flex gap-2">
                        {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                      <span className="material-symbols-outlined project-arrow">east</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}