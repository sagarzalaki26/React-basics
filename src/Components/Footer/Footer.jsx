import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">MyWebsite</h2>
          <p className="text-sm">Bringing you amazing services with love & care. Stay connected with us!</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@mywebsite.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            {/* Placeholder icons — replace with actual ones if using an icon lib */}
            <a href="#" className="hover:text-gray-300">🌐</a>
            <a href="#" className="hover:text-gray-300">📘</a>
            <a href="#" className="hover:text-gray-300">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-white/20">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
