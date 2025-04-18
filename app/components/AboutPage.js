'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100 min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10 text-gray-800 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Welcome to <strong>MyApp</strong> – your destination for innovative and elegant web experiences. We’re a passionate team of developers, designers, and dreamers focused on creating visually stunning and performance-driven applications.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Our journey started with a simple goal: <em>make the web a better place</em>. Whether it's crafting intuitive interfaces, optimizing user journeys, or integrating smart technologies, we pour love and creativity into every pixel and line of code.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Responsive and mobile-first design</li>
            <li>Next.js-based full stack web development</li>
            <li>API integration and data handling</li>
            <li>JWT-based authentication & security</li>
            <li>UI/UX design with Tailwind CSS and modern tools</li>
          </ul>
        </div>

        <div className="mt-10 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
