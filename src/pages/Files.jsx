import { useState } from 'react';

import { 
  ChevronDown, 
  Plus, 
  MoreVertical, 
  Upload, 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  ArrowUpDown
} from 'lucide-react';

export default function Files({ user, onLogout, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const folders = [
    { id: 1, name: 'Documents', count: '24 files', color: 'text-blue-500', bg: 'bg-blue-50', members: ['A', 'B'] },
    { id: 2, name: 'Music', count: '102 files', color: 'text-indigo-500', bg: 'bg-indigo-50', members: [] },
    { id: 3, name: 'Work Project', count: '84 files', color: 'text-sky-500', bg: 'bg-sky-50', members: ['A', 'B'] },
    { id: 4, name: 'Personal Media', count: '2450 files', color: 'text-amber-500', bg: 'bg-amber-50', members: ['A'] },
    { id: 5, name: 'Reddingo Backup', count: '22 files', color: 'text-emerald-500', bg: 'bg-emerald-50', members: [] },
    { id: 6, name: 'Root', count: '105 files', color: 'text-rose-500', bg: 'bg-rose-50', members: ['B'] },
  ];

 
  const recentFiles = [
    {
      id: 1,
      name: 'Proposal.docx',
      size: '2.9 MB',
      date: 'Feb 25,2022',
      icon: <FileText className="text-amber-500" size={18} />,
      iconBg: 'bg-amber-50',
      avatars: ['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=2', 'https://i.pravatar.cc/100?img=3', 'https://i.pravatar.cc/100?img=4']
    },
    {
      id: 2,
      name: 'Background.jpg',
      size: '3.5 MB',
      date: 'Feb 24,2022',
      icon: <ImageIcon className="text-sky-500" size={18} />,
      iconBg: 'bg-sky-50',
      avatars: ['https://i.pravatar.cc/100?img=5', 'https://i.pravatar.cc/100?img=6']
    },
    {
      id: 3,
      name: 'Apex website.fig',
      size: '23.5 MB',
      date: 'Feb 22,2022',
      icon: <FileText className="text-rose-500" size={18} />,
      iconBg: 'bg-rose-50',
      avatars: ['https://i.pravatar.cc/100?img=7', 'https://i.pravatar.cc/100?img=8', 'https://i.pravatar.cc/100?img=9', 'https://i.pravatar.cc/100?img=10']
    },
    {
      id: 4,
      name: 'Illustration.ai',
      size: '7.2 MB',
      date: 'Feb 20,2022',
      icon: <span className="font-bold text-xs text-amber-700">AI</span>,
      iconBg: 'bg-amber-100',
      avatars: ['https://i.pravatar.cc/100?img=11', 'https://i.pravatar.cc/100?img=12', 'https://i.pravatar.cc/100?img=13']
    }
  ];

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#F4F6FA] text-slate-700 flex flex-col xl:flex-row font-sans">
      
      <aside className="w-full xl:w-20 bg-white border-r border-slate-200/80 flex xl:flex-col items-center justify-between p-4 xl:py-6 shadow-sm z-20">
        <div className="flex xl:flex-col items-center gap-6 xl:gap-8 w-full justify-between xl:justify-start"></div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        
        <main className="min-w-0 max-w-full overflow-x-hidden p-4 sm:p-6 flex flex-col gap-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-slate-800">Files</h1>
            
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-start sm:justify-end">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md shadow-indigo-600/20 transition cursor-pointer">
                <Plus size={16} />
                <span>Create New Folder</span>
              </button>
              <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition cursor-pointer">
                <Upload size={16} className="text-slate-500" />
                <span>Upload</span>
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            <div className="xl:col-span-2 flex flex-col gap-6">
              
              <div className="min-w-0 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100/80">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold text-sm hover:text-slate-900">
                    <Folder size={18} className="text-indigo-600 fill-indigo-100" />
                    <span>All Files</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium cursor-pointer hover:text-slate-700">
                    <span>Show All</span>
                    <ChevronDown size={14} />
                  </div>
                </div>

                {/* 6 Folders Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {folders.map((folder) => (
                    <div 
                      key={folder.id} 
                      className="border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-32 hover:border-indigo-200 hover:shadow-sm transition cursor-pointer bg-slate-50/50"
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-9 h-9 rounded-lg ${folder.bg} flex items-center justify-center`}>
                          <Folder size={20} className={`${folder.color} fill-current`} />
                        </div>
                        {folder.members.length > 0 && (
                          <div className="flex -space-x-1">
                            {folder.members.map((m, idx) => (
                              <span 
                                key={idx} 
                                className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800 text-sm">{folder.name}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{folder.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-800">Recent File</h2>
                  <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        <th className="pb-3 font-semibold">
                          <div className="flex items-center gap-1 cursor-pointer">
                            <span>Name</span>
                            <ArrowUpDown size={12} />
                          </div>
                        </th>
                        <th className="pb-3 font-semibold">
                          <div className="flex items-center gap-1 cursor-pointer">
                            <span>Size</span>
                            <ArrowUpDown size={12} />
                          </div>
                        </th>
                        <th className="pb-3 font-semibold">
                          <div className="flex items-center gap-1 cursor-pointer">
                            <span>Last Modified</span>
                            <ArrowUpDown size={12} />
                          </div>
                        </th>
                        <th className="pb-3 font-semibold">
                          <div className="flex items-center gap-1 cursor-pointer">
                            <span>Members</span>
                            <ArrowUpDown size={12} />
                          </div>
                        </th>
                        <th className="pb-3 font-semibold text-right"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-xs">
                      {recentFiles.map((file) => (
                        <tr key={file.id} className="hover:bg-slate-50/80 transition">
                          <td className="py-3.5">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg ${file.iconBg} flex items-center justify-center shrink-0`}>
                                {file.icon}
                              </div>
                              <span className="font-semibold text-slate-700">{file.name}</span>
                            </div>
                          </td>
                          <td className="py-3.5 text-slate-500 font-medium">{file.size}</td>
                          <td className="py-3.5 text-slate-400 font-medium">{file.date}</td>
                          <td className="py-3.5">
                            <div className="flex -space-x-1.5">
                              {file.avatars.map((av, idx) => (
                                <img key={idx} src={av} alt="Member" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                              ))}
                            </div>
                          </td>
                          <td className="py-3.5 text-right">
                            <button className="text-slate-400 hover:text-slate-600 p-1">
                              <MoreVertical size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

           
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  
                  <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-sky-500"
                        strokeDasharray="85, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-lg font-bold text-slate-800">85%</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Available Storage</h3>
                    <p className="text-xs text-slate-400 mt-1 font-medium">130GB / 512GB</p>
                  </div>
                </div>

               
                <div className="mt-6 flex flex-col gap-4 text-xs font-semibold">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                        Media
                      </span>
                      <span className="text-slate-400 font-medium">86 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[65%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Documents
                      </span>
                      <span className="text-slate-400 font-medium">26 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-[35%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        Music
                      </span>
                      <span className="text-slate-400 font-medium">10 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[20%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        Other File
                      </span>
                      <span className="text-slate-400 font-medium">18 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full w-[28%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80">
                <h3 className="font-bold text-slate-800 text-sm mb-6">Activity Chart</h3>

                <div className="h-36 flex items-end justify-between gap-2 border-b border-slate-100 pb-3 px-2">
                  <div className="w-5 bg-rose-500 rounded-t-sm h-[35%]"></div>
                  <div className="w-5 bg-sky-500 rounded-t-sm h-[80%]"></div>
                  <div className="w-5 bg-indigo-600 rounded-t-sm h-[45%]"></div>
                  <div className="w-5 bg-rose-500 rounded-t-sm h-[90%]"></div>
                  <div className="w-5 bg-indigo-600 rounded-t-sm h-[60%]"></div>
                  <div className="w-5 bg-sky-500 rounded-t-sm h-[75%]"></div>
                </div>

               
                <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-semibold text-slate-400 mt-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Media
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span> Photos
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span> Docs
                  </span>
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  );
}