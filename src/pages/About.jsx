import React from 'react';
import CustomerReviews from '../components/CustomerReviews';
import GlobalReach from '../components/GlobalReach';
import './Home.css'; // Using the same CSS for styling consistency

export default function About() {
  return (
    <div className="home-container">
      {/* About Header Section */}
      <section className="hero-section">
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
        </div>
      </section>

      {/* Innovation Section - AI Technology */}
      <section className="innovation-section">
        <div className="innovation-content">
          <div className="section-header">
            <h2 className="section-title">
              Teknologi <span className="gradient-text">AI Tingkat Tinggi</span>
            </h2>
            <p className="section-subtitle">
              Powered by AI terdepan dunia untuk memberikan pengalaman smart home yang tak tertandingi
            </p>
          </div>
          <div className="innovation-grid">
            <div className="innovation-card">
              <div className="innovation-icon">🧠</div>
              <h3>Claude Sonnet 3.5</h3>
              <p>AI terdepan untuk natural language processing dan adaptive learning dengan akurasi 99.2%.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">⚡</div>
              <h3>GPT-4 Turbo</h3>
              <p>Pemrosesan real-time dengan response time kurang dari 100ms untuk kontrol instantaneous.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">💎</div>
              <h3>Gemini Pro</h3>
              <p>Multi-modal AI untuk analisis visual dan audio yang komprehensif dalam sistem smart home.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🛡️</div>
              <h3>Security Intelligence</h3>
              <p>AI-powered security dengan tingkat akurasi 99.5% untuk perlindungan rumah yang maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Testimoni */}
      <CustomerReviews />

      {/* Global Reach Section - Jangkauan Global, Distribusi Regional, Market Ungulan */}
      <GlobalReach />

      {/* Company Values Section */}
      <section className="innovation-section">
        <div className="innovation-content">
          <div className="section-header">
            <h2 className="section-title">
              Nilai-Nilai <span className="gradient-text">Perusahaan</span>
            </h2>
            <p className="section-subtitle">
              Komitmen kami dalam memberikan layanan smart home terbaik dengan standar internasional
            </p>
          </div>
          <div className="innovation-grid">
            <div className="innovation-card">
              <div className="innovation-icon">🎯</div>
              <h3>Inovasi Berkelanjutan</h3>
              <p>Terus mengembangkan teknologi AI terbaru untuk memberikan solusi smart home yang selalu terdepan.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🤝</div>
              <h3>Kepercayaan Pelanggan</h3>
              <p>Membangun hubungan jangka panjang dengan lebih dari 50,000 rumah di seluruh dunia.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🌍</div>
              <h3>Jangkauan Global</h3>
              <p>Melayani 45+ negara dengan distribusi regional yang kuat dan partner lokal terpercaya.</p>
            </div>
            <div className="innovation-card">
              <div className="innovation-icon">🏆</div>
              <h3>Sertifikasi Internasional</h3>
              <p>Memenuhi standar keamanan dan kualitas internasional dengan berbagai sertifikasi terkemuka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2>Misi & Visi Kami</h2>
          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ color: '#4a90e2', marginBottom: '1rem' }}>🎯 Misi</h3>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Menyediakan solusi smart home yang cerdas, aman, dan terintegrasi dengan teknologi AI tingkat tinggi 
              untuk meningkatkan kualitas hidup dan efisiensi energi di rumah-rumah di seluruh dunia.
            </p>
            
            <h3 style={{ color: '#4a90e2', marginBottom: '1rem' }}>🌟 Visi</h3>
            <p style={{ fontSize: '1.1rem' }}>
              Menjadi platform smart home terdepan di dunia yang powered by AI, dengan jangkauan global 
              yang melayani jutaan rumah dan menjadi market unggulan dalam transformasi digital hunian modern.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
