import { useState } from 'react'
import { useApp } from '../context/AppContext'
import './Tasks.css'

function Tasks() {
  const { openModal } = useApp()
  const [filter, setFilter] = useState('all')

  const tasks = [
    {
      id: 1,
      title: 'Verify Smart Contract Deployment',
      description: 'Review and verify the deployment of a new smart contract on the Gold Mainnet. Requires intermediate blockchain knowledge.',
      reward: 15.5,
      difficulty: 'Medium',
      timeEstimate: '2-3 hours',
      category: 'Development',
      status: 'available'
    },
    {
      id: 2,
      title: 'Community Content Creation',
      description: 'Create educational content about the Gold System for social media platforms. Must include graphics and clear explanations.',
      reward: 8.2,
      difficulty: 'Easy',
      timeEstimate: '1-2 hours',
      category: 'Marketing',
      status: 'available'
    },
    {
      id: 3,
      title: 'Bug Report Analysis',
      description: 'Analyze and categorize bug reports submitted by community members. Technical understanding required.',
      reward: 12.0,
      difficulty: 'Medium',
      timeEstimate: '3-4 hours',
      category: 'Development',
      status: 'available'
    },
    {
      id: 4,
      title: 'Translation Services',
      description: 'Translate documentation from English to Spanish. Native or fluent Spanish speaker required.',
      reward: 18.5,
      difficulty: 'Easy',
      timeEstimate: '4-5 hours',
      category: 'Content',
      status: 'available'
    },
    {
      id: 5,
      title: 'Security Audit',
      description: 'Perform a comprehensive security audit of the new reward distribution mechanism.',
      reward: 45.0,
      difficulty: 'Hard',
      timeEstimate: '8-10 hours',
      category: 'Security',
      status: 'available'
    },
    {
      id: 6,
      title: 'UI/UX Design Review',
      description: 'Provide detailed feedback on the new dashboard design. Experience in UI/UX required.',
      reward: 10.5,
      difficulty: 'Easy',
      timeEstimate: '1-2 hours',
      category: 'Design',
      status: 'available'
    }
  ]

  const categories = ['all', 'Development', 'Marketing', 'Content', 'Security', 'Design']
  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.category === filter)

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'green'
      case 'Medium': return 'gold'
      case 'Hard': return 'orange'
      default: return 'white'
    }
  }

  return (
    <div className="tasks">
      <div className="tasks-header">
        <h1 className="tasks-title glow-text">AVAILABLE TASKS</h1>
        <p className="tasks-subtitle">Complete tasks and earn GOLD rewards</p>
      </div>

      <div className="terminal-box tasks-filter">
        <div className="filter-label">FILTER BY CATEGORY:</div>
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="tasks-grid">
        {filteredTasks.map((task) => (
          <div key={task.id} className="terminal-box task-card">
            <div className="task-header">
              <div className="task-badges">
                <span className={`badge badge-${getDifficultyColor(task.difficulty)}`}>
                  {task.difficulty}
                </span>
                <span className="badge badge-category">{task.category}</span>
              </div>
              <div className="task-reward gold-text">{task.reward} GOLD</div>
            </div>

            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>

            <div className="task-meta">
              <div className="task-meta-item">
                <span className="meta-icon">⏱</span>
                <span className="meta-text">{task.timeEstimate}</span>
              </div>
              <div className="task-meta-item">
                <span className="meta-icon">💰</span>
                <span className="meta-text">{task.reward} GOLD</span>
              </div>
            </div>

            <button
              className="btn btn-task"
              onClick={() => openModal('task-details')}
            >
              START TASK →
            </button>
          </div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="terminal-box empty-state">
          <div className="empty-icon">📋</div>
          <div className="empty-text">No tasks available in this category</div>
          <button className="btn" onClick={() => setFilter('all')}>
            VIEW ALL TASKS
          </button>
        </div>
      )}
    </div>
  )
}

export default Tasks
