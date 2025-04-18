'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import { motion } from "motion/react"

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="text-white text-3xl font-extrabold tracking-wide drop-shadow-lg hover:scale-105 transition duration-300">
            <button onClick={() => handlePageChange('home')}>MyApp</button>
          </div>

          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li>
              <motion.button
                onClick={() => handlePageChange('home')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                Home
              </motion.button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('about')}
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('services')}
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('contact')}
                className="text-white hover:text-yellow-100 transition duration-200 hover:underline underline-offset-4"
              >
                Contact
              </button>
            </li>
          </ul>

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
          {activePage === 'home' && <HomePage />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'services' && <ServicesPage />}
          {activePage === 'contact' && <ContactPage />}
        </div>
      </section>
    </>
  );
};

export default Navbar;
