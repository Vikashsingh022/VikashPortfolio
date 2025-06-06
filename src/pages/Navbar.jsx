import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-blue-600 dark:bg-blue-500 rounded-md p-1 mr-2"></div>
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Vikash Rajpoot
            </Link>
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200">Home</Link>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200">Projects</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200">About</Link>
          <Link to="/resume" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200">Resume</Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200">Contact</Link>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200" onClick={toggleMenu}>Home</Link>
            <Link to="/projects" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200" onClick={toggleMenu}>Projects</Link>
            <Link to="/about" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200" onClick={toggleMenu}>About</Link>
            <Link to="/resume" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200" onClick={toggleMenu}>Resume</Link>
            <Link to="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 