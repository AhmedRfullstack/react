import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the signup logic
    console.log('Signup attempt with:', formData);
    // For demo purposes, we'll just navigate to the home page
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-purple-900/30 rounded-lg border border-purple-500/20">
        <div className="text-center">
          <h2 className="text-3xl font-light text-white">
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Account</span>
          </h2>
          <p className="mt-2 text-gray-400">Join our community</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 bg-purple-800/30 border border-purple-500/30 rounded-sm text-white focus:outline-none focus:border-purple-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 bg-purple-800/30 border border-purple-500/30 rounded-sm text-white focus:outline-none focus:border-purple-500"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 bg-purple-800/30 border border-purple-500/30 rounded-sm text-white focus:outline-none focus:border-purple-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 bg-purple-800/30 border border-purple-500/30 rounded-sm text-white focus:outline-none focus:border-purple-500"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-500/30 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to the{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-600/90 to-purple-700/90 text-white rounded-sm hover:from-purple-700/90 hover:to-purple-800/90 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-purple-400 hover:text-purple-300"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup; 