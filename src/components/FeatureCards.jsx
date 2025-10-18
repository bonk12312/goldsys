import './FeatureCards.css'

function FeatureCards() {
  const features = [
    {
      icon: '🔒',
      title: 'SECURITY FIRST',
      description: 'Multi-signature wallet protection, automated risk assessment, and real-time threat monitoring keep your assets secure.',
      highlight: '99.9% secure operations'
    },
    {
      icon: '👥',
      title: 'COMMUNITY DRIVEN',
      description: 'Community members vote on proposals, influence optimization strategies, and share in the collective success of the gold system.',
      highlight: '1,247 active participants'
    },
    {
      icon: '📊',
      title: 'DATA TRANSPARENCY',
      description: 'Every operation is logged on-chain. Track performance metrics, audit trails, and optimization results in real-time.',
      highlight: '100% on-chain verification'
    }
  ]

  return (
    <section className="feature-cards section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="terminal-box feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-highlight">{feature.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
