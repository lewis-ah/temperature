# Smart Home Landing Page

A modern, interactive landing page for a smart home platform with AI-powered features, inspired by Ethereum.org design principles.

## ✨ Features

### 🎨 Theme System
- **Light/Dark Mode Toggle**: Switch between light and dark themes with a beautiful animated toggle
- **Ethereum-Inspired Design**: Light mode uses a beautiful blue-to-cream color scheme
- **Persistent Theme**: Your theme preference is saved in localStorage
- **System Preference Detection**: Automatically detects your system's color scheme preference

### 📱 Interactive About Page
- **Animated Statistics**: Numbers animate when scrolling into view
- **Interactive Tabs**: Explore different sections (Mission & Vision, Company Values, Technology, Team)
- **Floating Elements**: Beautiful animated visual elements
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Animations**: CSS animations and transitions throughout

### 🎯 Key Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Statistics**: Animated counters showing company achievements
- **Interactive Tabs**: 
  - Mission & Vision
  - Company Values (6 core values)
  - AI Technology (4 advanced AI systems)
  - Team Members (4 key team members)
- **Customer Reviews**: Testimonials from satisfied customers
- **Global Reach**: Worldwide presence and partnerships

### 🛠 Technology Stack
- **React 19**: Latest React with modern features
- **React Router**: Client-side routing
- **CSS Variables**: Dynamic theming system
- **Intersection Observer**: Scroll-based animations
- **Vite**: Fast development and building

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd smart-home-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Theme System

The application features a comprehensive theme system with:

### Light Mode
- **Primary Background**: Light blue-gray (#f8fafc)
- **Secondary Background**: Cream (#f1f5f9)
- **Accent Colors**: Blue (#3b82f6) to Purple (#6366f1)
- **Text**: Dark slate (#1e293b)

### Dark Mode
- **Primary Background**: Deep blue (#0f172a)
- **Secondary Background**: Slate (#1e293b)
- **Accent Colors**: Light blue (#60a5fa) to Purple (#818cf8)
- **Text**: Light gray (#f8fafc)

### Theme Toggle
- Located in the navigation bar
- Animated sun/moon icons
- Smooth transitions between themes
- Persists user preference

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎭 Animations

### Scroll-Based Animations
- Statistics counter animation
- Fade-in effects for cards
- Staggered animations for grid items

### Interactive Animations
- Hover effects on cards and buttons
- Floating elements in hero section
- Smooth theme transitions

### Performance Optimized
- Uses CSS transforms for smooth animations
- Intersection Observer for scroll-based animations
- Reduced motion support for accessibility

## 🔧 Customization

### Adding New Themes
1. Add new theme variables in `src/index.css`
2. Update the theme context in `src/context/ThemeContext.jsx`
3. Add theme-specific styles where needed

### Modifying Colors
- Update CSS variables in `src/index.css`
- Colors are organized by theme and purpose
- Use semantic color names for easy maintenance

## 📄 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── ThemeToggle.jsx # Theme switcher component
│   ├── Footer.jsx      # Footer component
│   └── ...
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # Enhanced About page
│   └── ...
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and theme variables
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.
