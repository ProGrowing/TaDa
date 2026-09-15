import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'; 

export default function ResetCode({ email = 'user@example.com', onNavigate }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1); 
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (!/^\d{6}$/.test(pastedData)) return;

    const digits = pastedData.split('');
    setCode(digits);
    inputRefs.current[5]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');

    if (fullCode.length < 6) {
      setError('Please enter the complete 6-digit code.');
      return;
    }

    setError('');
    setIsLoading(true);

  
    setTimeout(() => {
      setIsLoading(false);
      if (onNavigate) {
        onNavigate('new-password'); 
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] flex flex-col items-center justify-center p-4 font-sans">
      <div className="flex justify-center gap-2 items-center mb-6">
        <img className="h-12 w-auto object-contain mix-blend-multiply" src={logo} alt="tada logo" />
        <span className="text-3xl font-extrabold tracking-normal text-slate-700 font-sans">tada</span>
      </div>
     
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/70 shadow-sm p-8 sm:p-10">
        
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('forgot-password')}
          className="inline-flex items-center gap-2  text-slate-500 hover:text-slate-800 transition mb-6 cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-bold">Back</span>
        </button>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Enter reset code
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
            We sent a 6-digit code to <span className="text-slate-800 font-semibold">{email}</span>
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-3">
              Verification Code<span className="text-indigo-600 ml-0.5">*</span>
            </label>
            <div className="grid grid-cols-6 gap-2 sm:gap-3" onPaste={handlePaste}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-full h-12 text-center text-lg font-bold text-slate-800 bg-slate-50/50 border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 focus:bg-white transition shadow-sm"
                />
              ))}
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
                <span>Verify code</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Didn't get the code?{' '}
            <button
              type="button"
              onClick={() => {
                setCode(['', '', '', '', '', '']);
                inputRefs.current[0]?.focus();
              }}
              className="text-indigo-600 font-bold hover:text-indigo-700 transition cursor-pointer"
            >
              Resend code
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}