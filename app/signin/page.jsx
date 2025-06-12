'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    language: 'en',
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isFormValid = form.email && form.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        toast.success('Login successful!');
        // Redirect or handle successful login
      } else {
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 bg-primary rounded-full flex items-center justify-center">
              <FaLock className="text-white text-xl" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Sign in</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* Language Selection */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Language:</span>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="language"
                  value="en"
                  checked={form.language === 'en'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm">English</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="language"
                  value="hi"
                  checked={form.language === 'hi'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm">Hindi</span>
              </label>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Remember me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-3 px-4 rounded-md font-semibold text-white transition-colors ${
                isFormValid && !loading
                  ? 'bg-primary hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? 'Signing in...' : 'SIGN IN'}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
            <div className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <FaGoogle className="mr-3 text-red-500" />
              <span className="text-sm font-medium">Sign in with Google</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <FaFacebook className="mr-3" />
              <span className="text-sm font-medium">Login with Facebook</span>
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="mt-6 text-xs text-center text-gray-500">
            By signing in you indicate that you have read and agreed to the{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}