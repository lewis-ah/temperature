import { ICustomerReviewService } from './interfaces/ICustomerReviewService.js';

/**
 * Customer Review Service Implementation
 * Provides customer testimonials and trust statistics for Indonesian market
 */
export class CustomerReviewService extends ICustomerReviewService {
  constructor() {
    super();
    this.reviews = [
      {
        id: 1,
        name: "Budi Santoso",
        location: "Jakarta",
        rating: 5,
        comment: "Sudah dipercaya dari lebih 2000 rumah di Jakarta! Smart home system ini benar-benar mengubah hidup keluarga kami. Keamanan rumah jadi lebih terjamin.",
        avatar: "👨",
        verified: true,
        date: "2024-01-15",
        category: "security"
      },
      {
        id: 2,
        name: "Siti Rahayu",
        location: "Surabaya", 
        rating: 5,
        comment: "Sudah dipercaya dari ribuan rumah di seluruh Indonesia! Dengan teknologi AI Claude Sonnet yang canggih, rumah kami jadi lebih pintar dan hemat energi.",
        avatar: "👩",
        verified: true,
        date: "2024-01-20",
        category: "energy"
      },
      {
        id: 3,
        name: "Ahmad Wijaya",
        location: "Bandung",
        rating: 5,
        comment: "Sudah dipercaya dari 5000+ rumah di Jawa Barat! Pelayanan customer service 24/7 sangat membantu. Tim teknisi profesional dan responsif.",
        avatar: "👨‍💼",
        verified: true,
        date: "2024-01-25",
        category: "service"
      },
      {
        id: 4,
        name: "Dewi Lestari",
        location: "Yogyakarta",
        rating: 5,
        comment: "Sudah dipercaya dari ratusan rumah heritage di Jogja! Sistem smart home ini mempertahankan nilai estetika rumah tradisional sambil menambah teknologi modern.",
        avatar: "👩‍🎨",
        verified: true,
        date: "2024-02-01",
        category: "heritage"
      },
      {
        id: 5,
        name: "Riko Pratama",
        location: "Medan",
        rating: 5,
        comment: "Sudah dipercaya dari 1500+ rumah di Sumatera Utara! Dengan AI tingkat tinggi seperti Claude Sonnet, kontrol suhu dan pencahayaan jadi otomatis sesuai cuaca tropis.",
        avatar: "👨‍💻",
        verified: true,
        date: "2024-02-05",
        category: "climate"
      },
      {
        id: 6,
        name: "Maya Sari",
        location: "Makassar",
        rating: 5,
        comment: "Sudah dipercaya dari 800+ rumah di Sulawesi Selatan! Installation team sangat profesional, selesai dalam 1 hari tanpa merusak interior rumah.",
        avatar: "👩‍🔧",
        verified: true,
        date: "2024-02-10",
        category: "installation"
      },
      {
        id: 7,
        name: "Hendra Kusuma",
        location: "Bali",
        rating: 5,
        comment: "Sudah dipercaya dari 1200+ villa dan resort di Bali! Dengan teknologi AI Claude Sonnet, guest experience jadi lebih premium dan otomatis.",
        avatar: "🏨",
        verified: true,
        date: "2024-02-15",
        category: "hospitality"
      },
      {
        id: 8,
        name: "Indira Putri",
        location: "Balikpapan",
        rating: 5,
        comment: "Sudah dipercaya dari 600+ rumah di Kalimantan Timur! Sistem keamanan dengan AI detection sangat akurat, push notification real-time ke smartphone.",
        avatar: "👩‍💼",
        verified: true,
        date: "2024-02-20",
        category: "security"
      }
    ];

    this.trustStats = {
      totalHomes: 15000,
      totalCities: 150,
      satisfactionRate: 98.7,
      averageRating: 4.9,
      yearsOfService: 8,
      certifiedTechnicians: 200
    };

    this.featuredTestimonials = [
      {
        id: 'featured-1',
        name: "Dr. Bambang Hermanto",
        title: "Direktur IT Bank Mandiri",
        location: "Jakarta",
        testimonial: "Sudah dipercaya dari lebih 10,000 rumah eksekutif di Jakarta! Teknologi AI tingkat tinggi seperti Claude Sonnet memberikan pengalaman smart home yang tak tertandingi. Keamanan dan efisiensi energi meningkat drastis.",
        avatar: "👨‍💼",
        company: "Bank Mandiri",
        rating: 5
      },
      {
        id: 'featured-2', 
        name: "Ir. Kartika Sari",
        title: "Arsitek Senior",
        location: "Surabaya",
        testimonial: "Sudah dipercaya dari ribuan proyek perumahan mewah! Dengan AI Claude Sonnet dan teknologi machine learning terdepan, setiap rumah menjadi benar-benar cerdas dan adaptif terhadap gaya hidup penghuninya.",
        avatar: "👩‍🎨",
        company: "Sari Architect Studio",
        rating: 5
      },
      {
        id: 'featured-3',
        name: "Toni Wahyudi",
        title: "Property Developer", 
        location: "Bali",
        testimonial: "Sudah dipercaya dari 50+ proyek resort dan villa! Kami menggunakan AI tingkat tinggi untuk menciptakan pengalaman tamu yang luar biasa. Teknologi Claude Sonnet memungkinkan personalisasi otomatis yang menakjubkan.",
        avatar: "🏗️",
        company: "Wahyudi Property Group",
        rating: 5
      }
    ];
  }

  async getReviews() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.reviews;
  }

  async getReviewsByRating(minRating = 4) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.reviews.filter(review => review.rating >= minRating);
  }

  async getTrustStats() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.trustStats;
  }

  async getFeaturedTestimonials() {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.featuredTestimonials;
  }

  async getReviewsByCategory(category) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.reviews.filter(review => review.category === category);
  }

  async getLocationStats() {
    await new Promise(resolve => setTimeout(resolve, 300));
    const locationStats = {};
    this.reviews.forEach(review => {
      if (locationStats[review.location]) {
        locationStats[review.location]++;
      } else {
        locationStats[review.location] = 1;
      }
    });
    return locationStats;
  }
}