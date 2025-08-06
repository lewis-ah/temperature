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
              <div key={index} className={`value-card scroll-reveal-stagger scroll-reveal-delay-${index + 1}`}>
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
              <div key={index} className={`tech-card scroll-reveal-scale scroll-reveal-delay-${index + 1}`}>
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
              <div key={index} className={`team-card scroll-reveal-bounce scroll-reveal-delay-${index + 1}`}>
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
          <div className="hero-badge scroll-reveal-fast">
            🌟 Tentang Platform Smart Home Terdepan di Indonesia
          </div>
          <h1 className="hero-title scroll-reveal">
            Tentang <span className="gradient-text">Kami</span>
          </h1>
          <p className="hero-subtitle scroll-reveal scroll-reveal-delay-1">
            Kami adalah perusahaan teknologi smart home yang menggunakan AI tingkat tinggi untuk 
            memberikan solusi rumah pintar terbaik. Dengan jangkauan global dan distribusi regional 
            yang kuat, kami telah menjadi market unggulan di bidang smart home.
          </p>
          <div className="hero-cta scroll-reveal scroll-reveal-delay-2">
            <button className="primary-btn">Pelajari Lebih Lanjut</button>
            <button className="secondary-btn">Hubungi Kami</button>
          </div>
        </div>
        <div className="hero-visual scroll-reveal-right scroll-reveal-delay-3">
          <div className="floating-elements">
            <div className="floating-card scroll-reveal-zoom scroll-reveal-delay-1">🏠</div>
            <div className="floating-card scroll-reveal-zoom scroll-reveal-delay-2">🤖</div>
            <div className="floating-card scroll-reveal-zoom scroll-reveal-delay-3">⚡</div>
            <div className="floating-card scroll-reveal-zoom scroll-reveal-delay-4">🔒</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card scroll-reveal-stagger scroll-reveal-delay-1">
            <div className="stat-number">{animatedStats.customers.toLocaleString()}+</div>
            <div className="stat-label">Rumah Terpasang</div>
          </div>
          <div className="stat-card scroll-reveal-stagger scroll-reveal-delay-2">
            <div className="stat-number">{animatedStats.countries}+</div>
            <div className="stat-label">Negara</div>
          </div>
          <div className="stat-card scroll-reveal-stagger scroll-reveal-delay-3">
            <div className="stat-number">{animatedStats.satisfaction}%</div>
            <div className="stat-label">Kepuasan Pelanggan</div>
          </div>
          <div className="stat-card scroll-reveal-stagger scroll-reveal-delay-4">
            <div className="stat-number">{animatedStats.years}+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section - New from smart-home-landing2.vercel.app */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header scroll-reveal">
            <div className="timeline-badge">📅 JOURNEY</div>
            <h2 className="timeline-title">Perjalanan Inovasi Kami</h2>
            <p className="timeline-subtitle">
              Dari ide sederhana hingga menjadi pionir teknologi smart home di Indonesia
            </p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-item scroll-reveal-left scroll-reveal-delay-1">
              <div className="timeline-marker">2020</div>
              <div className="timeline-content">
                <h3>🚀 Awal Mula</h3>
                <p>Dimulai dengan visi untuk membuat rumah lebih cerdas dan efisien. Tim kecil dengan passion besar untuk teknologi IoT.</p>
              </div>
            </div>
            
            <div className="timeline-item scroll-reveal-right scroll-reveal-delay-2">
              <div className="timeline-marker">2021</div>
              <div className="timeline-content">
                <h3>🔬 Research & Development</h3>
                <p>Mengembangkan prototipe pertama dan melakukan riset mendalam tentang kebutuhan smart home di Indonesia.</p>
              </div>
            </div>
            
            <div className="timeline-item scroll-reveal-left scroll-reveal-delay-3">
              <div className="timeline-marker">2022</div>
              <div className="timeline-content">
                <h3>🎯 Peluncuran Beta</h3>
                <p>Meluncurkan versi beta dengan 100 rumah pertama. Menerima feedback berharga dari early adopters.</p>
              </div>
            </div>
            
            <div className="timeline-item scroll-reveal-right scroll-reveal-delay-4">
              <div className="timeline-marker">2023</div>
              <div className="timeline-content">
                <h3>📈 Pertumbuhan Eksponensial</h3>
                <p>Mencapai 10,000+ rumah terhubung. Memperkenalkan fitur AI dan blockchain integration.</p>
              </div>
            </div>
            
            <div className="timeline-item scroll-reveal-left scroll-reveal-delay-5">
              <div className="timeline-marker">2024</div>
              <div className="timeline-content">
                <h3>🌟 Market Leader</h3>
                <p>Menjadi market leader smart home di Indonesia dengan 50,000+ rumah terhubung dan ekspansi ke 45+ negara.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase - New from smart-home-landing2.vercel.app */}
      <section className="features-showcase-section">
        <div className="container">
          <div className="features-showcase-header scroll-reveal">
            <div className="features-showcase-badge">⚡ FITUR UNGGULAN</div>
            <h2 className="features-showcase-title">Teknologi Terdepan untuk Rumah Anda</h2>
            <p className="features-showcase-subtitle">
              Kombinasi sempurna antara AI, IoT, dan blockchain untuk pengalaman smart home terbaik
            </p>
          </div>
          
          <div className="features-showcase-grid">
            <div className="feature-showcase-card scroll-reveal-scale scroll-reveal-delay-1">
              <div className="feature-showcase-icon">🤖</div>
              <h3>AI-Powered Automation</h3>
              <p>Sistem AI yang belajar dari kebiasaan Anda dan mengotomatisasi rutinitas harian untuk efisiensi maksimal.</p>
              <div className="feature-showcase-stats">
                <div className="feature-stat">
                  <span className="feature-stat-number">95%</span>
                  <span className="feature-stat-label">Akurasi</span>
                </div>
                <div className="feature-stat">
                  <span className="feature-stat-number">24/7</span>
                  <span className="feature-stat-label">Monitoring</span>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-card scroll-reveal-scale scroll-reveal-delay-2">
              <div className="feature-showcase-icon">🔗</div>
              <h3>Blockchain Security</h3>
              <p>Keamanan tingkat enterprise dengan teknologi blockchain untuk melindungi data dan privasi Anda.</p>
              <div className="feature-showcase-stats">
                <div className="feature-stat">
                  <span className="feature-stat-number">99.9%</span>
                  <span className="feature-stat-label">Uptime</span>
                </div>
                <div className="feature-stat">
                  <span className="feature-stat-number">256-bit</span>
                  <span className="feature-stat-label">Encryption</span>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-card scroll-reveal-scale scroll-reveal-delay-3">
              <div className="feature-showcase-icon">🌐</div>
              <h3>Global Connectivity</h3>
              <p>Konektivitas global dengan infrastruktur cloud terdistribusi untuk akses dari mana saja di dunia.</p>
              <div className="feature-showcase-stats">
                <div className="feature-stat">
                  <span className="feature-stat-number">45+</span>
                  <span className="feature-stat-label">Negara</span>
                </div>
                <div className="feature-stat">
                  <span className="feature-stat-number">&lt;1ms</span>
                  <span className="feature-stat-label">Latency</span>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-card scroll-reveal-scale scroll-reveal-delay-4">
              <div className="feature-showcase-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>Antarmuka mobile yang intuitif dan responsif untuk kontrol rumah dari smartphone Anda.</p>
              <div className="feature-showcase-stats">
                <div className="feature-stat">
                  <span className="feature-stat-number">iOS</span>
                  <span className="feature-stat-label">Android</span>
                </div>
                <div className="feature-stat">
                  <span className="feature-stat-number">4.8★</span>
                  <span className="feature-stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials - New from smart-home-landing2.vercel.app */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header scroll-reveal">
            <div className="testimonials-badge">💬 TESTIMONI</div>
            <h2 className="testimonials-title">Apa Kata Pelanggan Kami</h2>
            <p className="testimonials-subtitle">
              Pengalaman nyata dari ribuan keluarga yang telah merasakan kemudahan smart home
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card scroll-reveal-bounce scroll-reveal-delay-1">
              <div className="testimonial-content">
                <p>"Sistem smart home ini benar-benar mengubah cara kami hidup. Sekarang rumah kami lebih aman, efisien, dan nyaman."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍👩‍👧‍👦</div>
                <div className="testimonial-info">
                  <h4>Budi Santoso</h4>
                  <span>Keluarga Jakarta</span>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card scroll-reveal-bounce scroll-reveal-delay-2">
              <div className="testimonial-content">
                <p>"AI assistant-nya sangat pintar! Belajar dengan cepat dan sekarang benar-benar memahami kebiasaan keluarga kami."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩‍💼</div>
                <div className="testimonial-info">
                  <h4>Sari Dewi</h4>
                  <span>Profesional Surabaya</span>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card scroll-reveal-bounce scroll-reveal-delay-3">
              <div className="testimonial-content">
                <p>"Tagihan listrik turun 30% setelah menggunakan sistem ini. Investasi yang sangat worth it untuk jangka panjang."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍💻</div>
                <div className="testimonial-info">
                  <h4>Rizki Pratama</h4>
                  <span>Tech Entrepreneur</span>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs-header scroll-reveal">
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
          <div className="tab-content-container scroll-reveal scroll-reveal-delay-1">
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
        <div className="cta-content scroll-reveal">
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
