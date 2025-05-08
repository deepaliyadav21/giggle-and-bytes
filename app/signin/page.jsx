'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './login.css'; // your custom styles here

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    language: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isFormValid = form.email && form.password;

  const handleSubmit = async () => {
    const res = await fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <span role="img" aria-label="lock">🔒</span>
        </div>
        <h2>Sign in</h2>

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

        <div className="radio-row">
          <label>Language</label>
          <label><input type="radio" name="language" value="en" onChange={handleChange} /> English</label>
          <label><input type="radio" name="language" value="hi" onChange={handleChange} /> Hindi</label>
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="remember"
            onChange={handleChange}
          />
          <label>Remember me</label>
        </div>
        

        <button className="signin-button" disabled={!isFormValid}
        onClick={handleSubmit}
        >
          SIGN IN
        </button>

        <div className="links">
          <Link href="/forgot-password">Forgot password?</Link><br />
          <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>
        </div>

        <div className="social-buttons">
          <button className="google-btn">
            <img src="/google-icon.png" alt="Google" /> Sign in with Google
          </button>
          <button className="facebook-btn">
            <img src="/facebook-icon.png" alt="Facebook" /> Login with Facebook
          </button>
        </div>

        <p className="privacy">
          By signing up you indicate that you have read and agreed to the <Link href="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
