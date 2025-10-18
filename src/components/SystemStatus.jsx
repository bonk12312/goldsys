import { useState, useEffect } from 'react'
import './SystemStatus.css'

function SystemStatus({ stats }) {
  const [logs, setLogs] = useState([
    { type: 'success', message: 'Task #8472 completed +5.2 GOLD', time: '2s ago' },
    { type: 'info', message: 'New participant joined the network', time: '5s ago' },
    { type: 'success', message: 'Reward distribution verified', time: '12s ago' },
    { type: 'warning', message: 'High network activity detected', time: '23s ago' }
  ])

  const [processing, setProcessing] = useState([
    { id: '$o$o1', wallet: 'oo$ wSmcpQ2oBBB.o5b', amount: '$o$ GUMMv8SEc', balance: 'o$SB8SEo' },
    { id: '$$oo0', wallet: 'oo$ SQL8BBo', amount: 'o$$ @0B', balance: 'o8ooP e8o' },
    { id: '$SQMPSb', wallet: 'SBQ.oB@BO@8o8o', amount: '$8B 8o8', balance: 'o8ooP e8o' }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        type: ['success', 'info', 'warning'][Math.floor(Math.random() * 3)],
        message: [
          `Task #${Math.floor(Math.random() * 10000)} completed +${(Math.random() * 10).toFixed(1)} GOLD`,
          'New participant joined the network',
          'Reward distribution verified',
          'Processing batch rewards',
          'Task validation successful'
        ][Math.floor(Math.random() * 5)],
        time: 'Just now'
      }
      setLogs(prev => [newLog, ...prev.slice(0, 3)])
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="system-status section">
      <div className="container">
        <div className="terminal-box main-terminal">
          <div className="section-title">
            ⚡ SYSTEM_INITIALIZED • PROCESSING PROPOSALS
          </div>

          <div className="processing-table">
            <div className="table-row table-header">
              <span>ID</span>
              <span>WALLET</span>
              <span>AMOUNT</span>
              <span>BALANCE</span>
            </div>
            {processing.map((item, index) => (
              <div key={index} className="table-row">
                <span className="mono-text">{item.id}</span>
                <span className="mono-text">{item.wallet}</span>
                <span className="mono-text">{item.amount}</span>
                <span className="mono-text">{item.balance}</span>
              </div>
            ))}
          </div>

          <div className="optimizing-section">
            <h2 className="optimizing-title">OPTIMIZING THE NETWORK</h2>
            <div className="optimizing-subtitle">
              <span>{'>'}</span> GOLD SYSTEM • AUTONOMOUS AI PROCESSING • <span className="status-indicator"><span className="status-dot"></span> FULLY DISTRIBUTED</span>
            </div>
          </div>
        </div>

        <div className="status-grid">
          <div className="terminal-box status-card">
            <div className="status-header">
              <span className="status-icon">↗</span>
              <span className="status-label">24H GAINS</span>
            </div>
            <div className="status-value positive">+{(Math.random() * 10 + 5).toFixed(4)} GOLD</div>
            <div className="status-percent positive">+{(Math.random() * 5 + 2).toFixed(1)}%</div>
          </div>

          <div className="terminal-box status-card">
            <div className="status-header">
              <span className="status-icon">↘</span>
              <span className="status-label">24H SPENT</span>
            </div>
            <div className="status-value negative">-{(Math.random() * 5 + 1).toFixed(4)} GOLD</div>
            <div className="status-percent">Operation Cost</div>
          </div>

          <div className="terminal-box status-card">
            <div className="status-header">
              <span className="status-icon">⚡</span>
              <span className="status-label">NET PROFIT</span>
            </div>
            <div className="status-value positive">+{(Math.random() * 5 + 3).toFixed(4)} GOLD</div>
            <div className="status-percent positive">+{(Math.random() * 3 + 5).toFixed(1)}%</div>
          </div>
        </div>

        <div className="wallet-section">
          <div className="terminal-box">
            <div className="wallet-header">
              <span className="wallet-label">GOLD WALLET</span>
              <span className="badge">MAINNET • VERIFIED</span>
            </div>
            <div className="wallet-address">
              5FabSxbRDadG3SCXAuy7FkKUQXkGM4qcs5tZ4zHovAbz2kFr
            </div>
            <div className="wallet-actions">
              <button className="btn">📋 COPY</button>
              <button className="btn">GOLDSCAN ↗</button>
            </div>
          </div>
        </div>

        <div className="system-log">
          <div className="terminal-box">
            <div className="section-title">
              {'>'} SYSTEM_ACTIVITY.log
            </div>
            <div className="log-content">
              <div className="log-info">
                <span className="log-status">⚡ Monitoring network stability...</span>
              </div>
              <div className="log-entries">
                {logs.map((log, index) => (
                  <div key={index} className={`log-entry log-${log.type}`}>
                    <span className="log-time">[{log.time}]</span>
                    <span className="log-message">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="terminal-box">
            <div className="section-title">
              GOLD STATS
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-label">UPTIME:</div>
                <div className="stat-value">{stats.successRate.toFixed(1)}%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">NETWORK:</div>
                <div className="stat-value gold-text">GOLD MAINNET</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">LAST ACTIVITY:</div>
                <div className="stat-value">3m ago</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">VERSION:</div>
                <div className="stat-value">v2.1.4</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">ENGINE:</div>
                <div className="stat-value">HYX (CUSTOM)</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">TOTAL PROCESSED:</div>
                <div className="stat-value">{stats.totalProcessed + 1267}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">SUCCESS RATE:</div>
                <div className="stat-value positive">{stats.successRate.toFixed(1)}%</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">ACTIVE NODES:</div>
                <div className="stat-value">{stats.activeNodes}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">AVG RESPONSE:</div>
                <div className="stat-value">{stats.avgResponse}ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemStatus
