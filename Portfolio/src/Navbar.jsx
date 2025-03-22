import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="bg-gradient-to-b from-black to-[#0a192f] py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <h1 className="font-bold text-3xl text-white">
            <span className="text-yellow-400">Purushottam</span> Portfolio
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <ul
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
          >
            <NavItem
              to="/"
              active={location.pathname === '/'}
              onClick={() => handleScroll('profile')}
            >
              Home
            </NavItem>
            <NavItem
              to="/about"
              active={location.pathname === '/about'}
              onClick={() => handleScroll('about')}
            >
              About
            </NavItem>
            <NavItem
              to="/technologies"
              active={location.pathname === '/technologies'}
              onClick={() => handleScroll('technologies')}
            >
              Technologies
            </NavItem>
            <NavItem
              to="/projects"
              active={location.pathname === '/projects'}
              onClick={() => handleScroll('projects')}
            >
              Projects
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, active, onClick, children }) {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`relative text-lg font-medium text-gray-300 hover:text-white transition-colors ${
          active ? 'text-yellow-400' : ''
        }`}
      >
        {children}
        {/* Underline effect on hover */}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
            active ? 'w-full' : 'w-0'
          } hover:w-full`}
        ></span>
      </Link>
    </li>
  );
}

export default Navbar;