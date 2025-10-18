import { useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content terminal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="terminal-dots">
            <span className="dot gold"></span>
            <span className="dot green"></span>
            <span className="dot yellow"></span>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
