import { useState, useEffect } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Header from './components/Header'
import Hero from './components/Hero'
import SystemStatus from './components/SystemStatus'
import GoldMetrics from './components/GoldMetrics'
import ActivityFeed from './components/ActivityFeed'
import FeatureCards from './components/FeatureCards'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import TechStack from './components/TechStack'
import Dashboard from './components/Dashboard'
import Tasks from './components/Tasks'
import Rewards from './components/Rewards'
import Modal from './components/Modal'
import SocialButton from './components/SocialButton'
import './App.css'

function AppContent() {
  const { activeSection, activeModal, closeModal, walletConnected } = useApp()
  const [stats, setStats] = useState({
    totalProcessed: 0,
    successRate: 98.3,
    activeNodes: 47,
    avgResponse: 142
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalProcessed: prev.totalProcessed + Math.floor(Math.random() * 3),
        successRate: 98.3 + (Math.random() * 0.4 - 0.2),
        activeNodes: 47 + Math.floor(Math.random() * 6 - 3),
        avgResponse: 142 + Math.floor(Math.random() * 20 - 10)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderContent = () => {
    if (activeSection === 'dashboard') {
      if (!walletConnected) {
        return (
          <div className="auth-required">
            <div className="terminal-box auth-box">
              <div className="auth-icon">🔒</div>
              <h2 className="auth-title">WALLET CONNECTION REQUIRED</h2>
              <p className="auth-text">Please connect your wallet to access the dashboard.</p>
            </div>
          </div>
        )
      }
      return <Dashboard />
    }
    if (activeSection === 'tasks') return <Tasks />
    if (activeSection === 'rewards') {
      if (!walletConnected) {
        return (
          <div className="auth-required">
            <div className="terminal-box auth-box">
              <div className="auth-icon">🔒</div>
              <h2 className="auth-title">WALLET CONNECTION REQUIRED</h2>
              <p className="auth-text">Please connect your wallet to access rewards.</p>
            </div>
          </div>
        )
      }
      return <Rewards />
    }
    return (
      <>
        <Hero />
        <SystemStatus stats={stats} />
        <GoldMetrics />
        <ActivityFeed />
        <FeatureCards />
        <CTA />
        <FAQ />
        <TechStack />
      </>
    )
  }

  return (
    <div className="app">
      <Header />
      {renderContent()}
      <SocialButton />

      <Modal
        isOpen={activeModal === 'wallet-connected'}
        onClose={closeModal}
        title="WALLET CONNECTED"
      >
        <div className="modal-success">
          <div className="success-icon">✓</div>
          <p>Your wallet has been successfully connected to the Gold System.</p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'task-details'}
        onClose={closeModal}
        title="TASK DETAILS"
      >
        <div className="task-modal-content">
          <p>This task requires you to complete specific requirements. Once you start, you'll have access to all task details and submission instructions.</p>
          <div className="modal-actions">
            <button className="btn btn-primary" onClick={closeModal}>
              ACCEPT TASK
            </button>
            <button className="btn" onClick={closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'claim-rewards'}
        onClose={closeModal}
        title="CLAIM REWARDS"
      >
        <div className="claim-modal-content">
          <div className="claim-icon">💰</div>
          <p>You are about to claim all pending rewards. This action will transfer the gold directly to your connected wallet.</p>
          <div className="modal-actions">
            <button className="btn btn-primary" onClick={closeModal}>
              CONFIRM CLAIM
            </button>
            <button className="btn" onClick={closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
