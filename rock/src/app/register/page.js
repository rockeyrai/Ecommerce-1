'use client'
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Handle form submission (e.g., send data to API)
    console.log('Form submitted', { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className='flex w-full items-center justify-center mb-3'>
          <img className='w-9 h-9' src='/ice-berg.png'/>
          <h2 className="text-2xl font-semibold text-gray-800 text-center">ForzeUP</h2>
          </div>
        <p className="text-center text-gray-500 mb-6">Create an account to get started</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Your Full Name"
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Your Email"
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Create a password"
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Confirm your password"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Register
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">— Or sign up with —</div>

        <div className="grid grid-cols-3 gap-4">
        <SocialButton platform="Google" logo="google-plus.png" />
          <SocialButton platform="Apple" logo="apple-logo.png" />
          <SocialButton platform="Facebook" logo="facebook-circular-logo.png" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Already have an account? <a href="/login" className="text-indigo-500 hover:underline focus:outline-none">Log in</a>
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

export default Register;
