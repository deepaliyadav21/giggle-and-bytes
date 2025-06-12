"use client";

import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No. *"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="space-y-8">
              {/* Advertise Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advertise with Us</h3>
                <p className="text-gray-600 mb-2">Want to advertise with us?</p>
                <p className="text-gray-600 mb-2">Or find out how else we can work with your brand?</p>
                <p className="text-gray-600">
                  Let's talk! Connect at{' '}
                  <a href="mailto:submission@letsdiskuss.com" className="text-primary hover:underline">
                    submission@letsdiskuss.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+918800259785" className="text-primary hover:underline">
                    +91 88002 59785
                  </a>
                </p>
              </div>

              {/* Partnership Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Become our Blogging Partner</h3>
                <p className="text-gray-600">
                  Interested in partnering with us? Write to{' '}
                  <a href="mailto:contact@letsdiskuss.com" className="text-primary hover:underline">
                    contact@letsdiskuss.com
                  </a>
                </p>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaEnvelope className="text-primary mr-3" />
                    <span className="text-gray-600">contact@letsdiskuss.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-primary mr-3" />
                    <span className="text-gray-600">+91 88002 59785</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/Letsdiskuss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/Letsdiskuss-315820455578889/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/letsdiskuss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8P36SywfXz8FI0ioSzJuew/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lets-diskuss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}