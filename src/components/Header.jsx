import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState(new Date())
  const { walletConnected, walletAddress, connectWallet, navigateTo, activeSection } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="ticker">
        <div className="ticker-content">
          GOLD: $2,084.15 • 24H CHANGE: +$42.50 • YIELD: 12.8% • VOL 24H: $125.4M • LTR: $8.00 • PROCESSED: 15847 • SUCCESS RATE: 98.3% • ACTIVE TASKS: 1,247 • REWARDS DISTRIBUTED: $847,234 • NETWORK UPTIME: 99.97% • AVG TASK TIME: 2.4s •
        </div>
      </div>
      <div className="header-main container">
        <div className="header-left">
          <div className="logo" onClick={() => navigateTo('home')}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">GOLD SYSTEM</span>
          </div>
          <div className="header-info">
            <span className="header-time">{time.toLocaleTimeString()}</span>
            <span className="header-status">
              <span className="status-dot"></span>
              OPERATIONAL
            </span>
          </div>
        </div>
        <div className="header-right">
          <button
            className={`header-link ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => navigateTo('dashboard')}
          >
            DASHBOARD
          </button>
          <button
            className={`header-link ${activeSection === 'tasks' ? 'active' : ''}`}
            onClick={() => navigateTo('tasks')}
          >
            TASKS
          </button>
          <button
            className={`header-link ${activeSection === 'rewards' ? 'active' : ''}`}
            onClick={() => navigateTo('rewards')}
          >
            REWARDS
          </button>
          {walletConnected ? (
            <button className="btn btn-gold connected">
              {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
            </button>
          ) : (
            <button className="btn btn-gold" onClick={connectWallet}>
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
