import './GoldMetrics.css'

function GoldMetrics() {
  const metrics = [
    { id: '#2', name: 'THE OPTIMIZER', value: '$8.888979', change: '-57.6%' },
    { id: '#3', name: 'QUIT', desc: 'The Last Job', value: '$8.880150', change: '-24.0%' },
    { id: '#6', name: 'forever', desc: 'Forever Gold', value: '$8.8', change: '' }
  ]

  return (
    <section className="gold-metrics section">
      <div className="container">
        <div className="terminal-box">
          <div className="section-title">
            ⚡ {'>'} OPTIMIZATION_METRICS.NOW
          </div>
          <div className="metrics-scroll">
            {metrics.map((metric) => (
              <div key={metric.id} className="metric-item">
                <span className="metric-id">{metric.id}</span>
                <span className="metric-name">{metric.name}</span>
                {metric.desc && <span className="metric-desc">{metric.desc}</span>}
                <span className="metric-value">{metric.value}</span>
                {metric.change && <span className="metric-change">{metric.change}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoldMetrics
