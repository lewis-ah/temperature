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
      .catch(err => {
        setError('Gagal mengambil data suhu. Silakan coba lagi.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTemperature();
    
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchTemperature, 30000);
    return () => clearInterval(interval);
  }, []);

  const getTemperatureStatus = (temp) => {
    if (temp < 10) return { status: 'Cold', color: '#3b82f6', icon: '❄️', description: 'Suhu dingin, sebaiknya gunakan pemanas' };
    if (temp < 18) return { status: 'Cool', color: '#10b981', icon: '🌬️', description: 'Suhu sejuk, nyaman untuk aktivitas' };
    if (temp < 25) return { status: 'Comfortable', color: '#f59e0b', icon: '😊', description: 'Suhu nyaman, ideal untuk beraktivitas' };
    if (temp < 30) return { status: 'Warm', color: '#f97316', icon: '🌡️', description: 'Suhu hangat, sebaiknya gunakan kipas' };
    return { status: 'Hot', color: '#ef4444', icon: '🔥', description: 'Suhu panas, sebaiknya gunakan AC' };
  };

  const getTemperatureColor = (temp) => {
    if (temp < 10) return '#3b82f6'; // Blue
    if (temp < 18) return '#10b981'; // Green
    if (temp < 25) return '#f59e0b'; // Yellow
    if (temp < 30) return '#f97316'; // Orange
    return '#ef4444'; // Red
  };

  const getComfortLevel = (temp) => {
    if (temp < 10) return { level: 'Tidak Nyaman', percentage: 20 };
    if (temp < 18) return { level: 'Agak Nyaman', percentage: 60 };
    if (temp < 25) return { level: 'Sangat Nyaman', percentage: 100 };
    if (temp < 30) return { level: 'Kurang Nyaman', percentage: 40 };
    return { level: 'Tidak Nyaman', percentage: 10 };
  };

  const tempStatus = temp !== null ? getTemperatureStatus(temp) : null;
  const comfortLevel = temp !== null ? getComfortLevel(temp) : null;

  return (
    <div className="temperature-container">
      {/* Header Section */}
      <div className="temperature-header">
        <div className="header-content">
          <div className="header-badge">🌡️ LIVE MONITORING</div>
          <h1 className="header-title">Monitoring Suhu Real-time</h1>
          <p className="header-subtitle">
            Pantau suhu lingkungan Anda secara real-time dengan data yang akurat dan terpercaya
          </p>
        </div>
      </div>

      {/* Main Temperature Display */}
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

              {/* Comfort Level Indicator */}
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

              {/* Additional Info */}
              <div className="temp-details">
                <div className="detail-item">
                  <div className="detail-icon">⏰</div>
                  <div className="detail-content">
                    <span className="detail-label">Terakhir Update</span>
                    <span className="detail-value">
                      {new Date(timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📅</div>
                  <div className="detail-content">
                    <span className="detail-label">Tanggal</span>
                    <span className="detail-value">
                      {new Date(timestamp).toLocaleDateString()}
                    </span>
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

              {/* Action Buttons */}
              <div className="temp-actions">
                <button className="refresh-button" onClick={fetchTemperature}>
                  🔄 Refresh Manual
                </button>
                <button className="history-button">
                  📊 Lihat Riwayat
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Temperature Guide */}
      <div className="temperature-guide">
        <h2>Panduan Suhu</h2>
        <div className="guide-grid">
          <div className="guide-item cold">
            <div className="guide-icon">❄️</div>
            <h3>Dingin (0-10°C)</h3>
            <p>Gunakan pemanas untuk kenyamanan</p>
          </div>
          <div className="guide-item cool">
            <div className="guide-icon">🌬️</div>
            <h3>Sejuk (10-18°C)</h3>
            <p>Nyaman untuk aktivitas ringan</p>
          </div>
          <div className="guide-item comfortable">
            <div className="guide-icon">😊</div>
            <h3>Nyaman (18-25°C)</h3>
            <p>Ideal untuk semua aktivitas</p>
          </div>
          <div className="guide-item warm">
            <div className="guide-icon">🌡️</div>
            <h3>Hangat (25-30°C)</h3>
            <p>Gunakan kipas untuk pendinginan</p>
          </div>
          <div className="guide-item hot">
            <div className="guide-icon">🔥</div>
            <h3>Panas (30°C+)</h3>
            <p>Gunakan AC untuk kenyamanan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
