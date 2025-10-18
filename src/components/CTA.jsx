import './CTA.css'

function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="terminal-box cta-box">
          <div className="cta-content">
            <div className="section-title cta-label">
              {'>'} READY TO OPTIMIZE?
            </div>
            <h2 className="cta-title">JOIN THE GOLD SYSTEM</h2>
            <p className="cta-description">
              Participate in gold collection and share in the rewards.<br/>
              Autonomous algorithms working for collective success.
            </p>
            <div className="cta-actions">
              <button className="btn btn-primary">VIEW WALLET ↗</button>
              <button className="btn btn-secondary">READ DOCS {'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
