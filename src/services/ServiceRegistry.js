import DIContainer from './DIContainer.js';
import { CustomerReviewService } from './CustomerReviewService.js';
import { AITechnologyService } from './AITechnologyService.js';
import { GlobalReachService } from './GlobalReachService.js';

/**
 * Service Registry
 * Registers all services with the DI Container
 */
class ServiceRegistry {
  static initialize() {
    // Register Customer Review Service
    DIContainer.register(
      'customerReviewService',
      () => new CustomerReviewService(),
      true // singleton
    );

    // Register AI Technology Service  
    DIContainer.register(
      'aiTechnologyService',
      () => new AITechnologyService(),
      true // singleton
    );

    // Register Global Reach Service
    DIContainer.register(
      'globalReachService', 
      () => new GlobalReachService(),
      true // singleton
    );

    console.log('✅ All services registered successfully');
  }

  static getCustomerReviewService() {
    return DIContainer.resolve('customerReviewService');
  }

  static getAITechnologyService() {
    return DIContainer.resolve('aiTechnologyService');
  }

  static getGlobalReachService() {
    return DIContainer.resolve('globalReachService');
  }

  static getAllServices() {
    return {
      customerReview: this.getCustomerReviewService(),
      aiTechnology: this.getAITechnologyService(),
      globalReach: this.getGlobalReachService()
    };
  }
}

// Initialize services on module load
ServiceRegistry.initialize();

export default ServiceRegistry;