import { useState } from 'react';
import { Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'; 

export default function ResetPassword({ onNavigate }) {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      setError('Please fill in both password fields.');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setIsLoading(true);

  
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] flex flex-col items-center justify-center p-4 font-sans">
      <div className="flex justify-center gap-2 items-center mb-6">
        <img className="h-12 w-auto object-contain mix-blend-multiply" src={logo} alt="tada logo" />
        <span className="text-3xl font-extrabold tracking-normal text-slate-700 font-sans">tada</span>
      </div>
    
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/70 shadow-sm p-8 sm:p-10">
        {!isSuccess ? (
          <>
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Set new password
              </h1>
              <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                Your new password must be at least 8 characters long and different from previous passwords.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold">
                {error}
              </div>
            )}

            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  New Password<span className="text-indigo-600 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-slate-50/50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 focus:bg-white transition placeholder:text-slate-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Confirm Password<span className="text-indigo-600 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-slate-50/50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 focus:bg-white transition placeholder:text-slate-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

             
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-70 text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-lg shadow-indigo-600/25 cursor-pointer flex items-center justify-center gap-2 group mt-2"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Reset password</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
         
          <div className="text-center py-2">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            
            <h2 className="text-xl font-bold text-slate-900">Password reset complete</h2>
            <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
              Your password has been updated successfully. You can now log in using your new credentials.
            </p>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('login')}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              Sign in with new password
            </button>
          </div>
        )}
      </div>

    </div>
  );
}