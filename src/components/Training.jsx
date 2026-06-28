import AnimatedSection from './AnimatedSection'

const trainings = [
  {
    icon: 'database',
    title: 'NTI Backend',
    desc: 'Intensive professional training in enterprise-level backend development and security.',
    badge: null,
  },
  {
    icon: 'code_blocks',
    title: 'Bravo Frontend',
    desc: 'Focusing on advanced JavaScript patterns and high-performance UI engineering.',
    badge: null,
  },
  {
    icon: 'workspace_premium',
    title: 'Deep Dive Frontend',
    desc: 'Excellence award in advanced React and UI/UX implementation strategies.',
    badge: '1st Place',
  },
]

export default function Training() {
  return (
    <section className="section-pad bg-surface-lo">
      <div className="container-xl">
        <div className="text-center mb-5">
          <AnimatedSection>
            <h2 className="section-title">Training & Courses</h2>
            <div
              style={{
                width: 48,
                height: 2,
                background: 'var(--primary)',
                margin: '16px auto 0',
              }}
            />
          </AnimatedSection>
        </div>
        <div className="row g-4">
          {trainings.map((t, i) => (
            <div className="col-md-4" key={t.title}>
              <AnimatedSection delay={i * 0.1}>
                <div className="training-card">
                  {t.badge && <span className="training-badge">{t.badge}</span>}
                  <span className="material-symbols-outlined">{t.icon}</span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      color: 'var(--on-surface)',
                      marginBottom: 10,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ color: 'var(--on-muted)', fontSize: 14 }}>
                    {t.desc}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
