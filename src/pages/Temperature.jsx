import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Temperature.css';

export default function Temperature() {
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(null);

  const fetchTemperature = () => {
    setLoading(true);
    setError(null);
    setLastRefresh(new Date());

    axios.get('https://mrgvn.pythonanywhere.com/temperature')
      .then(res => {
        setTemp(res.data.temperature);
        setUnit(res.data.unit);
        setTimestamp(res.data.timestamp);
        setLoading(false);
      })
      .catch(() => {
        setError('Gagal mengambil data suhu. Silakan coba lagi.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 30000);
    return () => clearInterval(interval);
  }, []);

  const getTemperatureStatus = (temp) => {
    if (temp < 10) return { status: 'Dingin Ekstrim', color: '#1f7a1f', icon: '🥶', description: 'Gunakan pemanas & pakaian tebal' };
    if (temp < 18) return { status: 'Sejuk Alami', color: '#2ecc71', icon: '🍃', description: 'Nyaman untuk aktivitas outdoor' };
    if (temp < 25) return { status: 'Nyaman Hijau', color: '#27ae60', icon: '🌱', description: 'Suhu ideal untuk semua aktivitas' };
    if (temp < 30) return { status: 'Hangat Lembut', color: '#16a085', icon: '☀️', description: 'Gunakan kipas atau ventilasi alami' };
    return { status: 'Panas Terik', color: '#145a32', icon: '🌴', description: 'Gunakan pendingin & minum banyak air' };
  };

  const getTemperatureColor = (temp) => {
    if (temp < 10) return '#1f7a1f';
    if (temp < 18) return '#2ecc71';
    if (temp < 25) return '#27ae60';
    if (temp < 30) return '#16a085';
    return '#145a32';
  };

  const getComfortLevel = (temp) => {
    if (temp < 10) return { level: 'Tidak Nyaman', percentage: 20 };
    if (temp < 18) return { level: 'Nyaman', percentage: 70 };
    if (temp < 25) return { level: 'Sangat Nyaman', percentage: 100 };
    if (temp < 30) return { level: 'Cukup Nyaman', percentage: 50 };
    return { level: 'Tidak Nyaman', percentage: 30 };
  };

  const tempStatus = temp !== null ? getTemperatureStatus(temp) : null;
  const comfortLevel = temp !== null ? getComfortLevel(temp) : null;

  return (
    <div className="temperature-container">
      {/* Header */}
      <div className="temperature-header">
        <div className="header-content">
          <div className="header-badge">🌿 MONITORING SUHU HIJAU</div>
          <h1 className="header-title">Pantau Suhu Ramah Lingkungan</h1>
          <p className="header-subtitle">
            Data suhu real-time untuk menjaga kenyamanan & kelestarian lingkungan
          </p>
        </div>
      </div>

      {/* Main Card */}
      <div className="temperature-main">
        <div className="temperature-card">
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Memuat data suhu...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <div className="error-icon">⚠️</div>
              <h3>Gagal Memuat Data</h3>
              <p>{error}</p>
              <button className="retry-button" onClick={fetchTemperature}>
                🔄 Coba Lagi
              </button>
            </div>
          )}

          {temp !== null && !loading && !error && (
            <>
              {/* Temperature Display */}
              <div className="temp-display">
                <div className="temp-icon">{tempStatus.icon}</div>
                <div className="temp-value" style={{ color: getTemperatureColor(temp) }}>
                  {temp}°
                </div>
                <div className="temp-unit">{unit}</div>
                <div className="temp-status" style={{ color: getTemperatureColor(temp) }}>
                  {tempStatus.status}
                </div>
              </div>

              {/* Comfort Level */}
              <div className="comfort-section">
                <h3>Level Kenyamanan</h3>
                <div className="comfort-bar">
                  <div
                    className="comfort-fill"
                    style={{
                      width: `${comfortLevel.percentage}%`,
                      backgroundColor: getTemperatureColor(temp)
                    }}
                  ></div>
                </div>
                <div className="comfort-info">
                  <span className="comfort-level">{comfortLevel.level}</span>
                  <span className="comfort-percentage">{comfortLevel.percentage}%</span>
                </div>
                <p className="comfort-description">{tempStatus.description}</p>
              </div>

              {/* Detail Info */}
              <div className="temp-details">
                <div className="detail-item">
                  <div className="detail-icon">⏰</div>
                  <div className="detail-content">
                    <span className="detail-label">Terakhir Update</span>
                    <span className="detail-value">{new Date(timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📅</div>
                  <div className="detail-content">
                    <span className="detail-label">Tanggal</span>
                    <span className="detail-value">{new Date(timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
                {lastRefresh && (
                  <div className="detail-item">
                    <div className="detail-icon">🔄</div>
                    <div className="detail-content">
                      <span className="detail-label">Auto Refresh</span>
                      <span className="detail-value">Setiap 30 detik</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="temp-actions">
                <button className="refresh-button" onClick={fetchTemperature}>
                  🔄 Refresh Manual
                </button>
                <button className="history-button">
                  📈 Lihat Riwayat
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Temperature Guide */}
      <div className="temperature-guide">
        <h2>Panduan Suhu Hijau</h2>
        <div className="guide-grid">
          <div className="guide-item cold">
            <div className="guide-icon">🥶</div>
            <h3>Dingin (0-10°C)</h3>
            <p>Gunakan pemanas alami bila memungkinkan</p>
          </div>
          <div className="guide-item cool">
            <div className="guide-icon">🍃</div>
            <h3>Sejuk (10-18°C)</h3>
            <p>Cocok untuk aktivitas luar ruangan</p>
          </div>
          <div className="guide-item comfortable">
            <div className="guide-icon">🌱</div>
            <h3>Nyaman (18-25°C)</h3>
            <p>Suhu ideal untuk semua aktivitas</p>
          </div>
          <div className="guide-item warm">
            <div className="guide-icon">☀️</div>
            <h3>Hangat (25-30°C)</h3>
            <p>Gunakan ventilasi atau kipas alami</p>
          </div>
          <div className="guide-item hot">
            <div className="guide-icon">🌴</div>
            <h3>Panas (30°C+)</h3>
            <p>Gunakan pendingin & hidrasi cukup</p>
          </div>
        </div>
      </div>
    </div>
  );
}
