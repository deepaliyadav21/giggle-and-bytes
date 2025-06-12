import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/logo.webp"
                alt="Letsdiskuss Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join the conversation, share your thoughts, and connect with a community of thinkers and writers.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/Letsdiskuss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/Letsdiskuss-315820455578889/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/letsdiskuss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UC8P36SywfXz8FI0ioSzJuew/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/lets-diskuss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/write-for-us" className="text-gray-300 hover:text-white transition-colors">
                  Write For Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400" />
                <a 
                  href="mailto:contact@letsdiskuss.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@letsdiskuss.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-gray-400" />
                <a 
                  href="tel:+918800259785" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +91 88002 59785
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-gray-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Let's Diskuss. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}