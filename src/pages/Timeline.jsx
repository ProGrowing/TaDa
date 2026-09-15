
import {
  MoreHorizontal,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export default function Timeline() {
 
  const days = [
    'S 04', 'S 05', 'S 06', 'S 07', 'S 04', 'S 05', 'S 06', 'S 07', 'S 08',
    'S 09', 'S 10', 'S 11', 'S 12', 'S 13', 'S 14', 'S 15', 'S 16', 'S 18', 'S 19', 'S 20', 'S 21'
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-700 flex flex-col xl:flex-row font-sans relative overflow-x-hidden xl:pl-20">
      
      <div className="flex-1 flex flex-col min-w-0">

        <div className="px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h1 className="text-xl font-bold text-slate-800">Timeline</h1>
            <button className="px-4 py-1.5 bg-white text-indigo-600 rounded-full text-xs font-semibold border border-indigo-200 shadow-xs hover:bg-indigo-50 transition cursor-pointer">
              Today
            </button>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ChevronLeft size={16} className="cursor-pointer hover:text-slate-600" />
              <span>June, 20,2022</span>
              <ChevronRight size={16} className="cursor-pointer hover:text-slate-600" />
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center gap-1">
              + Invite
            </button>
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="" />
              <div className="h-8 w-8 rounded-full bg-sky-100 text-sky-600 ring-2 ring-white text-[11px] font-bold flex items-center justify-center">
                +5
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex-1 min-w-0 max-w-full flex flex-col xl:flex-row gap-6 overflow-x-hidden relative">
          
          <div className="w-full max-w-full overflow-x-auto pb-2 xl:overflow-visible xl:w-64 xl:pb-0 shrink-0 z-10">
            <div className="w-max min-w-[280px] xl:w-64 xl:min-w-0 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                  +
                </span>
                <span className="text-xs font-bold text-slate-800">UX Research</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="" />
                  <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="" />
                </div>
                <MoreHorizontal size={16} className="text-slate-300 cursor-pointer" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                  +
                </span>
                <span className="text-xs font-bold text-slate-800 truncate">Information Arc...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="" />
                  <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="" />
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 text-[9px] font-bold flex items-center justify-center">R</div>
                </div>
                <MoreHorizontal size={16} className="text-slate-300 cursor-pointer" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">
                    -
                  </span>
                  <span className="text-xs font-bold text-slate-800">Design Phase</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="" />
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-white text-[9px] font-bold flex items-center justify-center">S</div>
                  </div>
                  <MoreHorizontal size={16} className="text-slate-300 cursor-pointer" />
                </div>
              </div>

              <div className="pl-7 space-y-2 text-xs text-slate-400 font-medium">
                <p className="hover:text-slate-700 cursor-pointer">Build Wireframe</p>
                <p className="hover:text-slate-700 cursor-pointer">User Interface D..</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-white flex items-center justify-center text-xs font-bold">
                  +
                </span>
                <span className="text-xs font-bold text-slate-800">Prototyping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="" />
                  <div className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[9px] font-bold flex items-center justify-center">R</div>
                </div>
                <MoreHorizontal size={16} className="text-slate-300 cursor-pointer" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">
                    -
                  </span>
                  <span className="text-xs font-bold text-slate-800">Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="" />
                    <img className="w-5 h-5 rounded-full object-cover ring-1 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="" />
                    <div className="w-5 h-5 rounded-full bg-rose-400 text-white text-[9px] font-bold flex items-center justify-center">S</div>
                  </div>
                  <MoreHorizontal size={16} className="text-slate-300 cursor-pointer" />
                </div>
              </div>

              <div className="pl-7 space-y-2 text-xs text-slate-400 font-medium">
                <p className="hover:text-slate-700 cursor-pointer">Back-End Dev..</p>
                <p className="hover:text-slate-700 cursor-pointer">Front-End Dev..</p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full max-w-full overflow-x-auto pb-2 xl:overflow-visible xl:flex-1 xl:min-w-0 xl:pb-0 flex flex-col relative pt-1">
            <div className="min-w-[900px] xl:min-w-0 flex flex-col relative">
            
            <div className="flex justify-between border-b border-slate-200/60 pb-3 mb-6 text-xs font-semibold text-slate-400 px-2">
              {days.map((day, idx) => (
                <span key={idx} className="w-8 text-center">{day}</span>
              ))}
            </div>

            <div className="space-y-8 relative">
              
              <div className="h-10 relative flex items-center">
          
                <div className="absolute left-[18%] w-44 bg-indigo-500 text-white p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold shadow-md shadow-indigo-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                    <span>48%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>

              
                <div className="absolute left-[44%] w-40 bg-emerald-400 text-white p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold shadow-md shadow-emerald-400/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>Menu</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                    <span>54%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>

                <div className="absolute left-[68%] w-44 bg-sky-400/30 text-sky-600 border border-sky-300 p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span className="bg-sky-400 text-white px-2 py-0.5 rounded-full">Settings</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px]">
                    <span>39%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

            
              <div className="h-10 relative flex items-center">
              
                <div className="absolute left-[13%] w-40 bg-emerald-400/30 text-emerald-700 border border-emerald-300 p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="bg-emerald-400 text-white px-2 py-0.5 rounded-full">Login</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px]">
                    <span>48%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>

             
                <div className="absolute left-[52%] w-40 bg-orange-400/20 text-orange-600 border border-orange-300 p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="bg-orange-400 text-white px-2 py-0.5 rounded-full">Services</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px]">
                    <span>54%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

              
              <div className="h-10 relative flex items-center">
                <div className="absolute left-[40%] w-44 bg-indigo-600 text-white p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold shadow-md shadow-indigo-600/20">
                  <div className="flex items-center gap-1.5">
                    <span>Testimonials</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                    <span>69%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

            
              <div className="h-10 relative flex items-center">
              
                <div className="absolute left-[38%] w-28 bg-orange-400/20 text-orange-600 border border-orange-300 p-1 rounded-full flex items-center justify-between px-3 text-xs font-semibold">
                  <span>61%</span>
                  <ChevronRight size={12} />
                </div>

               
                <div className="absolute left-[66%] w-44 bg-emerald-400/30 text-emerald-700 border border-emerald-300 p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="bg-emerald-400 text-white px-2 py-0.5 rounded-full">Homepage</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px]">
                    <span>48%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

              
              <div className="h-10 relative flex items-center">
                
                <div className="absolute left-[24%] w-60 bg-sky-400/30 text-sky-700 border border-sky-300 p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span className="bg-sky-400 text-white px-3 py-0.5 rounded-full">Our Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px]">
                    <span>63%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

              
              <div className="h-10 relative flex items-center">
                <div className="absolute left-[13%] w-44 bg-indigo-500 text-white p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold shadow-md shadow-indigo-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                    <span>48%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

              
              <div className="h-10 relative flex items-center">
                <div className="absolute left-[52%] w-40 bg-orange-500 text-white p-1 rounded-full flex items-center justify-between pl-3 pr-1 text-xs font-semibold shadow-md shadow-orange-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>Services</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                    <span>54%</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>

            </div>

           
            <div className="absolute top-24 left-[12%] bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 w-64 z-30">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Complete Task</h3>

            
              <div className="h-20 w-full relative mb-4">
                <svg className="w-full h-full text-indigo-500 overflow-visible" viewBox="0 0 200 60">
                  <path
                    d="M 0 50 Q 30 40, 60 20 T 120 25 T 180 5 L 200 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="180" cy="5" r="4" className="fill-indigo-600" />
                </svg>
              </div>

           
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 border-t border-slate-100 pt-3">
                <span>67</span>
                <span>73</span>
                <span>53</span>
                <span>47</span>
                <span>39</span>
                <span>27</span>
                <span>27</span>
              </div>
            </div>

          </div>
          </div>

        </div>

      </div>
    </div>
  );
}