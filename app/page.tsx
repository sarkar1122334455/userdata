'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const Navbar = () => {
  // State to store the current page component
  const [activePage, setActivePage] = useState('home');

  // Function to handle active page change
  const handlePageChange = (page:any) => {
    setActivePage(page);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="text-white text-3xl font-extrabold tracking-wide drop-shadow-lg hover:scale-105 transition duration-300">
            <Link href="/">MyApp</Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
                onClick={() => handlePageChange('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
                onClick={() => handlePageChange('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform"
            />
            <Link href="/api/profile">
              <span className="text-white font-semibold hover:text-gray-100 transition">
                John Doe
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          {/* Conditionally Render HomePage or AboutPage based on active link */}
          {activePage === 'home' && <HomePage />}
          {activePage === 'about' && <AboutPage />}
        </div>
      </section>
    </>
  );
};

export default Navbar;
