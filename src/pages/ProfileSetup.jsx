import { useState } from 'react';

import { 
  Camera, 
  Clock, 
  Bell, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Globe 
} from 'lucide-react';

export default function ProfileSetup({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    role: '',
    department: '',
    bio: '',
    timezone: '',
    workStart: '',
    workEnd: '',
    portfolioUrl: '',
    notifyEmail: true,
    notifyDesktop: true,
  });

  const presetAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      if (onComplete) {
        onComplete({ ...formData, avatar: avatarPreview });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[#F8FAFC] flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans">
      
      <span className="text-xs font-semibold text-slate-400 bg-slate-100 lg:w-[30%] justify-center lg:ml-35 px-3 py-1.5 mb-3 rounded-full border border-slate-200/80">
        Step {currentStep} of 3
      </span>
     
      <div className="max-w-5xl w-full min-w-0 mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row my-auto">
        
        <div className="w-full md:w-80 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
        
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white mb-2">
              Setup Your Profile
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed mb-8">
              Personalize your workspace identity so your team members can recognize and connect with you easily.
            </p>

           
            <div className="space-y-6 relative">
              
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep === 1
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-4 ring-indigo-600/20'
                      : currentStep > 1
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {currentStep > 1 ? <Check size={18} /> : '1'}
                </div>
                <div>
                  <p className={`text-xs font-bold ${currentStep === 1 ? 'text-white' : 'text-slate-400'}`}>
                    Identity & Visuals
                  </p>
                  <p className="text-[11px] text-slate-500">Avatar, name & role</p>
                </div>
              </div>

             
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep === 2
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-4 ring-indigo-600/20'
                      : currentStep > 2
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {currentStep > 2 ? <Check size={18} /> : '2'}
                </div>
                <div>
                  <p className={`text-xs font-bold ${currentStep === 2 ? 'text-white' : 'text-slate-400'}`}>
                    Work & Schedule
                  </p>
                  <p className="text-[11px] text-slate-500">Timezone & hours</p>
                </div>
              </div>

             
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep === 3
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-4 ring-indigo-600/20'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  3
                </div>
                <div>
                  <p className={`text-xs font-bold ${currentStep === 3 ? 'text-white' : 'text-slate-400'}`}>
                    Preferences & Finish
                  </p>
                  <p className="text-[11px] text-slate-500">Notifications & links</p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 md:mt-0 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500">
            Need help? Contact support anytime.
          </div>
        </div>

       
        <div className="flex-1 min-w-0 p-6 sm:p-10 flex flex-col justify-between bg-white">
          <form onSubmit={handleNext} className="space-y-6">
            
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Personal Details</h3>
                  <p className="text-xs text-slate-500">Set up your public profile avatar and basic info.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Profile Picture</label>
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    
                    <div className="relative group">
                      <div className="w-20 h-20 rounded-2xl bg-indigo-50 border-2 border-slate-200 overflow-hidden flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-inner">
                        {avatarPreview ? (
                          <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          formData.fullName.slice(0, 2).toUpperCase() || 'TD'
                        )}
                      </div>
                      <label htmlFor="avatar-upload" className="absolute -bottom-2 -right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl shadow-md cursor-pointer transition">
                        <Camera size={14} />
                      </label>
                      <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold text-slate-500 mb-2">Or choose a avatar preset:</p>
                      <div className="flex items-center gap-2">
                        {presetAvatars.map((url, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setAvatarPreview(url)}
                            className={`w-9 h-9 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                              avatarPreview === url ? 'border-indigo-600 scale-105' : 'border-transparent hover:border-slate-300'
                            }`}
                          >
                            <img src={url} alt="Preset" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name<span className="text-indigo-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Omotolani"
                      className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Username<span className="text-indigo-600">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">@</span>
                      <input
                        type="text"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Omotolani"
                        className="w-full bg-slate-50/60 border border-slate-200 rounded-xl pl-8 pr-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Job Title / Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g. Front-end Developer"
                      className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Design">Design</option>
                      <option value="Product">Product Management</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Bio / Summary</label>
                  <textarea
                    name="bio"
                    rows={2}
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Briefly describe what you work on..."
                    className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition resize-none"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Work Context</h3>
                  <p className="text-xs text-slate-500">Configure your working schedule & timezone context.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Timezone</label>
                  <div className="relative">
                    <Globe size={16} className="absolute left-3.5 top-3 text-slate-400" />
                    <select
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      className="w-full bg-slate-50/60 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                    >
                      <option value="UTC+01:00 (WAT)">UTC+01:00 (West Africa Time)</option>
                      <option value="UTC+00:00 (GMT)">UTC+00:00 (Greenwich Mean Time)</option>
                      <option value="UTC-05:00 (EST)">UTC-05:00 (Eastern Standard Time)</option>
                      <option value="UTC-08:00 (PST)">UTC-08:00 (Pacific Standard Time)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Active Working Hours</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] text-slate-400 font-semibold mb-1 block">Start Time</span>
                      <input
                        type="time"
                        name="workStart"
                        value={formData.workStart}
                        onChange={handleChange}
                        className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-semibold mb-1 block">End Time</span>
                      <input
                        type="time"
                        name="workEnd"
                        value={formData.workEnd}
                        onChange={handleChange}
                        className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Portfolio or GitHub Link</label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full bg-slate-50/60 border border-slate-200 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Notifications & Wrap Up</h3>
                  <p className="text-xs text-slate-500">Choose how you wish to receive task updates.</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                        <Bell size={18} />
                      </div>
                      <div className="min-w-0 max-w-full">
                        <p className="text-xs font-bold text-slate-800">Email Notifications</p>
                        <p className="text-[11px] text-slate-500">Receive activity digests and task assignments.</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      name="notifyEmail"
                      checked={formData.notifyEmail}
                      onChange={handleChange}
                      className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                        <Clock size={18} />
                      </div>
                      <div className="min-w-0 max-w-full">
                        <p className="text-xs font-bold text-slate-800">Desktop Push Alerts</p>
                        <p className="text-[11px] text-slate-500">Instant desktop popups for direct mentions.</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      name="notifyDesktop"
                      checked={formData.notifyDesktop}
                      onChange={handleChange}
                      className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                    />
                  </label>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                    {formData.fullName.slice(0, 1) || 'U'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{formData.fullName || 'User Name'}</p>
                    <p className="text-[11px] text-indigo-600 font-semibold">@{formData.username || 'username'} • {formData.role}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-6 py-2.5 rounded-xl text-xs transition shadow-lg shadow-indigo-600/25 cursor-pointer group"
              >
                <span>{currentStep === 3 ? 'Complete Setup' : 'Continue'}</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}