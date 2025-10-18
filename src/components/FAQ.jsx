import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is GoldSystem allowed to do?',
      answer: 'GoldSystem is an autonomous rewards platform that connects users with valuable tasks. It can process task assignments, validate completions, distribute gold rewards, and optimize the matching algorithm between tasks and participants. All operations are transparent and recorded on-chain for full accountability.'
    },
    {
      question: 'Where do rewards go?',
      answer: 'All gold rewards are distributed directly to your connected wallet address. The system uses smart contracts to ensure instant, secure transfers upon task completion. You maintain full custody of your rewards at all times, and can withdraw or reinvest them as you see fit.'
    },
    {
      question: 'How are operations weighted?',
      answer: 'Operations are weighted based on multiple factors including task complexity, time requirements, skill level needed, and community demand. The algorithm uses machine learning to continuously optimize these weights, ensuring fair compensation and efficient task distribution across the network.'
    },
    {
      question: 'What if GoldSystem fails?',
      answer: 'The system is built with multiple redundancy layers and fail-safes. In the unlikely event of a critical failure, all funds are protected by smart contracts with emergency withdrawal mechanisms. The decentralized architecture ensures no single point of failure, and community governance can vote on recovery procedures.'
    },
    {
      question: 'Is this a fund?',
      answer: 'No, GoldSystem is not a fund. It is a decentralized task marketplace and rewards platform. Users earn gold by completing tasks, not through pooled investments. There are no investment returns or profit-sharing mechanisms. Your earnings are based solely on your participation and task completion.'
    },
    {
      question: 'How do I participate in voting?',
      answer: 'Active participants can vote on platform proposals, task categories, reward structures, and system upgrades. Voting power is proportional to your activity level and gold holdings. Connect your wallet, navigate to the governance section, and cast your vote on active proposals. All votes are recorded on-chain.'
    },
    {
      question: 'What are the fees?',
      answer: 'GoldSystem charges a small 2.5% platform fee on completed tasks to maintain infrastructure and fund development. This fee is automatically deducted from rewards before distribution. There are no hidden fees, subscription costs, or withdrawal charges. Gas fees for on-chain transactions are paid separately.'
    },
    {
      question: 'How does task matching work?',
      answer: 'Our AI-powered algorithm analyzes your skills, past performance, availability, and preferences to match you with suitable tasks. The system learns from your activity patterns and continuously improves matching accuracy. You can also manually browse available tasks and select ones that interest you.'
    },
    {
      question: 'Can I create my own tasks?',
      answer: 'Yes! Verified users can create and post tasks for others to complete. You set the requirements, deadline, and reward amount in gold. The platform validates your gold balance before posting, and rewards are held in escrow until task completion is verified. Task creators pay a 1% posting fee.'
    },
    {
      question: 'What happens to incomplete tasks?',
      answer: 'Tasks have defined deadlines. If a task remains incomplete, it is returned to the pool for reassignment. Repeated failures to complete accepted tasks may affect your reputation score and matching priority. However, you can decline tasks before acceptance without penalty if circumstances change.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section">
      <div className="container">
        <div className="terminal-box">
          <div className="section-title">
            {'>'} FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">{'>'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
