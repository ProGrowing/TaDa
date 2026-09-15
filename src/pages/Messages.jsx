import { useState } from 'react';
import { 
  Search, 
  File,
  Smile, 
  Paperclip, 
  Send, 
  MapPin, 
  Mic, 
  Plus, 
  ChevronDown,  
  Image as ImageIcon 
} from 'lucide-react';

export default function Messages({ user }) {
  const [activeChat, setActiveChat] = useState('Design Team');

  const conversations = [
    { id: 1, name: 'Killan James', message: 'Typing...', time: '4:30 PM', unread: 2, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', active: false },
    { id: 2, name: 'Design Team', message: 'Hello! Everyone', time: '9:36 AM', unread: 0, avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80', active: true },
    { id: 3, name: 'Ahmed Medi', message: 'Wow really Cool 🔥', time: '1:15 AM', unread: 0, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', active: false },
    { id: 4, name: 'Claudia Maudi', message: 'Typing...', time: '4:30 PM', unread: 0, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', active: false },
    { id: 5, name: 'Novita', message: 'yah, nice design', time: '4:30 PM', unread: 2, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80', active: false },
    { id: 6, name: 'Milie Nose', message: 'Awesome 🔥', time: '8:20 PM', unread: 1, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', active: false },
    { id: 7, name: 'Ikhsan SD', message: '🎙 Voice message', time: 'yesterday', unread: 0, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', active: false },
    { id: 8, name: 'Aditya', message: 'publish now', time: 'yesterday', unread: 0, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', active: false },
  ];

  const attachments = [
    { id: 1, name: 'Very important file.scratch', size: '7.5 MB', date: '3.22.22, 11:15 AM', icon: <File size={16} className="text-rose-500" /> },
    { id: 2, name: 'Some file.scratch', size: '7.5 MB', date: '3.22.22, 11:15 AM', icon: <span className="text-amber-500 font-bold text-xs">💎</span> },
    { id: 3, name: 'List of someting.xd', size: '7.5 MB', date: '3.22.22, 11:15 AM', icon: <span className="text-purple-600 font-bold text-xs">Xd</span> },
    { id: 4, name: 'Very important file.svg', size: '7.5 MB', date: '3.22.22, 11:15 AM', icon: <ImageIcon size={16} className="text-emerald-500" /> },
  ];

  const teamMembers = [
    { name: 'Novita', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80' },
    { name: 'Milie Nose', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
    { name: 'Ikhsan SD', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { name: 'Aditya', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  ];

  return (
    <div className="flex-1 bg-[#F4F6FA] p-4 sm:p-6 jusify-center lg:ml-20 font-sans">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[780px]">
        
        
        <div className="lg:col-span-3 border-r border-slate-100 flex flex-col h-full bg-white">
          <div className="p-5 border-b border-slate-50">
            <h1 className="text-xl font-bold text-slate-800 mb-4">Messages</h1>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
            {conversations.map((chat) => (
              <div 
                key={chat.id} 
                onClick={() => setActiveChat(chat.name)}
                className={`p-4 flex items-center gap-3 cursor-pointer transition ${
                  chat.name === activeChat ? 'bg-indigo-50/50 border-r-2 border-indigo-600' : 'hover:bg-slate-50/80'
                }`}
              >
                <div className="relative shrink-0">
                  <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-xs font-semibold text-slate-800 truncate">{chat.name}</h3>
                    <span className="text-[10px] text-slate-400">{chat.time}</span>
                  </div>
                  <p className={`text-xs truncate ${chat.message === 'Typing...' ? 'text-indigo-600 italic font-medium' : 'text-slate-400'}`}>
                    {chat.message}
                  </p>
                </div>

                {chat.unread > 0 && (
                  <span className="w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shrink-0">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        
        <div className="lg:col-span-6 flex flex-col h-full bg-[#F9FAFC] border-r border-slate-100">
          
          <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" 
                alt="Active Chat" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="text-sm font-bold text-slate-800">Design Team</h2>
                <p className="text-[11px] text-slate-400">60 member, 10 online</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Member" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Member" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Member" />
              </div>
              <button className="w-7 h-7 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-xs font-bold hover:bg-slate-200">
                +
              </button>
            </div>
          </div>

         
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            
            <div className="flex items-start gap-3 max-w-lg">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Killan" className="w-8 h-8 rounded-full object-cover mt-1" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700">Killan James</span>
                  <span className="text-[10px] text-slate-400">10:12 AM</span>
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600">
                  Hi, Are you still Web Designer.
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl shadow-sm text-xs text-slate-600 inline-block">
                  would love to see some Design 😄
                </div>
              </div>
            </div>
           
            <div className="flex items-center justify-center my-4">
              <span className="text-[11px] text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-full">
                Today, March 24
              </span>
            </div>

            <div className="flex items-start gap-3 max-w-lg">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Claudia" className="w-8 h-8 rounded-full object-cover mt-1" />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700">Claudia Maudi</span>
                  <span className="text-[10px] text-slate-400">10:30 AM</span>
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600">
                  Hey, happy to hear from you. Yes, I will be back in a couple to days.
                </div>
                <p className="text-xs text-slate-500">Here are some Design i took earlier today.</p>
                
                <div className="grid grid-cols-2 gap-2 max-w-xs pt-1">
                  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&q=80" alt="Design 1" className="rounded-xl border border-slate-200 shadow-sm object-cover h-32 w-full" />
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80" alt="Design 2" className="rounded-xl border border-slate-200 shadow-sm object-cover h-32 w-full" />
                </div>
              </div>
            </div>

           
            <div className="flex items-end justify-end gap-3">
              <div className="space-y-1 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[10px] text-slate-400">10:30 AM</span>
                  <span className="text-xs font-semibold text-slate-700">Dristin Watson</span>
                </div>
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-md shadow-indigo-600/20 text-xs inline-block">
                  Great 👍 That's a nice design Idea. 🎨
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="You" className="w-8 h-8 rounded-full object-cover mb-1" />
            </div>

            
            <div className="flex items-start gap-3 max-w-lg">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Milie" className="w-8 h-8 rounded-full object-cover mt-1" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-slate-700">Milie Nose</span>
                  <span className="text-[10px] text-slate-400">8:20 PM</span>
                </div>
              </div>
            </div>

          </div>

         
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Mic size={18} className="cursor-pointer hover:text-slate-600" />
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="bg-transparent border-none text-xs text-slate-700 focus:outline-none w-full placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Paperclip size={18} className="cursor-pointer hover:text-slate-600" />
                <Smile size={18} className="cursor-pointer hover:text-slate-600" />
                <Send size={18} className="cursor-pointer hover:text-indigo-600" />
                <MapPin size={18} className="cursor-pointer hover:text-slate-600" />
              </div>
            </div>
          </div>

        </div>

       
        <div className="lg:col-span-3 p-6 flex flex-col gap-6 bg-white overflow-y-auto">
          
          {/* User Card */}
          <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" 
              alt="Killan James" 
              className="w-20 h-20 rounded-full object-cover shadow-sm ring-4 ring-slate-50"
            />
            <h3 className="font-bold text-slate-800 text-sm mt-3">Killan James</h3>
            <p className="text-xs text-slate-400 mt-0.5">@killan james</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-800">Attachments</h4>
              <ChevronDown size={14} className="text-slate-400" />
            </div>

            <div className="space-y-3">
              {attachments.map((file) => (
                <div key={file.id} className="flex items-center justify-between text-xs hover:bg-slate-50 p-1.5 rounded-lg transition">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {file.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-700 truncate">{file.name}</p>
                      <p className="text-[10px] text-slate-400">{file.size} {file.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 mt-3">
              View all
            </button>
          </div>

          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-800">Members</h4>
              <ChevronDown size={14} className="text-slate-400" />
            </div>

            <div className="space-y-3">
              <button className="flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 mb-2">
                <Plus size={16} />
                <span>Add Member</span>
              </button>

              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img src={member.avatar} alt={member.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-medium text-slate-700">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}