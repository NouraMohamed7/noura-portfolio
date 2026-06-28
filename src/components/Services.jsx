import AnimatedSection from './AnimatedSection'

const services = [
  { icon: 'devices', title: 'Responsive Dev', desc: 'Building fluid, multi-device experiences that adapt seamlessly to any screen.' },
  { icon: 'dashboard_customize', title: 'Admin Dashboards', desc: 'Powerful, data-driven back-office tools designed for efficiency and insight.' },
  { icon: 'shopping_bag', title: 'E-Commerce', desc: 'Custom storefronts built with Laravel for security and React for speed.' },
  { icon: 'api', title: 'REST API', desc: 'Clean, documented, and secure API architectures for modern application stacks.' },
  { icon: 'build', title: 'Maintenance', desc: 'Ongoing support, security updates, and performance optimization.' },
  { icon: 'potted_plant', title: 'Figma-to-Code', desc: 'Precision translation of complex design systems into living, functional code.' },
]

export default function Services() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-xl">
        <div className="text-center mb-5">
          <AnimatedSection>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                marginBottom: 12,
              }}
            >
              <div
                style={{ height: 1, width: 40, background: 'var(--primary)' }}
              />
              <h2 className="section-title mb-0">Core Services</h2>
              <div
                style={{ height: 1, width: 40, background: 'var(--primary)' }}
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="row g-0">
          {services.map((s, i) => (
            <div className="col-md-4 col-sm-6" key={s.title}>
              <AnimatedSection delay={i * 0.06}>
                <div className="service-card">
                  <span className="material-symbols-outlined">{s.icon}</span>
                  <h3 className="service-title">{s.title}</h3>
                  <p style={{ color: 'var(--on-muted)', fontSize: 14 }}>
                    {s.desc}
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
