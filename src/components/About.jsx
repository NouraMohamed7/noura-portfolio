import AnimatedSection from './AnimatedSection'

export default function About() {
  const stats = [
    { value: '3+', label: 'Internships' },
    { value: '5+', label: 'Projects' },
    { value: '1st', label: 'Place Award' },
  ]

  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimatedSection direction="right" duration={0.8}>
              <div className="section-label">
                <span className="material-symbols-outlined">auto_awesome</span>
                <span className="label-tag text-primary-gold">About</span>
              </div>
              <h2 className="section-title mb-4">About Me</h2>
              <p
                className="text-muted-gold mb-4"
                style={{ fontSize: 17, lineHeight: 1.8 }}
              >
                I'm a dedicated Freelance Web Developer with a passion for building robust digital experiences. I specialize in full-stack development with a focus on{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  React, PHP, and Laravel
                </strong>
                .
              </p>
              <p
                className="mb-5"
                style={{
                  color: 'var(--on-faint)',
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                My approach combines technical precision with editorial aesthetics — ensuring every project is not just functional, but a piece of digital craftsmanship that leaves an impression.
              </p>
            </AnimatedSection>

            <div className="row g-3">
              {stats.map((stat, i) => (
                <div className="col-4" key={stat.label}>
                  <AnimatedSection delay={i * 0.15}>
                    <div
                      style={{
                        borderLeft: '2px solid var(--primary)',
                        paddingLeft: 16,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 32,
                          fontWeight: 700,
                          color: 'var(--primary)',
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '.1em',
                          color: 'var(--on-faint)',
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <AnimatedSection direction="left" duration={0.8} delay={0.1}>
              <div className="about-img-wrap">
                <div className="about-img-border">
                  <img
                    className="about-img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9BeaFyXTl2WVMN6yVgTSHrJdohg289Tn7VZJXuKlfXLyV1H5nkp7ahGIqcIrhEPcXv84RYGIqB7l6iilBQxXZc5xd3fpor8548w17cZXDEXkgVg1lqrGjqu32Pe0HmVR6tCPSQcftqG3o3mt1vKCwQdFPh-r8YCUGqjl5dTqyJjJX_-UwYWO_9Eb3hqDK-usDgXN_oQXIYiNZMcN2qpUMWI-kI2W3rrjbMh9-mZTed1QPgpeT-Y_2Maqk-tkWvyTd5wKqHbIDdik"
                    alt="Developer workspace"
                  />
                </div>
                <span
                  className="material-symbols-outlined about-star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
