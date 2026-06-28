import AnimatedSection from './AnimatedSection'

export default function Education() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <AnimatedSection direction="left" duration={0.8}>
              <div className="section-label">
                <span className="material-symbols-outlined">school</span>
                <span className="label-tag text-primary-gold">Education</span>
              </div>
              <h2 className="section-title mb-5">Academic Background</h2>

              <div>
                <h3
                  className="font-display mb-1"
                  style={{ fontSize: 22, color: 'var(--on-surface)' }}
                >
                  Zagazig University
                </h3>
                <p className="label-tag text-primary-gold mt-1">
                  Faculty of Computer & Information
                </p>
                <p className="text-muted-gold mt-2">Information Systems Major</p>
                <p
                  className="text-faint mt-1"
                  style={{ fontSize: 13, fontStyle: 'italic' }}
                >
                  Graduating 2026
                </p>
              </div>

              <hr
                style={{
                  borderColor: 'rgba(78,69,58,.3)',
                  margin: '28px 0',
                  width: 80,
                }}
              />

              <blockquote
                style={{
                  borderLeft: '3px solid var(--primary-dim)',
                  paddingLeft: 20,
                  margin: 0,
                  fontStyle: 'italic',
                  color: 'var(--on-muted)',
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                "Focusing on the intersection of systematic data structures and user-centric web architecture."
              </blockquote>
            </AnimatedSection>
          </div>

          <div className="col-lg-6 order-lg-1">
            <AnimatedSection direction="right" duration={0.8} delay={0.1}>
              <div
                style={{
                  padding: 3,
                  background: 'var(--outline)',
                  clipPath:
                    'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)',
                }}
              >
                <img
                  className="edu-img notched-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB1AJlrIPdRaBrRVSy50AVg8IMTG4rGo85vWIuwYqhKIY4eIOROWoj59Xl37fXqj7GnCHVLgE6IHc-tYTenvlXjbh6mrsL-LwUjdwKKq830mYX2HGJtmAcL3cJ7aFg8rEn0YvzA0xdyVRYngCW7hog8eeI9MXMEorXEiV7kdEjQIwOt6-2_cr0S_Y3xov7_Bc58gpmqZ1w6wF4X_5Gu949prUhYCgHXtqI4fq7CTbLIlNKpAtwLFGAUx2uwdjwS97kAkwMIMQrzks"
                  alt="Zagazig University"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
