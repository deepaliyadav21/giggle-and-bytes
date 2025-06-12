"use client";

import React, { useState } from 'react';
import { FaUsers, FaEye, FaSearch, FaTrophy } from 'react-icons/fa';

const GuestPostingBenefits = () => {
  const benefits = [
    {
      title: "Establish Expertise",
      description: "Guest posting on reputable websites helps you build credibility and become an authority in your field.",
      icon: <FaTrophy className="text-4xl text-yellow-500 mb-4" />
    },
    {
      title: "Increase Your Visibility",
      description: "Gain exposure to new audiences and potential clients who may not have heard about your brand before.",
      icon: <FaEye className="text-4xl text-blue-500 mb-4" />
    },
    {
      title: "Boost SEO",
      description: "Secure high-quality backlinks to improve your website's search engine rankings and organic traffic.",
      icon: <FaSearch className="text-4xl text-green-500 mb-4" />
    },
    {
      title: "Build Brand Recognition",
      description: "Consistently sharing high-quality content can enhance brand awareness and loyalty among your audience.",
      icon: <FaUsers className="text-4xl text-purple-500 mb-4" />
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Guest Posting Matters</h2>
          <p className="text-xl text-gray-600">Discover the benefits of contributing to our platform</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              {benefit.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WriteForUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) formErrors.email = "Email is required.";
    if (!formData.mobile.trim()) formErrors.mobile = "Mobile number is required.";
    if (!formData.subject.trim()) formErrors.subject = "Subject is required.";
    if (!formData.message.trim()) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Write for Us!</h1>
          <p className="text-xl mb-8">
            Become a guest blogger and share your knowledge with our audience. 
            Join our community of writers and thought leaders.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              We're looking for passionate writers who want to share their expertise, 
              insights, and unique perspectives with our growing community.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Writing Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Original, high-quality content (minimum 800 words)</li>
                  <li>• Well-researched and factually accurate</li>
                  <li>• Engaging and valuable to our readers</li>
                  <li>• Proper grammar and spelling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Topics We Cover</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Technology and Innovation</li>
                  <li>• Business and Entrepreneurship</li>
                  <li>• Education and Learning</li>
                  <li>• Lifestyle and Personal Development</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Submission Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fill out the contact form below</li>
                  <li>• Include your article pitch or outline</li>
                  <li>• Wait for our editorial team's response</li>
                  <li>• Submit your full article if approved</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What You Get</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Author byline and bio</li>
                  <li>• Social media promotion</li>
                  <li>• Backlink to your website</li>
                  <li>• Exposure to our audience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Submit Your Pitch</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your submission! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required 
                />
                {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required 
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="mobile" 
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No. *" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required 
                />
                {errors.mobile && <span className="text-red-500 text-sm mt-1 block">{errors.mobile}</span>}
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Article Topic/Subject *" 
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required 
                />
                {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>}
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Article Pitch/Outline *" 
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required 
                />
                {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition-colors"
              >
                Submit Pitch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <GuestPostingBenefits />
    </div>
  );
};

export default WriteForUs;