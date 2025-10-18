import { useState } from 'react'
import { useApp } from '../context/AppContext'
import './Rewards.css'

function Rewards() {
  const { openModal } = useApp()
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const rewardsHistory = [
    { id: 1, date: '2024-10-18', task: 'Smart Contract Verification', amount: 15.5, status: 'claimed' },
    { id: 2, date: '2024-10-17', task: 'Community Content Creation', amount: 8.2, status: 'claimed' },
    { id: 3, date: '2024-10-16', task: 'Bug Report Analysis', amount: 12.0, status: 'claimed' },
    { id: 4, date: '2024-10-15', task: 'Translation Services', amount: 18.5, status: 'claimed' },
    { id: 5, date: '2024-10-14', task: 'Weekly Streak Bonus', amount: 10.0, status: 'claimed' },
    { id: 6, date: '2024-10-13', task: 'UI/UX Design Review', amount: 10.5, status: 'claimed' },
    { id: 7, date: '2024-10-12', task: 'Documentation Update', amount: 7.8, status: 'claimed' },
    { id: 8, date: '2024-10-11', task: 'Code Review', amount: 14.2, status: 'pending' }
  ]

  const pendingRewards = rewardsHistory.filter(r => r.status === 'pending')
  const totalPending = pendingRewards.reduce((sum, r) => sum + r.amount, 0)

  const stats = {
    week: { earned: 74.7, tasks: 6, average: 12.45 },
    month: { earned: 247.83, tasks: 42, average: 5.90 },
    all: { earned: 1234.56, tasks: 187, average: 6.60 }
  }

  const currentStats = stats[selectedPeriod]

  return (
    <div className="rewards">
      <div className="rewards-header">
        <h1 className="rewards-title glow-text">REWARDS</h1>
        <p className="rewards-subtitle">Track your earnings and claim rewards</p>
      </div>

      <div className="rewards-summary">
        <div className="terminal-box summary-card highlight">
          <div className="summary-icon">💰</div>
          <div className="summary-label">PENDING REWARDS</div>
          <div className="summary-value gold-text">{totalPending.toFixed(1)} GOLD</div>
          <button className="btn btn-claim" onClick={() => openModal('claim-rewards')}>
            CLAIM ALL REWARDS
          </button>
        </div>

        <div className="terminal-box summary-card">
          <div className="summary-icon">📊</div>
          <div className="summary-label">TOTAL EARNED</div>
          <div className="summary-value">{currentStats.earned} GOLD</div>
          <div className="summary-meta">{selectedPeriod === 'week' ? 'This Week' : selectedPeriod === 'month' ? 'This Month' : 'All Time'}</div>
        </div>

        <div className="terminal-box summary-card">
          <div className="summary-icon">✓</div>
          <div className="summary-label">TASKS COMPLETED</div>
          <div className="summary-value">{currentStats.tasks}</div>
          <div className="summary-meta">{selectedPeriod === 'week' ? 'This Week' : selectedPeriod === 'month' ? 'This Month' : 'All Time'}</div>
        </div>

        <div className="terminal-box summary-card">
          <div className="summary-icon">📈</div>
          <div className="summary-label">AVERAGE REWARD</div>
          <div className="summary-value">{currentStats.average} GOLD</div>
          <div className="summary-meta">Per Task</div>
        </div>
      </div>

      <div className="terminal-box rewards-history">
        <div className="history-header">
          <div className="section-title">{'>'} REWARDS_HISTORY</div>
          <div className="period-selector">
            <button
              className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('week')}
            >
              WEEK
            </button>
            <button
              className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('month')}
            >
              MONTH
            </button>
            <button
              className={`period-btn ${selectedPeriod === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('all')}
            >
              ALL
            </button>
          </div>
        </div>

        <div className="history-table">
          <div className="table-header">
            <span>DATE</span>
            <span>TASK</span>
            <span>AMOUNT</span>
            <span>STATUS</span>
          </div>
          {rewardsHistory.map((reward) => (
            <div key={reward.id} className={`table-row ${reward.status}`}>
              <span className="table-date">{reward.date}</span>
              <span className="table-task">{reward.task}</span>
              <span className="table-amount gold-text">+{reward.amount} GOLD</span>
              <span className={`table-status status-${reward.status}`}>
                {reward.status === 'claimed' ? '✓ Claimed' : '⏳ Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="terminal-box rewards-info">
        <div className="section-title">{'>'} REWARD_INFORMATION</div>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">🔒</div>
            <div className="info-content">
              <div className="info-title">Secure Transactions</div>
              <div className="info-text">All rewards are processed through smart contracts and transferred directly to your wallet.</div>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">⚡</div>
            <div className="info-content">
              <div className="info-title">Instant Claims</div>
              <div className="info-text">Claim your rewards instantly with zero fees. Gas costs are covered by the platform.</div>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">🎯</div>
            <div className="info-content">
              <div className="info-title">Bonus Rewards</div>
              <div className="info-text">Maintain streaks and complete milestones to earn bonus gold rewards.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards
