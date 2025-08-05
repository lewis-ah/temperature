import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import CustomerReviews from '../components/CustomerReviews';
import GlobalReach from '../components/GlobalReach';
import './About.css';

export default function About() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    countries: 0,
    satisfaction: 0,
    years: 0
  });

  const stats = {
    customers: 50000,
    countries: 45,
    satisfaction: 99,
    years: 8
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          customers: Math.floor(stats.customers * progress),
          countries: Math.floor(stats.countries * progress),
          satisfaction: Math.floor(stats.satisfaction * progress),
          years: Math.floor(stats.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'mission', label: 'Misi & Visi', icon: '🎯' },
    { id: 'values', label: 'Nilai Perusahaan', icon: '💎' },
    { id: 'technology', label: 'Teknologi AI', icon: '🤖' },
    { id: 'team', label: 'Tim Kami', icon: '👥' }
  ];

  const tabContent = {
    mission: {
      title: 'Misi & Visi Kami',
      content: (
        <div className="tab-content">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Misi</h3>
              <p>Menyediakan solusi smart home yang cerdas, aman, dan terintegrasi dengan teknologi AI tingkat tinggi untuk meningkatkan kualitas hidup dan efisiensi energi di rumah-rumah di seluruh dunia.</p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🌟</div>
              <h3>Visi</h3>
              <p>Menjadi platform smart home terdepan di dunia yang powered by AI, dengan jangkauan global yang melayani jutaan rumah dan menjadi market unggulan dalam transformasi digital hunian modern.</p>
            </div>
          </div>
        </div>
      )
    },
    values: {
      title: 'Nilai-Nilai Perusahaan',
      content: (
        <div className="tab-content">
          <div className="values-grid">
            {[
              { icon: '🚀', title: 'Inovasi Berkelanjutan', desc: 'Terus mengembangkan teknologi AI terbaru untuk memberikan solusi smart home yang selalu terdepan.' },
              { icon: '🤝', title: 'Kepercayaan Pelanggan', desc: 'Membangun hubungan jangka panjang dengan lebih dari 50,000 rumah di seluruh dunia.' },
              { icon: '🌍', title: 'Jangkauan Global', desc: 'Melayani 45+ negara dengan distribusi regional yang kuat dan partner lokal terpercaya.' },
              { icon: '🏆', title: 'Sertifikasi Internasional', desc: 'Memenuhi standar keamanan dan kualitas internasional dengan berbagai sertifikasi terkemuka.' },
              { icon: '🔒', title: 'Keamanan & Privasi', desc: 'Mengutamakan keamanan data dan privasi pengguna dengan teknologi enkripsi tingkat tinggi.' },
              { icon: '♻️', title: 'Keberlanjutan', desc: 'Berkomitmen terhadap lingkungan dengan solusi smart home yang ramah lingkungan.' }
            ].map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    technology: {
      title: 'Teknologi AI Tingkat Tinggi',
      content: (
        <div className="tab-content">
          <div className="tech-grid">
            {[
              { icon: '🧠', name: 'Claude Sonnet 3.5', desc: 'AI terdepan untuk natural language processing dan adaptive learning dengan akurasi 99.2%.', features: ['Natural Language Processing', 'Adaptive Learning', '99.2% Accuracy'] },
              { icon: '⚡', name: 'GPT-4 Turbo', desc: 'Pemrosesan real-time dengan response time kurang dari 100ms untuk kontrol instantaneous.', features: ['Real-time Processing', '< 100ms Response', 'Instant Control'] },
              { icon: '💎', name: 'Gemini Pro', desc: 'Multi-modal AI untuk analisis visual dan audio yang komprehensif dalam sistem smart home.', features: ['Multi-modal AI', 'Visual Analysis', 'Audio Processing'] },
              { icon: '🛡️', name: 'Security Intelligence', desc: 'AI-powered security dengan tingkat akurasi 99.5% untuk perlindungan rumah yang maksimal.', features: ['AI Security', '99.5% Accuracy', 'Real-time Protection'] }
            ].map((tech, index) => (
              <div key={index} className="tech-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="tech-icon">{tech.icon}</div>
                <h4>{tech.name}</h4>
                <p>{tech.desc}</p>
                <ul className="tech-features">
                  {tech.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    team: {
      title: 'Tim Kami',
      content: (
        <div className="tab-content">
          <div className="team-grid">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Technology Officer', avatar: '👩‍💻', desc: 'PhD in AI dari Stanford, 15+ tahun pengalaman dalam machine learning dan smart home technology.' },
              { name: 'Ahmad Rahman', role: 'Head of Product', avatar: '👨‍💼', desc: '10+ tahun pengalaman dalam product development, fokus pada user experience dan market fit.' },
              { name: 'Maria Garcia', role: 'VP of Engineering', avatar: '👩‍🔬', desc: 'Expert dalam scalable architecture dan cloud infrastructure untuk smart home solutions.' },
              { name: 'David Kim', role: 'Head of AI Research', avatar: '👨‍🔬', desc: 'Leading research dalam AI ethics dan responsible AI development untuk smart home applications.' }
            ].map((member, index) => (
              <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="member-avatar">{member.avatar}</div>
                <h4>{member.name}</h4>
                <span className="member-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            🌟 Tentang Platform Smart Home Terdepan di Indonesia
          </div>
          <h1 className="hero-title">
            Tentang <span className="gradient-text">Kami</span>
          </h1>
          <p className="hero-subtitle">
            Kami adalah perusahaan teknologi smart home yang menggunakan AI tingkat tinggi untuk 
            memberikan solusi rumah pintar terbaik. Dengan jangkauan global dan distribusi regional 
            yang kuat, kami telah menjadi market unggulan di bidang smart home.
          </p>
          <div className="hero-cta">
            <button className="primary-btn">Pelajari Lebih Lanjut</button>
            <button className="secondary-btn">Hubungi Kami</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card">🏠</div>
            <div className="floating-card">🤖</div>
            <div className="floating-card">⚡</div>
            <div className="floating-card">🔒</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{animatedStats.customers.toLocaleString()}+</div>
            <div className="stat-label">Rumah Terpasang</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedStats.countries}+</div>
            <div className="stat-label">Negara</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedStats.satisfaction}%</div>
            <div className="stat-label">Kepuasan Pelanggan</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedStats.years}+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="tab-content-container">
            <h2>{tabContent[activeTab].title}</h2>
            {tabContent[activeTab].content}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Global Reach Section */}
      <GlobalReach />

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Siap Memulai Perjalanan Smart Home Anda?</h2>
          <p>Bergabunglah dengan ribuan keluarga yang telah merasakan kemudahan dan kenyamanan smart home.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Mulai Sekarang</button>
            <button className="secondary-btn">Demo Gratis</button>
          </div>
        </div>
      </section>
    </div>
  );
}
