import React, { useState, useEffect } from 'react';
import ServiceRegistry from '../services/ServiceRegistry.js';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [featuredTestimonials, setFeaturedTestimonials] = useState([]);
  const [trustStats, setTrustStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const customerService = ServiceRegistry.getCustomerReviewService();
        
        const [reviewsData, testimonialsData, statsData] = await Promise.all([
          customerService.getReviews(),
          customerService.getFeaturedTestimonials(),
          customerService.getTrustStats()
        ]);

        setReviews(reviewsData);
        setFeaturedTestimonials(testimonialsData);
        setTrustStats(statsData);
      } catch (error) {
        console.error('Error loading customer reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Auto-cycle through featured testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => 
        prev >= featuredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  if (loading) {
    return (
      <section className="customer-reviews loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Memuat testimoni pelanggan...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="customer-reviews">
      <div className="container">
        {/* Trust Statistics Header */}
        <div className="trust-header">
          <h2 className="section-title">
            <span className="highlight">Sudah Dipercaya</span> dari Ribuan Rumah di Indonesia
          </h2>
          <p className="section-subtitle">
            Dengan teknologi AI tingkat tinggi seperti <strong>Claude Sonnet</strong>, 
            kami telah melayani lebih dari <strong>{trustStats.totalHomes?.toLocaleString()}</strong> rumah 
            di <strong>{trustStats.totalCities}</strong> kota di Indonesia
          </p>

          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">{trustStats.totalHomes?.toLocaleString()}</div>
              <div className="stat-label">Rumah Terpasang</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trustStats.totalCities}</div>
              <div className="stat-label">Kota di Indonesia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trustStats.satisfactionRate}%</div>
              <div className="stat-label">Tingkat Kepuasan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trustStats.averageRating}</div>
              <div className="stat-label">Rating Rata-rata</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonials */}
        <div className="featured-testimonials">
          <h3>Testimoni Eksekutif & Professional</h3>
          <div className="testimonial-carousel">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    "{testimonial.testimonial}"
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-title">{testimonial.title}</div>
                      <div className="author-company">{testimonial.company}</div>
                      <div className="author-location">{testimonial.location}</div>
                      <div className="author-rating">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-indicators">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Regular Reviews Grid */}
        <div className="reviews-grid">
          <h3>Testimoni Pelanggan Lainnya</h3>
          <div className="reviews-container">
            {reviews.slice(0, 6).map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">{review.avatar}</div>
                  <div className="review-author">
                    <div className="author-name">
                      {review.name}
                      {review.verified && <span className="verified-badge">✓</span>}
                    </div>
                    <div className="author-location">{review.location}</div>
                    <div className="review-rating">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <div className="review-content">
                  <p>"{review.comment}"</p>
                </div>
                <div className="review-footer">
                  <span className="review-date">{new Date(review.date).toLocaleDateString('id-ID')}</span>
                  <span className="review-category">{review.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Technology Highlight */}
        <div className="ai-highlight">
          <div className="ai-content">
            <h3>🧠 Powered by AI Tingkat Tinggi</h3>
            <p>
              Kami menggunakan teknologi AI terdepan dunia seperti <strong>Claude Sonnet 3.5</strong>, 
              <strong>GPT-4 Turbo</strong>, dan <strong>Gemini Pro</strong> untuk memberikan 
              pengalaman smart home yang tak tertandingi dengan tingkat akurasi 99.2%.
            </p>
            <div className="ai-features">
              <div className="ai-feature">🎯 Adaptive Learning 99.1%</div>
              <div className="ai-feature">⚡ Response Time &lt; 100ms</div>
              <div className="ai-feature">🛡️ Security Intelligence 99.5%</div>
              <div className="ai-feature">🌿 Energy Savings 40%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;