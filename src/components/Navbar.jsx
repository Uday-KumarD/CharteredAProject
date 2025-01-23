import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <NavLink to="/">
          <h1 className="text-2xl font-bold text-blue-800 hover:text-blue-600">CharteredInfo</h1>
        </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-blue-800 hover:text-black font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-blue-800 hover:text-black font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              Accounts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-blue-800 hover:text-black font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-blue-800 hover:text-black font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-blue-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={toggleMenu}
            >
              Accounts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
