import AnimatedSection from './AnimatedSection'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Bootstrap 5',
      'Responsive Design',
      'Framer Motion',
      'Axios',
      'Vite',
      'Figma to Code',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'MySQL',
      'RESTful APIs',
      'Authentication',
      'CRUD Operations',
      'Database Design',
      'Postman',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Composer', 'Figma'],
  },
  {
    title: 'Computer Science',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-xl">
        <div className="row g-5 align-items-start">
          <div className="col-lg-7">
            <AnimatedSection direction="right">
              <div className="section-label">
                <span className="material-symbols-outlined">bolt</span>
                <span className="label-tag text-primary-gold">Arsenal</span>
              </div>
              <h2 className="section-title mb-5">Technical Skills</h2>
            </AnimatedSection>

            <div className="row g-4">
              {skillGroups.map((group, gi) => (
                <div className="col-6 col-md-3" key={group.title}>
                  <AnimatedSection delay={gi * 0.08}>
                    <p className="skill-group-title">{group.title}</p>
                    {group.skills.map((s) => (
                      <div className="skill-item" key={s}>
                        {s}
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <AnimatedSection direction="left" duration={0.9}>
              <div style={{ position: 'relative' }}>
                <div className="dot-grid position-absolute" style={{ inset: -24, zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, padding: 2, background: 'rgba(78,69,58,.3)', clipPath: 'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)' }}>
                  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
                    alt="Developer workspace" style={{ width: '100%', aspectRatio: 1, objectFit: 'cover', filter: 'grayscale(1)', opacity: 0.65, display: 'block', clipPath: 'polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)' }} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}