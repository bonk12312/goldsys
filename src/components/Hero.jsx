import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot gold"></span>
                <span className="dot green"></span>
                <span className="dot yellow"></span>
              </div>
            </div>
            <div className="hero-main">
              <h1 className="hero-title">
                <span className="glow-text">GOLD SYSTEM</span>
              </h1>
              <p className="hero-subtitle">AUTONOMOUS REWARDS OPTIMIZATION</p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="status-dot"></span>
                  <span>ONLINE</span>
                </div>
                <div className="hero-stat">
                  <span>99.8% UPTIME</span>
                </div>
                <div className="hero-stat">
                  <span>1267 OPERATIONS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-description">
            <div className="terminal-box">
              <div className="section-title">
                <span>⚡</span>
                SYSTEM_INITIALIZED • PROCESSING REWARDS
              </div>
              <div className="hero-text">
                <p className="hero-code">
                  <span className="code-comment">// Revolutionary gold collection system</span><br/>
                  <span className="code-keyword">const</span> goldSystem = <span className="code-function">initialize</span>()<br/>
                  goldSystem.<span className="code-method">startAutonomousRewards</span>()<br/>
                </p>
                <p className="hero-intro">
                  The Gold System is an advanced autonomous platform that rewards users for completing
                  valuable tasks. Our sophisticated algorithms match tasks with qualified participants,
                  ensuring optimal efficiency and fair distribution of gold rewards across the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
