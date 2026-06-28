import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    num: '01',
    date: '2024',
    title: 'Backend Trainee @ NTI',
    desc: 'Specializing in server-side logic, database management, and building secure, scalable back-end architectures using PHP and Laravel.',
  },
  {
    num: '02',
    date: '2024',
    title: 'Frontend Intern @ Bravo',
    desc: 'Translating complex designs into pixel-perfect, responsive interfaces using React and modern CSS frameworks.',
  },
  {
    num: '03',
    date: '2024',
    title: 'API Testing Intern @ Zagazig',
    desc: 'Ensuring data integrity and performance through rigorous endpoint testing and documentation for university systems.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface-lo">
      <div className="container-xl">
        <div className="row g-5">
          <div className="col-lg-7">
            <AnimatedSection>
              <div className="section-label">
                <span className="material-symbols-outlined">work_history</span>
                <span className="label-tag text-primary-gold">Experience</span>
              </div>
              <h2 className="section-title mb-5">Career Timeline</h2>
            </AnimatedSection>

            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.num} delay={i * 0.1}>
                <div className="exp-item">
                  <span className="label-tag text-faint d-block mb-2">
                    {exp.num} / {exp.date}
                  </span>
                  <h3 className="exp-title mb-2">{exp.title}</h3>
                  <p style={{ color: 'var(--on-muted)', fontSize: 15 }}>
                    {exp.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="col-lg-5 d-flex align-items-center">
            <AnimatedSection direction="left" duration={0.8} delay={0.15}>
              <div className="position-relative w-100">
                <div
                  style={{
                    padding: 3,
                    background: 'var(--primary-dim)',
                    clipPath:
                      'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                     alt="Collaborative coding"
                    style={{
                      width: '100%',
                      aspectRatio: 1,
                      objectFit: 'cover',
                      filter: 'grayscale(1)',
                      transition: 'filter .7s',
                      clipPath:
                        'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(1)')}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: -16,
                    left: -12,
                    background: 'var(--bg)',
                    padding: '14px 20px',
                    border: '1px solid rgba(78,69,58,.3)',
                    clipPath:
                      'polygon(6% 0, 94% 0, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0 94%, 0 6%)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--primary)',
                      fontSize: 15,
                      fontStyle: 'italic',
                    }}
                  >
                    Crafted with Purpose
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
