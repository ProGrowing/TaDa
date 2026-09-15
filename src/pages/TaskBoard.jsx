import { useState } from 'react';
import { 
  MessageSquare,
  Plus, 
  MoreHorizontal, 
  CheckCircle2, 
  Paperclip, 
  Mic, 
  Play, 
  X 
} from 'lucide-react';

export default function TaskBoard({ user, onLogout, onNavigate }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);


  const columns = [
    {
      id: 'backlog',
      title: 'Backlog',
      cards: [
        {
          id: 1,
          tag: 'Design',
          tagBg: 'bg-blue-600',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
          title: 'Create styleguide foundation',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=2', 'https://i.pravatar.cc/100?img=3'],
          checklist: '0/8'
        },
        {
          id: 2,
          tag: 'Research',
          tagBg: 'bg-sky-500',
          title: 'Copywriting Content',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=4', 'https://i.pravatar.cc/100?img=5'],
          checklist: '0/8'
        },
        {
          id: 3,
          tag: 'Planning',
          tagBg: 'bg-orange-500',
          title: 'Update requiment list',
          desc: 'Create content for peceland App',
          date: 'Sep 20, 2021',
          commentCount: 4,
          hasFile: true
        }
      ]
    },
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        {
          id: 4,
          tag: 'Research',
          tagBg: 'bg-sky-500',
          title: 'auditing information architecture',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=6', 'https://i.pravatar.cc/100?img=7'],
          checklist: '0/8'
        },
        {
          id: 5,
          tag: 'Content',
          tagBg: 'bg-amber-500',
          image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80',
          title: 'Update support documentation',
          desc: 'Create content for peceland App',
          date: 'Aug 16, 2021',
          avatars: ['https://i.pravatar.cc/100?img=8', 'https://i.pravatar.cc/100?img=9', 'https://i.pravatar.cc/100?img=10'],
          checklist: '0/8'
        },
        {
          id: 6,
          tag: 'Research',
          tagBg: 'bg-sky-500',
          title: 'Qualitative research planning',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=11', 'https://i.pravatar.cc/100?img=12'],
          checklist: '0/8'
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: [
        {
          id: 7,
          tag: 'Planning',
          tagBg: 'bg-orange-500',
          title: 'Listing deliverables checklist',
          desc: 'Create content for peceland App',
          date: 'Sep 20, 2021',
          commentCount: 4,
          hasFile: true
        },
        {
          id: 8,
          tag: 'Research',
          tagBg: 'bg-sky-500',
          title: 'Qualitative research planning',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=13', 'https://i.pravatar.cc/100?img=14'],
          checklist: '0/8'
        },
        {
          id: 9,
          tag: 'Design',
          tagBg: 'bg-blue-600',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
          title: 'Copywriting Content',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=15', 'https://i.pravatar.cc/100?img=16', 'https://i.pravatar.cc/100?img=17'],
          checklist: '0/8'
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      cards: [
        {
          id: 10,
          tag: 'Content',
          tagBg: 'bg-amber-500',
          image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80',
          title: 'Design System',
          desc: 'Create content for peceland App',
          date: 'Aug 10, 2021'
        },
        {
          id: 11,
          tag: 'Design',
          tagBg: 'bg-blue-600',
          title: 'High fedality UI Desktop',
          desc: 'Create content for peceland App',
          date: 'Aug 20, 2021',
          avatars: ['https://i.pravatar.cc/100?img=18', 'https://i.pravatar.cc/100?img=19'],
          checklist: '0/8'
        },
        {
          id: 12,
          tag: 'Content',
          tagBg: 'bg-amber-500',
          title: 'Listing deliverables checklist',
          desc: 'Create content for peceland App',
          date: 'Sep 20, 2021',
          commentCount: 4,
          hasFile: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-700 flex flex-col xl:flex-row font-sans xl:pl-20">
      
      <div className="flex-1 flex flex-col min-w-0">

        <div className="px-6 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <h1 className="text-2xl font-bold text-slate-800">Task</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=21" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=22" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=23" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=24" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=25" alt="User" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-50 text-indigo-600 text-xs font-semibold flex items-center justify-center">
                +6
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex items-center justify-center font-bold text-sm transition">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="p-6 flex-1 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[300px] lg:min-w-none">
            {columns.map((column) => (
              <div key={column.id} className="flex flex-col gap-4">
                
                <div className="flex items-center justify-between px-1">
                  <h2 className="font-semibold text-slate-800 text-base">{column.title}</h2>
                  <div className="flex items-center gap-2">
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreHorizontal size={18} />
                    </button>
                    <button className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex items-center justify-center text-xs font-bold">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

              
                <div className="flex flex-col gap-4">
                  {column.cards.map((card) => (
                    <div 
                      key={card.id} 
                      className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100/80 hover:shadow-md transition cursor-pointer flex flex-col gap-3"
                    >
                     
                      <div>
                        <span className={`inline-block px-3 py-1 text-white text-xs font-medium rounded-md ${card.tagBg}`}>
                          {card.tag}
                        </span>
                      </div>

                     
                      {card.image && (
                        <div className="rounded-xl overflow-hidden h-32 w-full">
                          <img src={card.image} alt="Card preview" className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-slate-800 text-sm leading-snug">{card.title}</h3>
                        <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
                      </div>
                    
                      <p className="text-xs text-slate-400 font-medium">{card.date}</p>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-50 mt-1">
                        {card.avatars ? (
                          <div className="flex -space-x-1.5">
                            {card.avatars.map((av, idx) => (
                              <img key={idx} className="w-6 h-6 rounded-full border border-white object-cover" src={av} alt="Avatar" />
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            {card.commentCount && (
                              <span className="flex items-center gap-1">
                                <MessageSquare size={12} /> {card.commentCount} Comment
                              </span>
                            )}
                          </div>
                        )}

                        {card.checklist && (
                          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                            <CheckCircle2 size={13} />
                            <span>{card.checklist}</span>
                          </div>
                        )}
                        {card.hasFile && (
                          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                            <Paperclip size={12} />
                            <span>1 File</span>
                          </div>
                        )}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

     
      <aside className={`
        ${chatOpen ? 'block fixed inset-y-0 right-0 z-40 bg-white' : 'hidden'} 
        2xl:block w-full sm:w-80 bg-white border-l border-slate-200/80 p-6 flex flex-col justify-between shrink-0
      `}>
        <div className="flex flex-col gap-6">
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 text-sm">Member (25)</h3>
              <button className="text-xs font-semibold text-slate-400 hover:text-slate-600">View All</button>
            </div>

           
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=31" alt="Member" />
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=32" alt="Member" />
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=33" alt="Member" />
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=34" alt="Member" />
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=35" alt="Member" />
              <img className="w-9 h-9 rounded-full object-cover shrink-0" src="https://i.pravatar.cc/100?img=36" alt="Member" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-sm mb-4">Group Chat</h3>

            <div className="flex flex-col gap-4 text-xs">
              
              <div className="flex items-start gap-2">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=40" alt="Sender" />
                <div>
                  <div className="bg-slate-100 text-slate-700 p-2.5 rounded-2xl rounded-tl-none inline-block">
                    Hello! 👋
                  </div>
                  <span className="block text-[10px] text-slate-400 mt-1">18:00 pm</span>
                </div>
              </div>

              <div className="flex items-end justify-end gap-2">
                <div>
                  <div className="bg-indigo-600 text-white p-2.5 rounded-2xl rounded-tr-none inline-block">
                    Hi, Everyone 👋
                  </div>
                </div>
                <img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="You" />
              </div>

              <div className="flex items-start gap-2">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=41" alt="Sender" />
                <div>
                  <div className="bg-slate-100 text-slate-600 p-2.5 rounded-2xl rounded-tl-none max-w-[200px] leading-relaxed">
                    How are you.What did you do everyone
                  </div>
                  <span className="block text-[10px] text-slate-400 mt-1">05:01 am</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=42" alt="Sender" />
                <div>
                  <div className="bg-slate-100 text-slate-600 p-2.5 rounded-2xl rounded-tl-none inline-block">
                    Good⚡
                  </div>
                  <span className="block text-[10px] text-slate-400 mt-1">05:01 am</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=43" alt="Sender" />
                <div className="bg-indigo-50 text-indigo-600 px-3 py-2 rounded-2xl flex items-center gap-2">
                  <button className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Play size={10} fill="currentColor" />
                  </button>
                 
                  <div className="flex items-center gap-0.5 h-4">
                    <span className="w-0.5 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="w-0.5 h-4 bg-indigo-600 rounded-full"></span>
                    <span className="w-0.5 h-3 bg-indigo-400 rounded-full"></span>
                    <span className="w-0.5 h-1 bg-indigo-300 rounded-full"></span>
                    <span className="w-0.5 h-4 bg-indigo-600 rounded-full"></span>
                    <span className="w-0.5 h-2 bg-indigo-400 rounded-full"></span>
                  </div>
                  <span className="text-[11px] font-semibold">1:25</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
            <input 
              type="text" 
              placeholder="write here..." 
              className="bg-transparent text-xs text-slate-700 focus:outline-none w-full placeholder:text-slate-400"
            />
            <button className="text-slate-400 hover:text-slate-600">
              <Mic size={16} />
            </button>
          </div>
          <button className="text-slate-400 hover:text-slate-600 p-1">
            <MoreHorizontal size={18} />
          </button>
        </div>

      </aside>

    </div>
  );
}