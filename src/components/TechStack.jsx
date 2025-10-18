import './TechStack.css'

function TechStack() {
  return (
    <section className="tech-stack section">
      <div className="container">
        <div className="terminal-box">
          <div className="section-title">
            {'<>'} {'>'} TECHNOLOGY_STACK
          </div>
          <div className="tech-content">
            <div className="tech-info">
              <h3 className="tech-heading">Built for Performance & Security</h3>
              <p className="tech-description">
                GoldSystem leverages cutting-edge blockchain technology, advanced cryptography,
                and distributed systems architecture to deliver a robust, scalable rewards platform.
                Our infrastructure is designed for maximum uptime, security, and transparency.
              </p>
            </div>

            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-category">BLOCKCHAIN</div>
                <div className="tech-list">
                  <span className="tech-badge">Solana</span>
                  <span className="tech-badge">Smart Contracts</span>
                  <span className="tech-badge">Web3.js</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-category">BACKEND</div>
                <div className="tech-list">
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">PostgreSQL</span>
                  <span className="tech-badge">Redis</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-category">FRONTEND</div>
                <div className="tech-list">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Vite</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-category">SECURITY</div>
                <div className="tech-list">
                  <span className="tech-badge">Multi-Sig</span>
                  <span className="tech-badge">Encryption</span>
                  <span className="tech-badge">Audited</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-category">INFRASTRUCTURE</div>
                <div className="tech-list">
                  <span className="tech-badge">AWS</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">Kubernetes</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-category">MONITORING</div>
                <div className="tech-list">
                  <span className="tech-badge">Grafana</span>
                  <span className="tech-badge">Prometheus</span>
                  <span className="tech-badge">Sentry</span>
                </div>
              </div>
            </div>

            <div className="tech-stats">
              <div className="tech-stat">
                <div className="tech-stat-value">99.9%</div>
                <div className="tech-stat-label">secure operations</div>
              </div>
              <div className="tech-stat">
                <div className="tech-stat-value">1,247</div>
                <div className="tech-stat-label">active participants</div>
              </div>
              <div className="tech-stat">
                <div className="tech-stat-value">100%</div>
                <div className="tech-stat-label">on-chain verification</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">GOLD SYSTEM</span>
              </div>
              <p className="footer-tagline">Autonomous Rewards • Built for the Future</p>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <a href="#" className="footer-link">Documentation</a>
                <a href="#" className="footer-link">GitHub</a>
                <a href="#" className="footer-link">Discord</a>
                <a href="#" className="footer-link">Twitter</a>
              </div>
              <div className="footer-copyright">
                © 2024 GoldSystem. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default TechStack
