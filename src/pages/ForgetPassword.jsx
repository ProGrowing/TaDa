import { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'; 

export default function ForgetPassword({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    setError('Please enter your email address.');
    return;
  }

  setError('');
  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
    if (onNavigate) {
      onNavigate('reset-code'); 
    }
  }, 1000);
};

  

  return (
    <div className="min-h-screen bg-[#F4F6FA] flex flex-col items-center justify-center p-4 font-sans">
      
     
      <div className="flex justify-center gap-2 items-center mb-6">
        <img className="h-12 w-auto object-contain mix-blend-multiply" src={logo} alt="tada logo" />
        <span className="text-3xl font-extrabold tracking-normal text-slate-700 font-sans">tada</span>
      </div>

     
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/70 shadow-sm p-8 sm:p-10">
        {!isSubmitted ? (
          <>
           
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Forgot password
              </h1>
              <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                Enter the email address linked to your account
              </p>
            </div>

           
            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold">
                {error}
              </div>
            )}

           
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Email address<span className="text-indigo-600 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50/50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 focus:bg-white transition placeholder:text-slate-400"
                  />
                  <Mail size={18} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-70 text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-lg shadow-indigo-600/25 cursor-pointer flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Proceed</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>

           
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-500 font-medium">
                Remember password?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('login')}
                  className="text-indigo-600 font-bold hover:text-indigo-700 transition cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>
          </>
        ) : (
          
          <div className="text-center py-2">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            
            <h2 className="text-xl font-bold text-slate-900">Check your inbox</h2>
            <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
              We sent a recovery link to <span className="font-semibold text-slate-800">{email}</span>. Click the link inside to set a new password.
            </p>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('login')}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl text-sm transition shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              Back to Sign in
            </button>

            <p className="text-xs text-slate-400 font-medium mt-5">
              Didn't receive the email?{' '}
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 font-bold hover:underline cursor-pointer"
              >
                Try again
              </button>
            </p>
          </div>
        )}
      </div>

    </div>
  );
}