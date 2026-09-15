import React, { useState } from 'react';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Timeline from './pages/Timeline';
import TaskBoard from './pages/TaskBoard';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Files from './pages/Files';
import ResetCode from './pages/ResetCode';
import ResetPassword from './pages/ResetPassword';
import Header from './component/layout/Header'
import Dashboard from './pages/Dashboard';
// import SignUp from './pages/SignUp';
import ProfileSetup from './pages/ProfileSetup';
import { TaskProvider } from './context/TaskContext';

function App() {
  const [user, setUser] = useState(null);
  const [authPage, setAuthPage] = useState('login');
  
  // 1. Add this state to track which page is currently active
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.isNewUser) {
      setCurrentPage('profilesetup');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const renderAuthPage = () => {
    switch (authPage) {
      case 'forgot-password':
        return <ForgetPassword onNavigate={setAuthPage} />;
      case 'reset-code':
        return <ResetCode onNavigate={setAuthPage} />;
      case 'new-password':
        return <ResetPassword onNavigate={setAuthPage} />;
      case 'login':
      default:
        return <Login onLoginSuccess={handleLogin} onNavigate={setAuthPage} />;
    }
  };

  const handleProfileComplete = (profileData) => {
    // Save updated profile data to current user state
    setUser((prev) => ({ ...prev, ...profileData, isProfileComplete: true }));
    setCurrentPage('dashboard');
  };

  return (
    <TaskProvider>
      {user ? (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
          <Header user={user} onLogout={handleLogout} onNavigate={setCurrentPage} currentPage={currentPage} />
          
          {currentPage === 'dashboard' ? (
            <Dashboard
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'timeline' ? (
            <Timeline
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'taskboard' ? (
            <TaskBoard
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'files' ? (
            <Files
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'settings' ? (
            <Settings
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'messages' ? (
            <Messages
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          ) : currentPage === 'profilesetup' ? (
            <ProfileSetup
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
              onComplete={handleProfileComplete}
            />
          ) :(
            <Dashboard
              user={user}
              onLogout={handleLogout}
              onNavigate={setCurrentPage}
            />
          )}
        </div>
      ) : (
        renderAuthPage()
      )}
    </TaskProvider>
  );
}

export default App;