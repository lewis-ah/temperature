import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

// Import logo images
import appleLogo from '../assets/apple.png';
import googleLogo from '../assets/google.png';
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import jpmorganLogo from '../assets/jpmorgan.png';
import goldmansachsLogo from '../assets/goldmansachs.png';
import teslaLogo from '../assets/tesla.png';
import ibmLogo from '../assets/ibm.png';

// Import social media icons
import xIcon from '../assets/x.png';
import discordIcon from '../assets/discord.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import youtubeIcon from '../assets/youtube.png';
import telegramIcon from '../assets/telegram.png';

export default function Footer() {
  const footerSections = [
    {
      title: 'Learn',
      links: [
        { name: 'What is Smart Home?', path: '/learn/smart-home' },
        { name: 'IoT Basics', path: '/learn/iot' },
        { name: 'Home Automation', path: '/learn/automation' },
        { name: 'Energy Management', path: '/learn/energy' },
        { name: 'Security Guide', path: '/learn/security' },
        { name: 'Getting Started', path: '/learn/getting-started' }
      ]
    },
    {
      title: 'Use',
      links: [
        { name: 'Find Devices', path: '/devices' },
        { name: 'Setup Guide', path: '/setup' },
        { name: 'Mobile App', path: '/app' },
        { name: 'Voice Control', path: '/voice' },
        { name: 'Automation Rules', path: '/automation' },
        { name: 'Energy Monitor', path: '/energy' }
      ]
    },
    {
      title: 'Build',
      links: [
        { name: 'Developer Hub', path: '/developers' },
        { name: 'API Documentation', path: '/docs/api' },
        { name: 'SDK Download', path: '/sdk' },
        { name: 'Tutorials', path: '/tutorials' },
        { name: 'Community', path: '/community' },
        { name: 'Support', path: '/support' }
      ]
    },
    {
      title: 'Participate',
      links: [
        { name: 'Community Forum', path: '/forum' },
        { name: 'Events', path: '/events' },
        { name: 'Newsletter', path: '/newsletter' },
        { name: 'Beta Program', path: '/beta' },
        { name: 'Bug Reports', path: '/bugs' },
        { name: 'Feature Requests', path: '/features' }
      ]
    }
  ];

 const trustedCompanies = [
    { name: 'Google', logo: googleLogo, description: 'Technology Partner' },
    { name: 'Microsoft', logo: microsoftLogo, description: 'Cloud Infrastructure' },
    { name: 'Amazon', logo: amazonLogo, description: 'IoT Platform' },
    { name: 'Apple', logo: appleLogo, description: 'HomeKit Integration' },
    { name: 'Goldman Sachs', logo: goldmansachsLogo, description: 'Financial Solutions' },
    { name: 'JP Morgan', logo: jpmorganLogo, description: 'Investment Partner' },
    { name: 'Tesla', logo: teslaLogo, description: 'Energy Systems' },
    { name: 'IBM', logo: ibmLogo, description: 'AI & Analytics' }
  ];

  const socialLinks = [
    { name: 'X (Twitter)', icon: xIcon, url: 'https://twitter.com' },
    { name: 'Discord', icon: discordIcon, url: 'https://discord.com' },
    { name: 'GitHub', icon: githubIcon, url: 'https://github.com' },
    { name: 'LinkedIn', icon: linkedinIcon, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: youtubeIcon, url: 'https://youtube.com' },
    { name: 'Telegram', icon: telegramIcon, url: 'https://telegram.org' }
  ];

  return (
    <footer className="footer">
      {/* Trusted Companies Section */}
      <section className="trusted-companies">
        <div className="footer-container">
          <div className="companies-header">
            <h3>Dipercaya oleh perusahaan terkemuka:</h3>
            <p>Akademi Smart Home bekerja sama dengan pemimpin industri global untuk memberikan solusi terbaik</p>
          </div>
          <div className="companies-grid">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="company-card">
                <div className="company-logo">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="company-logo-img"
                  />
                </div>
                <div className="company-info">
                  <h4>{company.name}</h4>
                  <p>{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="logo-container">
                  <Logo size={40} className="logo-icon" />
                  <div className="logo-text">
                    <span className="logo-main">Akademi Smart Home</span>
                    <span className="logo-sub">Smart Future</span>
                  </div>
                </div>
              </Link>
              <p className="brand-description">
                Platform smart home terdepan yang mengintegrasikan teknologi blockchain dan IoT untuk menciptakan rumah masa depan yang cerdas, aman, dan efisien.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={`${social.name} icon`}
                      className="social-icon-img"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; 2025 Akademi Smart Home. All rights reserved.</p>
              <div className="legal-links">
                <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                <Link to="/terms" className="legal-link">Terms of Use</Link>
                <Link to="/cookies" className="legal-link">Cookie Policy</Link>
                <Link to="/contact" className="legal-link">Contact</Link>
              </div>
            </div>
            <div className="footer-info">
              <p>Website terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
              <div className="footer-badges">
                <span className="badge">🔒 SSL Secured</span>
                <span className="badge">🌿 Carbon Neutral</span>
                <span className="badge">⚡ High Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
