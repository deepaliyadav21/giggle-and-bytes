"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  FaHome, 
  FaBlog, 
  FaImages, 
  FaPhone, 
  FaPen, 
  FaLock, 
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaArrowUp
} from 'react-icons/fa';

export default function Navbar() {
  const [language, setLanguage] = useState("english");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Header with Writer Awards */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <button className="bg-secondary text-white px-3 py-1 rounded text-xs font-bold">
                Writer of the Month
              </button>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                A
              </div>
              <Link href="/user/avinash" className="text-gray-600 text-sm hover:text-primary">
                Avinash
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-secondary text-white px-3 py-1 rounded text-xs font-bold">
                Writer of the Week
              </button>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                A
              </div>
              <Link href="/user/avinash" className="text-gray-600 text-sm hover:text-primary">
                Avinash
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/logo.webp"
                  alt="Letsdiskuss Logo"
                  width={80}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/" icon={<FaHome />} text="Home" />
              <NavLink href="/blog" icon={<FaBlog />} text="Blogs" />
              <NavLink href="/gallery" icon={<FaImages />} text="Gallery" />
              <NavLink href="/contact" icon={<FaPhone />} text="Contact Us" />
              <NavLink href="/write-for-us" icon={<FaPen />} text="Write For Us" />
            </div>

            {/* Language & Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <span className="text-sm">Language</span>
                <Link
                  href="https://hi.letsdiskuss.com"
                  className="flex items-center px-3 py-1 rounded-full text-sm hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <div className="w-2 h-2 border border-white rounded-full mr-2"></div>
                  हिंदी
                </Link>
                <button className="flex items-center px-3 py-1 rounded-full text-sm bg-secondary font-bold">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  English
                </button>
              </div>

              {/* Auth Buttons */}
              {!isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/signin"
                    className="flex items-center px-4 py-2 text-sm hover:bg-white hover:bg-opacity-10 rounded transition-colors"
                  >
                    <FaLock className="mr-2" />
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center px-4 py-2 text-sm hover:bg-white hover:bg-opacity-10 rounded transition-colors"
                  >
                    <FaUserPlus className="mr-2" />
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-4 py-2 text-sm hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <FaUser className="mr-2" />
                    Profile
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-white hover:bg-opacity-10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white border-opacity-20">
              <div className="flex flex-col space-y-2">
                <MobileNavLink href="/" icon={<FaHome />} text="Home" />
                <MobileNavLink href="/blog" icon={<FaBlog />} text="Blogs" />
                <MobileNavLink href="/gallery" icon={<FaImages />} text="Gallery" />
                <MobileNavLink href="/contact" icon={<FaPhone />} text="Contact Us" />
                <MobileNavLink href="/write-for-us" icon={<FaPen />} text="Write For Us" />
                
                <div className="border-t border-white border-opacity-20 pt-2 mt-2">
                  {!isLoggedIn ? (
                    <>
                      <MobileNavLink href="/signin" icon={<FaLock />} text="Login" />
                      <MobileNavLink href="/signup" icon={<FaUserPlus />} text="Register" />
                    </>
                  ) : (
                    <>
                      <MobileNavLink href="/profile" icon={<FaUser />} text="Profile" />
                      <MobileNavLink href="/logout" icon={<FaSignOutAlt />} text="Logout" />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-10 rounded transition-colors"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-10 rounded transition-colors"
    >
      <span className="mr-3">{icon}</span>
      {text}
    </Link>
  );
}