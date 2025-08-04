/**
 * Global Reach Service Interface
 * Defines the contract for global reach information operations
 */
export class IGlobalReachService {
  /**
   * Get global statistics
   * @returns {Promise<Object>} Global reach statistics
   */
  async getGlobalStats() {
    throw new Error('Method getGlobalStats must be implemented');
  }

  /**
   * Get countries coverage
   * @returns {Promise<Array>} Array of countries we serve
   */
  async getCountriesCoverage() {
    throw new Error('Method getCountriesCoverage must be implemented');
  }

  /**
   * Get regional presence
   * @returns {Promise<Object>} Regional presence information
   */
  async getRegionalPresence() {
    throw new Error('Method getRegionalPresence must be implemented');
  }
}