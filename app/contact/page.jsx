"use client";

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import './ContactPage.css'; // Import the external CSS file

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form className="form">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="tel" placeholder="Mobile No. *" />
            <input type="text" placeholder="Subject *" />
            <textarea placeholder="Your Message *"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h2>Write To Us</h2>

          <div className="info-section">
            <h3>Advertise with Us</h3>
            <p>Want to advertise with us?</p>
            <p>Or find out how else we can work with your brand?</p>
            <p>
              Let’s talk! Connect at <a href="mailto:submission@letsdiskuss.com">submission@letsdiskuss.com</a> or call <a href="tel:+918800259785">+91 88002 59785</a>
            </p>
          </div>

          <div className="info-section">
            <h3>To Become our Blogging Partner</h3>
            <p>
              Interested in partnering with us? Write to <a href="mailto:contact@letsdiskuss.com">contact@letsdiskuss.com</a>
            </p>
          </div>

          <div className="social-links">
            <h3>Social Links :</h3>
            <div className="icons">
              <a href="https://twitter.com/Letsdiskuss" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.facebook.com/Letsdiskuss-315820455578889/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/letsdiskuss/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UC8P36SywfXz8FI0ioSzJuew/videos" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/lets-diskuss/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
