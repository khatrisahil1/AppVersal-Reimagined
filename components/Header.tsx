
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
    const { isDarkMode, theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full text-av-medium-gray hover:text-av-text-dark dark:hover:text-white transition-colors duration-300"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            data-tooltip={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
    );
};

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/snapshot', name: 'Snapshot' },
    { path: '/case-studies', name: 'Case Studies' },
    { path: '/widgets', name: 'Widgets' },
    { path: '/packages', name: 'Pricing' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-av-dark-slate/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-av-purple to-av-sky-blue">
          AppVersal
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-av-purple dark:hover:text-av-cyan ${isActive ? 'text-av-purple dark:text-av-cyan' : 'text-av-text-dark-secondary dark:text-av-medium-gray'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href="#/packages" className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-av-purple to-av-violet-blue rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;