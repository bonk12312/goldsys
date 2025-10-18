import { useState } from 'react'
import { useApp } from '../context/AppContext'
import './Dashboard.css'

function Dashboard() {
  const { walletAddress } = useApp()
  const [userStats] = useState({
    totalEarned: 247.83,
    tasksCompleted: 42,
    successRate: 97.6,
    currentStreak: 12,
    rank: 156,
    nextReward: 15.2
  })

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title glow-text">DASHBOARD</h1>
        <p className="dashboard-subtitle">Your Gold System Performance</p>
      </div>

      <div className="dashboard-grid">
        <div className="terminal-box dashboard-card">
          <div className="card-label">TOTAL EARNED</div>
          <div className="card-value gold-text">{userStats.totalEarned} GOLD</div>
          <div className="card-change positive">+12.4% this week</div>
        </div>

        <div className="terminal-box dashboard-card">
          <div className="card-label">TASKS COMPLETED</div>
          <div className="card-value">{userStats.tasksCompleted}</div>
          <div className="card-info">Last completed: 2h ago</div>
        </div>

        <div className="terminal-box dashboard-card">
          <div className="card-label">SUCCESS RATE</div>
          <div className="card-value positive">{userStats.successRate}%</div>
          <div className="card-info">Above average</div>
        </div>

        <div className="terminal-box dashboard-card">
          <div className="card-label">CURRENT STREAK</div>
          <div className="card-value gold-text">{userStats.currentStreak} days</div>
          <div className="card-info">Keep it going!</div>
        </div>

        <div className="terminal-box dashboard-card">
          <div className="card-label">GLOBAL RANK</div>
          <div className="card-value">#{userStats.rank}</div>
          <div className="card-change positive">↑ 23 positions</div>
        </div>

        <div className="terminal-box dashboard-card">
          <div className="card-label">NEXT REWARD</div>
          <div className="card-value gold-text">{userStats.nextReward} GOLD</div>
          <div className="card-info">In 3 tasks</div>
        </div>
      </div>

      <div className="terminal-box recent-activity">
        <div className="section-title">{'>'} RECENT_ACTIVITY</div>
        <div className="activity-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-title">Task #8472 Completed</div>
              <div className="timeline-details">+5.2 GOLD • 2 hours ago</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-title">Reward Claimed</div>
              <div className="timeline-details">+12.5 GOLD • 5 hours ago</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-title">Task #8401 Completed</div>
              <div className="timeline-details">+8.3 GOLD • 8 hours ago</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-title">Streak Milestone Reached</div>
              <div className="timeline-details">+10.0 GOLD Bonus • 1 day ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className="terminal-box wallet-info">
        <div className="section-title">{'>'} WALLET_INFO</div>
        <div className="wallet-details">
          <div className="wallet-row">
            <span className="wallet-label">Address:</span>
            <span className="wallet-value">{walletAddress}</span>
          </div>
          <div className="wallet-row">
            <span className="wallet-label">Network:</span>
            <span className="wallet-value gold-text">GOLD MAINNET</span>
          </div>
          <div className="wallet-row">
            <span className="wallet-label">Balance:</span>
            <span className="wallet-value gold-text">{userStats.totalEarned} GOLD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
