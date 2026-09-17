import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'; 

export default function Login({ onLoginSuccess, onNavigate }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (isSignUp) {
    console.log('Signing up with:', formData);

    if (onLoginSuccess) {
      onLoginSuccess({
        ...formData,
        isNewUser: true,
      });
    }

  } else {
    console.log('Logging in with:', formData.email, formData.password);
    if (onLoginSuccess) {
      onLoginSuccess({ email: formData.email, name: formData.name || 'User' });
    }
  }
};


  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-2 items-center">
          <img className="h-12 w-auto object-contain mix-blend-multiply" src={logo} alt="tada logo" />
          <span className="text-3xl font-extrabold tracking-normal text-slate-700 font-sans">TaDa</span>
        </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
       
        <h2 className="mt-6 text-2xl font-bold text-slate-800 tracking-tight">
          {isSignUp ? 'Create your tada account' : 'Sign in to your account'}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Organize your tasks seamlessly.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-slate-100 sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-slate-800 text-base sm:text-sm"
                  />
                </div>
              </div>
            )}

            
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-slate-800 text-base sm:text-sm"
                />
              </div>
            </div>

           
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-slate-700">
                 Create Password
                </label>
                {!isSignUp && (
                  <button type="button" onClick={() => onNavigate && onNavigate('forgot-password')}
                    className="text-xs text-indigo-600 hover:underline cursor-pointer bg-transparent border-0 p-0">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-slate-800 text-base sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  title={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out cursor-pointer mt-2"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          
          <div className="mt-6 text-center text-sm text-slate-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-indigo-600 hover:underline font-semibold cursor-pointer"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}