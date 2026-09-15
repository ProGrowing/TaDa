import { useState } from 'react';

import {
  LayoutGrid,
  Play,
  Calendar,
  Phone,
  MoreVertical,
  Paperclip,
  MessageSquare,
  Clock
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Monthly');

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-700 flex flex-col xl:flex-row font-sans xl:pl-20">
      
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <span>☆</span> Task Completed
              </div>
              <span className="text-2xl font-bold text-slate-800">08</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <svg className="w-28 h-10 text-indigo-500 overflow-visible" viewBox="0 0 100 30" fill="none">
                <path d="M0 25 Q 20 10, 40 20 T 80 5 T 100 15" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-500">10+ more</span>
                <p className="text-[11px] text-slate-400">from last week</p>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <span>📄</span> New Task
              </div>
              <span className="text-2xl font-bold text-slate-800">10</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <svg className="w-28 h-10 text-sky-500 overflow-visible" viewBox="0 0 100 30" fill="none">
                <path d="M0 20 Q 25 5, 50 18 T 100 10" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-500">10+ more</span>
                <p className="text-[11px] text-slate-400">from last week</p>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <span>📋</span> Project Done
              </div>
              <span className="text-2xl font-bold text-slate-800">10</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <svg className="w-28 h-10 text-rose-400 overflow-visible" viewBox="0 0 100 30" fill="none">
                <path d="M0 25 Q 30 15, 60 22 T 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-500">08+ more</span>
                <p className="text-[11px] text-slate-400">from last week</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-lg font-bold text-slate-800">Task Done</h2>
            <div className="flex items-center gap-1 sm:gap-2 bg-slate-50 p-1 rounded-xl text-xs font-semibold text-slate-500">
              {['Daily', 'Weekly', 'Monthly'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 sm:px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-indigo-600 shadow-xs font-bold'
                      : 'hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

         
          <div className="relative h-56 w-full flex items-end justify-between pt-4">
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-300 pointer-events-none">
              <div className="border-b border-slate-100 w-full pb-1">400</div>
              <div className="border-b border-slate-100 w-full pb-1">300</div>
              <div className="border-b border-slate-100 w-full pb-1">200</div>
              <div className="border-b border-slate-100 w-full pb-1">100</div>
              <div className="w-full">0</div>
            </div>

          
            <svg className="absolute inset-0 w-full h-full text-indigo-500/20 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d="M 0 150 Q 100 120, 200 60 T 400 110 T 600 40 T 800 120 T 1000 70 L 1000 200 L 0 200 Z" fill="url(#grad1)" />
              <path d="M 0 150 Q 100 120, 200 60 T 400 110 T 600 40 T 800 120 T 1000 70" stroke="#6366F1" strokeWidth="3" fill="none" />
            </svg>

            <svg className="absolute inset-0 w-full h-full text-sky-400 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
              <path d="M 0 180 Q 150 140, 300 90 T 600 150 T 900 110 L 1000 160" stroke="#38BDF8" strokeWidth="3" fill="none" />
            </svg>
          </div>

          
          <div className="flex justify-between gap-2 text-[10px] sm:text-xs text-slate-400 font-medium pt-4 mt-2">
            {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Task</h2>

          
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20 cursor-pointer">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </button>
              <div>
                <p className="text-xs font-semibold text-slate-400">Start from</p>
                <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock size={12} /> 9:00 am
                </p>
              </div>
            </div>

            <div className="flex-1 md:px-6">
              <h3 className="text-sm font-bold text-slate-800">Search Inspiration for project</h3>
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                <span className="flex items-center gap-1 hover:text-indigo-600 cursor-pointer">
                  <Paperclip size={12} /> www.uistore.com
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={12} /> 8 comments
                </span>
              </div>
            </div>

            <div className="w-full md:w-48">
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>24% complete</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-sky-400 h-full w-[24%]" />
              </div>
            </div>

            <button className="px-4 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl text-xs font-semibold transition cursor-pointer self-end md:self-auto">
              ⏰ Reminder
            </button>
          </div>

         
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20 cursor-pointer">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </button>
              <div>
                <p className="text-xs font-semibold text-slate-400">Start from</p>
                <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock size={12} /> 3:00 am
                </p>
              </div>
            </div>

            <div className="flex-1 md:px-6">
              <h3 className="text-sm font-bold text-slate-800">Search Inspiration for project</h3>
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                <span className="flex items-center gap-1 hover:text-indigo-600 cursor-pointer">
                  <Paperclip size={12} /> www.uistore.org
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={12} /> 5 comments
                </span>
              </div>
            </div>

            <div className="w-full md:w-48">
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>60% complete</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[60%]" />
              </div>
            </div>

            <button className="px-4 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl text-xs font-semibold transition cursor-pointer self-end md:self-auto">
              ⏰ Reminder
            </button>
          </div>
        </div>
      </main>

     
      <aside className="w-full xl:w-80 xl:shrink-0 bg-white border-t xl:border-t-0 xl:border-l border-slate-200/80 mt-3 p-4 sm:p-6 space-y-6 shadow-xs">
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">Today's Schedule</h2>
            <div className="flex items-center gap-1 text-slate-400">
              <LayoutGrid size={16} className="cursor-pointer hover:text-slate-600" />
              <Calendar size={16} className="cursor-pointer hover:text-slate-600" />
            </div>
          </div>

          <p className="text-xs text-indigo-600 font-semibold mb-1">30 minute call with Client</p>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-800">Project Discovery Call</h3>
            <button className="text-xs text-indigo-600 font-bold hover:underline cursor-pointer">+ Invito</button>
          </div>

         
          <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-600/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full ring-2 ring-indigo-600 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="1" />
                <img className="w-7 h-7 rounded-full ring-2 ring-indigo-600 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="2" />
                <img className="w-7 h-7 rounded-full ring-2 ring-indigo-600 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="3" />
                <div className="w-7 h-7 rounded-full bg-indigo-500 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-indigo-600">R</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold">28:35</span>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer">
                <Phone size={14} />
              </button>
              <button className="p-1 text-white/80 hover:text-white cursor-pointer">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4">Messages</h2>
          <div className="space-y-4">
            {[
              { name: 'Cris Morich', msg: 'Hi Angelina! How are You?', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
              { name: 'Charmie', msg: 'Do you need that design?', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
              { name: 'Jason Mandala', msg: 'What is the price of hourly...', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' },
              { name: 'Charlie Chu', msg: 'Awsome design!!', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100' },
            ].map((user, i) => (
              <div key={i} className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-xl transition cursor-pointer">
                <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-slate-800">{user.name}</h4>
                  <p className="text-xs text-slate-400 truncate">{user.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-800">New Task</h2>
            <MoreVertical size={16} className="text-slate-400 cursor-pointer" />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Task Title"
              className="w-full bg-slate-100 px-3 py-2 rounded-xl text-xs border-none focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-700"
            />
            
            <div className="flex items-center justify-between bg-slate-100 px-3 py-2 rounded-xl text-xs text-slate-400">
              <span>Create new</span>
              <span>›</span>
            </div>

            <div className="flex items-center justify-between bg-slate-50 px-2 py-1.5 rounded-xl text-sm border border-slate-100">
              <span>‹</span>
              <span className="cursor-pointer">🥳</span>
              <span className="cursor-pointer">🤩</span>
              <span className="cursor-pointer">🔥</span>
              <span className="cursor-pointer">🙏</span>
              <span className="cursor-pointer">👏</span>
              <span className="cursor-pointer">🥳</span>
              <span className="cursor-pointer">😎</span>
              <span>›</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400 mb-2">Add Collaborators</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full text-xs font-medium">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="" className="w-4 h-4 rounded-full" />
                  Angela <button className="hover:text-indigo-800">✕</button>
                </span>
                <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-600 px-2.5 py-1 rounded-full text-xs font-medium">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="" className="w-4 h-4 rounded-full" />
                  Chris <button className="hover:text-sky-800">✕</button>
                </span>
                <button className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold hover:bg-slate-200 transition cursor-pointer">
                  +
                </button>
                <button className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold ml-auto shadow-md shadow-indigo-600/30 cursor-pointer">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

      </aside>
    </div>
  );
}