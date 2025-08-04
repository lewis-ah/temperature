import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '📚' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'Temperature', path: '/temperature', icon: '🌡️' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <Logo size={40} className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">Akademi Crypto</span>
              <span className="logo-sub">Smart Future</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="link-icon">{item.icon}</span>
              <span className="link-text">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button">
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="link-icon">{item.icon}</span>
              <span className="link-text">{item.name}</span>
            </Link>
          ))}
          <div className="mobile-cta">
            <button className="cta-button mobile">
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
