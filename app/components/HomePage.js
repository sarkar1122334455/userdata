'use client'
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">YourApp</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Build stunning web experiences effortlessly. Fast. Clean. Responsive.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
        {[
          { title: "Fast Performance", desc: "Optimized for speed and smooth experience." },
          { title: "Responsive Design", desc: "Looks great on all screen sizes." },
          { title: "Easy Integration", desc: "Plug in APIs and scale with ease." },
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourApp. All rights reserved.
      </footer>
    </main>
  );
}
