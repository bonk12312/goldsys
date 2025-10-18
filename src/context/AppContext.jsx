import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [activeModal, setActiveModal] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  const connectWallet = () => {
    const mockAddress = '5Fab' + Math.random().toString(36).substring(2, 15) + 'xyz'
    setWalletAddress(mockAddress)
    setWalletConnected(true)
    setActiveModal('wallet-connected')
    setTimeout(() => setActiveModal(null), 3000)
  }

  const disconnectWallet = () => {
    setWalletAddress('')
    setWalletConnected(false)
  }

  const openModal = (modalType) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const navigateTo = (section) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const value = {
    walletConnected,
    walletAddress,
    connectWallet,
    disconnectWallet,
    activeModal,
    openModal,
    closeModal,
    activeSection,
    navigateTo
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
