'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLock } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    earnWithUs: false,
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords don't match.");
      return;
    }

    if (!form.termsAccepted) {
      toast.error('You must accept the terms and conditions.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          f_name: form.firstName,
          l_name: form.lastName,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Signup failed');
        return;
      }

      toast.success('Registration successful! Redirecting to sign-in...');
      setTimeout(() => router.push('/signin'), 2000);
    } catch (err) {
      console.error('Signup error:', err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword &&
    form.termsAccepted;

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
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Sign up</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={form.firstName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={form.lastName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

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

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password *"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <label className="text-sm text-gray-700">
                I accept{' '}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="flex items-center p-4 border border-gray-300 rounded-md bg-gray-50">
              <input type="checkbox" className="mr-3" />
              <span className="text-sm text-gray-700">I'm not a robot</span>
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
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            <Link href="/signin" className="text-primary hover:underline">
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}