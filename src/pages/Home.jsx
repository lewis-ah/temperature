import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Masa Depan Rumah<br />
          Anda, Hari Ini
        </h1>
        <p className="hero-subtitle">
          Sistem smart home yang cerdas, aman, dan terintegrasi penuh untuk gaya hidup yang<br />
          lebih mudah dan efisien. Kendalikan semuanya hanya dengan satu sentuhan.
        </p>
        <button className="cta-button">
          Mulai Petualangan Anda
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon light-control">
            💡
          </div>
          <h3>Kontrol Pencahayaan</h3>
          <p>Atur pencahayaan sesuai suasana hati Anda dengan sekali sentuhan.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon security">
            🛡️
          </div>
          <h3>Keamanan Canggih</h3>
          <p>Pantau rumah Anda 24/7 dengan sistem keamanan terintegrasi.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon energy">
            ⚡
          </div>
          <h3>Manajemen Energi</h3>
          <p>Monitor dan optimalisasi penggunaan energi untuk menghemat biaya belanja.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon automation">
            🔧
          </div>
          <h3>Otomatisasi Cerdas</h3>
          <p>Buat skenario otomatis untuk menyesuaikan perangkat sesuai jadwal.</p>
        </div>
      </div>

      <div className="partners-section">
        <p className="partners-label">Didukung oleh:</p>
        <div className="partners-logos">
          <div className="partner-logo">J.P. Morgan</div>
          <div className="partner-logo">Goldman Sachs</div>
          <div className="partner-logo">Google</div>
        </div>
      </div>
    </div>
  );
}
