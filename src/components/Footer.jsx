export default function Footer() {
  const techStack = ['React', 'Vite', 'Bootstrap', 'Framer Motion'];

  return (
    <footer className="footer-custom">
      <div className="container-xl">
        <div className="text-center mb-4">
          <p
            style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '.15em',
              color: 'var(--on-faint)',
              marginBottom: 12,
            }}
          >
            Built with
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tech-badge"
                style={{ fontSize: 10 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          <div className="footer-logo">NOURA.</div>

          <div className="d-flex gap-4">
            <a
              href="https://github.com/NouraMohamed7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/noura-mohamed-22o/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>

            <a
              href="/Noura_Mohamed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Resume
            </a>
          </div>

          <p
            style={{
              fontSize: 12,
              letterSpacing: '.08em',
              color: 'var(--on-faint)',
            }}
          >
            © 2026 Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}