/**
 * AI Technology Service Interface
 * Defines the contract for AI technology information operations
 */
export class IAITechnologyService {
  /**
   * Get AI technologies used
   * @returns {Promise<Array>} Array of AI technologies
   */
  async getAITechnologies() {
    throw new Error('Method getAITechnologies must be implemented');
  }

  /**
   * Get AI capabilities
   * @returns {Promise<Object>} AI capabilities information
   */
  async getAICapabilities() {
    throw new Error('Method getAICapabilities must be implemented');
  }

  /**
   * Get AI performance metrics
   * @returns {Promise<Object>} AI performance metrics
   */
  async getAIMetrics() {
    throw new Error('Method getAIMetrics must be implemented');
  }
}