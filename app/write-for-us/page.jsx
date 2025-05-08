"use client";

import React, { useState } from 'react';
import './WriteForUs.css'; // Import the CSS file

const GuestPostingBenefits = () => {
  const benefits = [
    {
      title: "Establish an Expert",
      description: "Guest posting on reputable websites helps you build credibility and become an authority in your field."
    },
    {
      title: "Increase Your Visibility",
      description: "Gain exposure to new audiences and potential clients who may not have heard about your brand before."
    },
    {
      title: "Boost SEO",
      description: "Secure high-quality backlinks to improve your website's search engine rankings and organic traffic."
    },
    {
      title: "Boost Brand Recognition",
      description: "Consistently sharing high-quality content can enhance brand awareness and loyalty among your audience."
    }
  ];

  return (
    <div className="guest-posting-benefits">
      <h2>Why Guest Posting Matters</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="write-for-us">
      <div className="intro">
        <h1>Write for Us!</h1>
        <p>Become a guest blogger and share your knowledge with our audience. Fill out the form below to get started.</p>
      </div>
      <div className="form-container">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *" 
            required 
          />
          {errors.name && <span className="error">{errors.name}</span>}
          
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *" 
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No. *" 
            required 
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
          
          <input 
            type="text" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *" 
            required 
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
          
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *" 
            required 
          />
          {errors.message && <span className="error">{errors.message}</span>}
          
          <button type="submit">Submit</button>
        </form>
        {submitted && <p className="success-message">Thank you for your submission! We'll get back to you soon.</p>}
      </div>
      <GuestPostingBenefits />
    </div>
  );
};

export default WriteForUs;
