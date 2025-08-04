import React, { useState, useEffect } from 'react';
import ServiceRegistry from '../services/ServiceRegistry.js';
import './GlobalReach.css';

const GlobalReach = () => {
  const [globalStats, setGlobalStats] = useState({});
  const [regionalStats, setRegionalStats] = useState({});
  const [flagshipMarkets, setFlagshipMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeRegion, setActiveRegion] = useState('Asia Pacific');

  useEffect(() => {
    const loadData = async () => {
      try {
        const globalService = ServiceRegistry.getGlobalReachService();
        
        const [statsData, regionalData, flagshipData] = await Promise.all([
          globalService.getGlobalStats(),
          globalService.getRegionalStats(),
          globalService.getFlagshipMarkets()
        ]);

        setGlobalStats(statsData);
        setRegionalStats(regionalData);
        setFlagshipMarkets(flagshipData);
      } catch (error) {
        console.error('Error loading global reach data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const regions = [
    { name: 'Asia Pacific', icon: '🌏', color: '#4a90e2' },
    { name: 'Europe', icon: '🇪🇺', color: '#e74c3c' },
    { name: 'North America', icon: '🇺🇸', color: '#27ae60' },
    { name: 'Middle East', icon: '🕌', color: '#f39c12' },
    { name: 'South America', icon: '🌎', color: '#9b59b6' },
    { name: 'Africa', icon: '🌍', color: '#e67e22' }
  ];

  if (loading) {
    return (
      <section className="global-reach loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Memuat data jangkauan global...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="global-reach">
      <div className="container">
        {/* Global Statistics Header */}
        <div className="global-header">
          <h2 className="section-title">
            <span className="highlight">Jangkauan Global</span> di Lebih dari {globalStats.totalCountries} Negara
          </h2>
          <p className="section-subtitle">
            Dengan teknologi AI tingkat tinggi seperti <strong>Claude Sonnet</strong>, 
            kami telah memperluas layanan smart home ke <strong>{globalStats.totalCountries} negara</strong> 
            di <strong>{globalStats.continentsServed} benua</strong>, melayani lebih dari 
            <strong> {globalStats.totalInstallations?.toLocaleString()}</strong> instalasi di seluruh dunia.
          </p>

          <div className="global-stats">
            <div className="stat-item">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">{globalStats.totalCountries}</div>
              <div className="stat-label">Negara</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏙️</div>
              <div className="stat-number">{globalStats.totalCities}</div>
              <div className="stat-label">Kota</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏠</div>
              <div className="stat-number">{globalStats.totalInstallations?.toLocaleString()}</div>
              <div className="stat-label">Instalasi</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🤝</div>
              <div className="stat-number">{globalStats.localPartners}</div>
              <div className="stat-label">Partner Lokal</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🗣️</div>
              <div className="stat-number">{globalStats.languagesSupported}</div>
              <div className="stat-label">Bahasa</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🕐</div>
              <div className="stat-number">{globalStats.timeZonesCovered}</div>
              <div className="stat-label">Zona Waktu</div>
            </div>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="regional-breakdown">
          <h3>Distribusi Regional</h3>
          
          <div className="region-tabs">
            {regions.map((region) => (
              <button
                key={region.name}
                className={`region-tab ${activeRegion === region.name ? 'active' : ''}`}
                onClick={() => setActiveRegion(region.name)}
                style={{ '--region-color': region.color }}
              >
                <span className="region-icon">{region.icon}</span>
                <span className="region-name">{region.name}</span>
                <span className="region-count">{regionalStats[region.name]?.countries || 0}</span>
              </button>
            ))}
          </div>

          <div className="region-details">
            {regionalStats[activeRegion] && (
              <div className="region-info">
                <div className="region-stat">
                  <div className="stat-value">{regionalStats[activeRegion].countries}</div>
                  <div className="stat-desc">Negara</div>
                </div>
                <div className="region-stat">
                  <div className="stat-value">{regionalStats[activeRegion].totalCities}</div>
                  <div className="stat-desc">Kota</div>
                </div>
                <div className="region-stat">
                  <div className="stat-value">{regionalStats[activeRegion].totalInstallations?.toLocaleString()}</div>
                  <div className="stat-desc">Instalasi</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Flagship Markets */}
        <div className="flagship-markets">
          <h3>Market Unggulan</h3>
          <p className="flagship-desc">
            Negara-negara dengan operasi terbesar dan teknologi AI paling canggih
          </p>
          
          <div className="flagship-grid">
            {flagshipMarkets.slice(0, 12).map((market, index) => (
              <div key={market.country} className="flagship-card">
                <div className="market-rank">#{index + 1}</div>
                <div className="market-info">
                  <div className="market-name">{market.country}</div>
                  <div className="market-region">{market.region}</div>
                  <div className="market-stats">
                    <span className="installations">{market.installations?.toLocaleString()} instalasi</span>
                    <span className="cities">{market.cities} kota</span>
                  </div>
                </div>
                <div className="market-badge">🏆</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Technology Global Impact */}
        <div className="ai-global-impact">
          <div className="impact-content">
            <h3>🚀 AI Tingkat Tinggi untuk Jangkauan Global</h3>
            <p>
              Dengan <strong>Claude Sonnet 3.5</strong> dan teknologi AI terdepan, kami memberikan 
              pengalaman smart home yang konsisten dan berkualitas tinggi di seluruh dunia. 
              Sistem AI kami dapat beradaptasi dengan berbagai budaya, iklim, dan regulasi lokal.
            </p>
            <div className="impact-features">
              <div className="impact-feature">
                <div className="feature-icon">🧠</div>
                <div className="feature-text">
                  <strong>Claude Sonnet AI</strong><br/>
                  Pemrosesan natural language dalam 25 bahasa
                </div>
              </div>
              <div className="impact-feature">
                <div className="feature-icon">🌡️</div>
                <div className="feature-text">
                  <strong>Climate Adaptation</strong><br/>
                  AI menyesuaikan dengan iklim lokal setiap negara
                </div>
              </div>
              <div className="impact-feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <strong>Energy Intelligence</strong><br/>
                  Optimasi berdasarkan tarif listrik setiap negara
                </div>
              </div>
              <div className="impact-feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <strong>Security Compliance</strong><br/>
                  Memenuhi standar keamanan internasional
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3>Sertifikasi Internasional</h3>
          <div className="cert-grid">
            {globalStats.certifications?.map((cert, index) => (
              <div key={index} className="cert-item">
                <div className="cert-icon">🏅</div>
                <div className="cert-name">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;