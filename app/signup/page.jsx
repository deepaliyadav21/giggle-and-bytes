'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './signup.css'; // assuming this is your external CSS

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    earnWithUs: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = async () => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        alert(data.error || 'Signup failed');
        return;
      }
  
      alert('Login successful!');
      console.log(data.user); // You can redirect or store user data here
    } catch (err) {
      console.error('Signup error:', err);
      alert('Something went wrong');
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
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-icon">
          <span role="img" aria-label="lock">🔒</span>
        </div>
        <h2>Sign up</h2>

        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm-Password"
          onChange={handleChange}
        />

        {/* <div className="checkbox-row">
          <input
            type="checkbox"
            name="earnWithUs"
            onChange={handleChange}
          />
          <label>
            Do you want to join <span className="link-text">'Earn With Us'</span> Program?
          </label>
        </div> */}

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="termsAccepted"
            onChange={handleChange}
            id="termsAccepted"
          />
          <label htmlFor="termsAccepted">
            I accept{' '}
            <Link href="/terms">
              <span className="link-text">Terms and Conditions</span>
            </Link>
          </label>
        </div>

        <div className="recaptcha-placeholder">
          <input type="checkbox" />
          <span>I'm not a robot</span>
        </div>

        <button
        className="next-button"
        disabled={!isFormValid}
        onClick={handleSignUp}
        >
          Register
        </button>

        <p className="login-link">
          <Link href="/signin">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
}
