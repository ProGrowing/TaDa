import { useState } from 'react'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Timeline from './pages/Timeline.jsx'
import TaskBoard from './pages/TaskBoard.jsx'
import Header from './component/layout/Header.jsx'
import { TaskProvider } from './context/TaskContext'

export default function App() {
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleLoginSuccess = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => setUser(null)

  return (
    <TaskProvider>
      {user ? (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
          <Header user={user} onNavigate={setCurrentPage} />
          {currentPage === 'timeline' ? (
            <Timeline user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />
          ) : currentPage === 'taskboard' ? (
            <TaskBoard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />
          ) : (
            <Dashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />
          )}
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </TaskProvider>
  )
}
