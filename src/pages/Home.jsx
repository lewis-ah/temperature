import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🌿',
      title: 'Pengelolaan Taman Pintar',
      description: 'Rawat taman dan tanaman Anda secara otomatis untuk lingkungan yang sehat.',
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
      bgColor: 'rgba(39, 174, 96, 0.1)'
    },
    {
      icon: '🔋',
      title: 'Energi Terbarukan',
      description: 'Gunakan energi surya dan pantau penghematan daya secara real-time.',
      gradient: 'linear-gradient(135deg, #27ae60, #16a085)',
      bgColor: 'rgba(22, 160, 133, 0.1)'
    },
    {
      icon: '💧',
      title: 'Penghematan Air',
      description: 'Monitor penggunaan air dan deteksi kebocoran secara otomatis.',
      gradient: 'linear-gradient(135deg, #1abc9c, #16a085)',
      bgColor: 'rgba(26, 188, 156, 0.1)'
    },
    {
      icon: '♻️',
      title: 'Daur Ulang Otomatis',
      description: 'Sistem pemilahan sampah pintar untuk gaya hidup berkelanjutan.',
      gradient: 'linear-gradient(135deg, #2ecc71, #1abc9c)',
      bgColor: 'rgba(46, 204, 113, 0.1)'
    }
  ];

  const stats = [
    { number: '5K+', label: 'Rumah Ramah Lingkungan' },
    { number: '95%', label: 'Penghematan Energi Tahunan' },
    { number: '40%', label: 'Efisiensi Penggunaan Air' },
    { number: '24/7', label: 'Monitoring Lingkungan' }
  ];

  return (
    <div className="home-container">
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge scroll-reveal-fast">
            🌱 Platform Smart Eco Living Terdepan
          </div>
          <h1 className="hero-title scroll-reveal">
            Masa Depan <span className="gradient-text">Hidup Hijau</span>,<br />
            Dimulai Sekarang
          </h1>
          <p className="hero-subtitle scroll-reveal scroll-reveal-delay-1">
            Solusi rumah pintar berbasis energi terbarukan dan teknologi ramah lingkungan.<br />
            Hemat energi, air, dan waktu — demi bumi yang lebih baik.
          </p>

          {/* Moving Icons Animation */}
          <div className="moving-house-animation">
            <div className="house-container">
              <div className="house house-1">🏡</div>
              <div className="house house-2">🏡</div>
              <div className="house house-3">🏡</div>
              <div className="house house-4">🏡</div>
              <div className="house house-5">🏡</div>
            </div>
            <div className="connection-network">
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
              <div className="connection-line line-4"></div>
              <div className="connection-line line-5"></div>
            </div>
            <div className="floating-devices">
              <div className="device device-1">🌿</div>
              <div className="device device-2">💧</div>
              <div className="device device-3">🔋</div>
              <div className="device device-4">📱</div>
              <div className="device device-5">♻️</div>
              <div className="device device-6">☀️</div>
            </div>
          </div>

          <div className="hero-buttons scroll-reveal scroll-reveal-delay-2">
            <button className="cta-button primary">
              <span>Mulai Hidup Hijau</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-button secondary">
              <span>Lihat Solusi</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-visual scroll-reveal-right scroll-reveal-delay-3">
          <div className="central-hub">
            <div className="hub-core">
              <div className="pulse-ring"></div>
              <div className="hub-icon">🌎</div>
            </div>
            <div className="connecting-lines">
              {features.map((_, index) => (
                <div 
                  key={index}
                  className={`connection-line line-${index + 1} ${activeFeature === index ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="satellite-nodes">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`satellite-node node-${index + 1} ${activeFeature === index ? 'active' : ''}`}
                  style={{ background: feature.gradient }}
                >
                  <span>{feature.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card scroll-reveal-stagger scroll-reveal-delay-${index + 1}`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">
            Fitur <span className="gradient-text">Hijau Unggulan</span>
          </h2>
          <p className="section-subtitle">
            Inovasi ramah lingkungan untuk rumah masa depan
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card scroll-reveal-scale scroll-reveal-delay-${index + 1} ${activeFeature === index ? 'highlighted' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="feature-header">
                <div 
                  className="feature-icon"
                  style={{ background: feature.gradient }}
                >
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
              <div className="feature-footer">
                <button className="learn-more-btn">
                  Pelajari Lebih Lanjut
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div 
                className="feature-bg"
                style={{ background: feature.bgColor }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
