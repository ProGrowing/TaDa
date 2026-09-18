import { useState } from 'react';
import { Mail, UploadCloud } from 'lucide-react';

export default function Settings({ user }) {
  const [activeTab, setActiveTab] = useState('My details');

  const profileName = user?.fullName || user?.name || '';
  const nameParts = profileName.trim().split(/\s+/).filter(Boolean);

  const tabs = [
    'My details',
    'Profile',
    'Password',
    'Team',
    'Plan',
    'Billing',
    'Email',
    'Notifications',
  ];

  const [formData, setFormData] = useState({
    firstName: nameParts[0] || '',
    lastName: nameParts.slice(1).join(' '),
    email: user?.email || '',
    role: user?.role || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex-1 w-full min-w-0 max-w-full overflow-x-hidden bg-[#F4F6FA] p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        <div className="relative w-full h-44 sm:h-52 md:h-60 rounded-2xl overflow-hidden bg-gradient-to-r from-teal-400 via-indigo-500 to-sky-400 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80"
            alt="Settings Banner"
            className="w-full h-full object-cover mix-blend-overlay opacity-90"
          />
        </div>

        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-14 sm:-mt-16 px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-white shrink-0">
              <img
                src={String(user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80')}
                alt={String(profileName || 'User profile')}
                className="w-full h-full object-cover"
              />
            </div>

           
            <div className="pb-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Settings</h1>
            </div>
          </div>

        
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button 
              type="button" 
              className="px-5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-sm transition shadow-sm cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>

       
        <div className="border-b border-slate-200/80 mt-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max pb-3 px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium transition-colors relative pb-1 cursor-pointer ${
                  activeTab === tab
                    ? 'text-indigo-600 font-semibold'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

      
        {activeTab === 'My details' && (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 max-w-3xl mt-2">
            
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Killan"
                  className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="James"
                  className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
                />
              </div>
            </div>

           
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="killanjames@gmail.com"
                  className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
                />
                <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
              </div>
            </div>

         
            <div>
              <div className="border-2 border-dashed border-slate-200/80 hover:border-indigo-300 rounded-2xl p-8 bg-white/50 flex flex-col items-center justify-center text-center cursor-pointer transition">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                  <UploadCloud size={20} />
                </div>
                <p className="text-xs font-medium text-slate-600">
                  <span className="text-indigo-600 font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Product Designer"
                className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
              />
            </div>

          </form>
        )}

      </div>
    </div>
  );
}