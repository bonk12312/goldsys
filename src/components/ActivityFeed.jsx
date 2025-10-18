import { useState, useEffect } from 'react'
import './ActivityFeed.css'

function ActivityFeed() {
  const [activities, setActivities] = useState([
    {
      type: 'new',
      title: 'Ape into The Sheep (SHEEP) before it moons!',
      action: 'ACTION: 0.8e3inEnQ@e4i2exeb Sheep ✧ 8% approval',
      status: '[ACTIVE] - Just now',
      statusType: 'active'
    },
    {
      type: 'completed',
      title: 'Optimize liquidity pools for max efficiency',
      action: 'ACTION: Rebalance • 92% approval',
      status: '[COMPLETED] - 15m ago',
      statusType: 'completed'
    },
    {
      type: 'pending',
      title: 'Stake GOLD tokens for maximum yield',
      action: 'ACTION: Stake 1000 GOLD • 87% approval',
      status: '[PENDING] - 23m ago',
      statusType: 'pending'
    }
  ])

  const [pendingCount, setPendingCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setPendingCount(prev => Math.floor(Math.random() * 5) + 2)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="activity-feed section">
      <div className="container">
        <div className="terminal-box pending-box">
          <div className="section-title">
            {'>'} ACTIVE_PROPOSALS
            <span className="pending-badge">{pendingCount} PENDING</span>
          </div>
        </div>

        <div className="terminal-box completed-box">
          <div className="section-title">
            ✕ {'>'} COMPLETED_OPERATIONS
            <span className="completed-count">127 TOTAL</span>
          </div>
        </div>

        <div className="activity-grid">
          <div className="terminal-box feed-box">
            <div className="section-title">
              {'>'} GOLD_FEED.LOG
            </div>
            <div className="feed-content">
              <div className="feed-info">
                GoldAgent drops new cycles every 20 min •<br/>
                Process to tell the algorithm what's next
              </div>
              <div className="feed-status">
                No cycles yet fam<br/>
                <span className="feed-note">GoldAgent cooking up the first cycle rn</span>
              </div>
            </div>
          </div>

          <div className="terminal-box activity-box">
            <div className="section-title">
              <span className="status-indicator">
                <span className="status-dot"></span>
                [LIVE]
              </span>
              GOLD_ACTIVITY
            </div>
            <div className="activity-list">
              {activities.map((activity, index) => (
                <div key={index} className={`activity-item activity-${activity.statusType}`}>
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-action">{activity.action}</div>
                  <div className={`activity-status status-${activity.statusType}`}>
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="terminal-box operations-box">
            <div className="section-title">
              {'>'} OPERATION_LOG.LOG
            </div>
            <div className="operations-content">
              <div className="operation-header">Active Operations</div>
              <div className="operation-item">
                <span className="operation-icon">⚡</span>
                <span className="operation-id">📌 0x5G 9Go ...hM6G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityFeed
