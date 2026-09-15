import { useState } from 'react';

import logo from "../../assets/images/logo.jpeg";

import {
  MessageCircle,
  Bell,
  Folder,
  Briefcase,
  ChevronDown,
  BookOpen,
  LayoutGrid,
  LogOut,
  Menu,
  Search,
  Settings,
  X
} from 'lucide-react';

export default function Header({ user, onLogout, onNavigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (page) => {
    setMobileMenuOpen(false);
    onNavigate?.(page);
  };

  return (
    <>
      <aside className="hidden xl:flex fixed inset-y-0 left-0 z-50 w-20 bg-white border-r border-slate-200/80 flex-col items-center justify-between p-3 py-6 shadow-sm">
        <div className="flex flex-col items-center gap-8 w-full">
         
          <img className="h-12 w-auto object-contain mix-blend-multiply" src={logo} alt="tada logo" />
          
          <nav className="flex flex-col items-center gap-6 w-full">
            <button type="button" onClick={() => navigate('dashboard')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Dashboard">
              <LayoutGrid size={20} />
            </button>
            <button type="button" onClick={() => navigate('timeline')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'timeline' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Timeline">
              <Briefcase size={20} />
            </button>
            <button type="button" onClick={() => navigate('taskboard')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'taskboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Taskboard">
              <BookOpen size={20} />
            </button>
            <button type="button" onClick={() => onNavigate?.('files')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'files' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Files">
              <Folder size={20} />
            </button>
            <button type="button" onClick={() => onNavigate?.('settings')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'settings' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Settings">
              <Settings size={20} />
            </button>
            <button type="button" onClick={() => onNavigate?.('messages')} className={`w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer ${currentPage === 'messages' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`} aria-label="Messages">
              <MessageCircle size={20} />
            </button>
          </nav>
        </div>

        <button type="button" onClick={onLogout} className="w-11 h-11 rounded-xl text-slate-400 hover:bg-rose-50 hover:text-rose-600 flex items-center justify-center transition cursor-pointer" title="Logout" aria-label="Logout">
          <LogOut size={20} />Logout
        </button>
      </aside>

      <header className="relative z-40 shrink-0 bg-white border-b border-slate-200/80 px-3 sm:px-6 py-3 shadow-xs xl:ml-20">
        <div className="flex items-center gap-3 sm:gap-6 justify-between">
        <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="xl:hidden shrink-0 w-10 h-10 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 flex items-center justify-center transition" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="relative w-full max-w-98 min-w-0">
          <input type="text" placeholder="Search anything..." className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-full text-sm border border-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-700 placeholder:text-slate-400" />
          <Search className="absolute left-3.5 top-2.5 text-slate-400" size={17} />
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="relative p-2 rounded-full text-slate-500 hover:bg-slate-100 transition" aria-label="Notifications">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full" />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 pl-2 border-l border-slate-200">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="User avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20" />
            <div className="hidden sm:block text-left text-xs">
              <p className="font-bold text-slate-800">{user?.name || 'Zeliahu'}</p>
              <p className="text-slate-400">Web Developer</p>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>
        </div>

        {mobileMenuOpen && (
          <nav className="xl:hidden absolute left-3 right-3 top-[calc(100%+0.5rem)] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
            <button type="button" onClick={() => navigate('dashboard')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><LayoutGrid size={18} />Dashboard</button>
            <button type="button" onClick={() => navigate('timeline')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><Briefcase size={18} />Timeline</button>
            <button type="button" onClick={() => navigate('taskboard')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><BookOpen size={18} />Taskboard</button>
            <button type="button" onClick={() => navigate('files')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><Folder size={18} />Files</button>
            <button type="button" onClick={() => navigate('messages')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><MessageCircle size={18} />Messages</button>
            <button type="button" onClick={() => navigate('settings')} className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"><Folder size={18} />Settings</button>
            <button type="button" onClick={onLogout} className="w-11 h-11 rounded-xl text-slate-400 hover:bg-rose-50 hover:text-rose-600 flex items-center justify-center transition cursor-pointer" title="Logout" aria-label="Logout"><LogOut size={20}/></button>
          </nav>
        )}
      </header>
    </>
  );
}