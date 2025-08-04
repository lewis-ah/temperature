import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '💡',
      title: 'Kontrol Pencahayaan',
      description: 'Atur pencahayaan sesuai suasana hati Anda dengan sekali sentuhan.',
      gradient: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
      bgColor: 'rgba(255, 203, 110, 0.1)'
    },
    {
      icon: '🛡️',
      title: 'Keamanan Canggih',
      description: 'Pantau rumah Anda 24/7 dengan sistem keamanan terintegrasi.',
      gradient: 'linear-gradient(135deg, #00b894, #00cec9)',
      bgColor: 'rgba(0, 206, 201, 0.1)'
    },
    {
      icon: '⚡',
      title: 'Manajemen Energi',
      description: 'Monitor dan optimalisasi penggunaan energi untuk menghemat biaya belanja.',
      gradient: 'linear-gradient(135deg, #fdcb6e, #e17055)',
      bgColor: 'rgba(225, 112, 85, 0.1)'
    },
    {
      icon: '🔧',
      title: 'Otomatisasi Cerdas',
      description: 'Buat skenario otomatis untuk menyesuaikan perangkat sesuai jadwal.',
      gradient: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
      bgColor: 'rgba(108, 92, 231, 0.1)'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Rumah Terhubung' },
    { number: '99.9%', label: 'Uptime Terjamin' },
    { number: '30%', label: 'Penghematan Energi' },
    { number: '24/7', label: 'Dukungan Teknis' }
  ];

  return (
    <div className="home-container">
      {/* Animated Background */}
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
          <div className="hero-badge">
            ✨ Platform Smart Home Terdepan di Indonesia
          </div>
          <h1 className="hero-title">
            Masa Depan <span className="gradient-text">Rumah Anda</span>,<br />
            Hari Ini
          </h1>
          <p className="hero-subtitle">
            Sistem smart home yang cerdas, aman, dan terintegrasi penuh untuk gaya hidup yang<br />
            lebih mudah dan efisien. Kendalikan semuanya hanya dengan satu sentuhan.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">
              <span>Mulai Petualangan Anda</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-button secondary">
              <span>Lihat Demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="central-hub">
            <div className="hub-core">
              <div className="pulse-ring"></div>
              <div className="hub-icon">🏠</div>
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
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">
            Fitur-Fitur <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="section-subtitle">
            Teknologi terdepan untuk rumah masa depan Anda
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${activeFeature === index ? 'highlighted' : ''}`}
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

      {/* Innovation Section */}
      <section className="innovation-section">
        <div className="innovation-content">
          <div className="section-header">
            <h2 className="section-title">
              Inovasi <span className="gradient-text">Terdepan</span>
            </h2>
            <p className="section-subtitle">
              Teknologi blockchain dan IoT terintegrasi untuk masa depan yang lebih baik
            </p>
          </div>
          <div className="innovation-grid">
            <div className="innovation-card">
              <div className="innovation-icon">🔗</div>
              <h3>Blockchain Integration</h3>
              <p>Keamanan tingkat enterprise dengan teknologi blockchain terdesentralisasi untuk melindungi data IoT Anda.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🤖</div>
              <h3>AI-Powered Analytics</h3>
              <p>Analisis cerdas berbasis AI untuk optimasi konsumsi energi dan prediksi maintenance perangkat.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">⚡</div>
              <h3>Real-time Processing</h3>
              <p>Pemrosesan data real-time dengan latensi ultra-rendah untuk respons sistem yang instantaneous.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🌐</div>
              <h3>Global Connectivity</h3>
              <p>Konektivitas global melalui infrastruktur cloud terdistribusi di seluruh dunia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2>Siap untuk Mengubah Rumah Anda?</h2>
          <p>Bergabunglah dengan ribuan keluarga yang telah merasakan kemudahan smart home.</p>
          <button className="cta-button primary large">
            <span>Mulai Konsultasi Gratis</span>
            <div className="button-glow"></div>
          </button>
        </div>
        <div className="cta-visual">
          <div className="floating-card card-1">
            <div className="card-icon">📱</div>
            <div className="card-text">Mobile Control</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎭</div>
            <div className="card-text">Scene Mode</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🔒</div>
            <div className="card-text">Secure Lock</div>
          </div>
        </div>
      </section>
    </div>
  );
}
