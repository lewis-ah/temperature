// Scroll Reveal Utility
class ScrollReveal {
  constructor() {
    this.elements = [];
    this.threshold = 0.1; // 10% of element must be visible
    this.rootMargin = '0px 0px -50px 0px'; // Start animation 50px before element enters viewport
    this.init();
  }

  init() {
    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, stop observing
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    // Start observing elements
    this.observeElements();
  }

  observeElements() {
    // Get all elements with scroll-reveal classes
    const selectors = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
      '.scroll-reveal-rotate',
      '.scroll-reveal-stagger',
      '.scroll-reveal-fast',
      '.scroll-reveal-slow',
      '.scroll-reveal-bounce',
      '.scroll-reveal-top',
      '.scroll-reveal-zoom',
      '.scroll-reveal-flip'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        this.observer.observe(element);
      });
    });
  }

  // Method to add new elements dynamically
  addElement(element) {
    this.observer.observe(element);
  }

  // Method to refresh and re-observe elements (useful for dynamic content)
  refresh() {
    this.observeElements();
  }

  // Method to reset all elements (remove revealed class)
  reset() {
    const selectors = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
      '.scroll-reveal-rotate',
      '.scroll-reveal-stagger',
      '.scroll-reveal-fast',
      '.scroll-reveal-slow',
      '.scroll-reveal-bounce',
      '.scroll-reveal-top',
      '.scroll-reveal-zoom',
      '.scroll-reveal-flip'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.classList.remove('revealed');
        this.observer.observe(element);
      });
    });
  }
}

// Initialize scroll reveal when DOM is loaded
let scrollRevealInstance = null;

export const initScrollReveal = () => {
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        scrollRevealInstance = new ScrollReveal();
      });
    } else {
      scrollRevealInstance = new ScrollReveal();
    }
  }
};

// Export utility functions
export const addScrollRevealElement = (element) => {
  if (scrollRevealInstance) {
    scrollRevealInstance.addElement(element);
  }
};

export const refreshScrollReveal = () => {
  if (scrollRevealInstance) {
    scrollRevealInstance.refresh();
  }
};

export const resetScrollReveal = () => {
  if (scrollRevealInstance) {
    scrollRevealInstance.reset();
  }
};

// Auto-initialize when imported
if (typeof window !== 'undefined') {
  initScrollReveal();
} 