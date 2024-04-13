import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./App.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-b from-yellow-900 to-blue-700 py-4 text-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
        <h1 className="font-bold text-4xl gredient-text leading-tight tracking-tight text-white">
  Purushottam Portfolio
</h1>

          <button className="block md:hidden focus:outline-none">
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul className="flex gap-5 text-base mt-4 md:mt-0 md:flex md:items-center">
            <NavItem to="/" active={location.pathname === '/'}>Home</NavItem>
            <NavItem to="/about" active={location.pathname === '/about'}>About</NavItem>
            <NavItem to="/technologies" active={location.pathname === '/technologies'}>Technologies</NavItem>
            <NavItem to="/projects" active={location.pathname === '/projects'}>Projects</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, active, children }) {
  return (
    <li>
      <Link to={to} className={`text-gray-300 hover:text-white ${active ? 'text-yellow-400' : ''}`}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
