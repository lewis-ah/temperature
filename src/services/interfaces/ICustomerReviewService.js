/**
 * Customer Review Service Interface
 * Defines the contract for customer review operations
 */
export class ICustomerReviewService {
  /**
   * Get all customer reviews
   * @returns {Promise<Array>} Array of customer reviews
   */
  async getReviews() {
    throw new Error('Method getReviews must be implemented');
  }

  /**
   * Get reviews by rating
   * @param {number} minRating - Minimum rating filter
   * @returns {Promise<Array>} Filtered reviews
   */
  async getReviewsByRating(minRating) {
    throw new Error('Method getReviewsByRating must be implemented');
  }

  /**
   * Get trust statistics
   * @returns {Promise<Object>} Trust statistics object
   */
  async getTrustStats() {
    throw new Error('Method getTrustStats must be implemented');
  }

  /**
   * Get featured testimonials
   * @returns {Promise<Array>} Featured customer testimonials
   */
  async getFeaturedTestimonials() {
    throw new Error('Method getFeaturedTestimonials must be implemented');
  }
}