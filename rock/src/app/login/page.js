'use client'
import React, { useState } from 'react';

const AgentLogin = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!emailPhone || !passcode) {
      setError('Please fill in all the fields');
      return;
    }
    
    // Handle form submission (e.g., send data to API)
    console.log('Form submitted', { emailPhone, passcode });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Agent Login</h2>
        <p className="text-center text-gray-500 mb-6">Hey, enter your details to sign in to your account</p>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="email-phone">
              Enter Email / Phone No
            </label>
            <input
              id="email-phone"
              type="text"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Enter Email or Phone number"
              aria-required="true"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="passcode">Password</label>
            <div className="relative">
              <input
                id="passcode"
                type={showPasscode ? "text" : "password"}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                placeholder="Passcode"
                aria-required="true"
              />
              <button
                type="button"
                onClick={() => setShowPasscode(!showPasscode)}
                className="absolute inset-y-0 right-0 px-4 text-gray-500 focus:outline-none"
                aria-label={showPasscode ? "Hide passcode" : "Show passcode"}
              >
                {showPasscode ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <a href="#" className="text-sm text-indigo-500 hover:underline focus:outline-none">Having trouble signing in?</a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Sign in
          </button>
        </form>
        
        <div className="my-6 text-center text-gray-500">— Or sign in with —</div>
        
        <div className="grid grid-cols-3 gap-4">
          <SocialButton platform="Google" logo="google-icon.svg" />
          <SocialButton platform="Apple ID" logo="apple-icon.svg" />
          <SocialButton platform="Facebook" logo="facebook-icon.svg" />
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don’t have an account? <a href="/register" className="text-indigo-500 hover:underline focus:outline-none">Request Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ platform, logo }) => (
  <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
    <img src={`/${logo}`} alt={`${platform} logo`} className="h-6 w-6 mr-2" />
    {platform}
  </button>
);

export default AgentLogin;
