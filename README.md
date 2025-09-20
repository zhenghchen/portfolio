# Portfolio - Modern Developer Portfolio

A comprehensive, single-page portfolio application built with Next.js 14, TypeScript, and Tailwind CSS, following a custom design system for a dark, professional aesthetic.

## ✨ Features

### 🎯 Core Functionality
- **Single Page Application (SPA)** - Smooth scrolling navigation between sections
- **Fixed Navigation Bar** - Always accessible with active section highlighting
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Interactive Project Modals** - Detailed project views with image galleries
- **Contact Form** - Functional contact form with validation
- **Resume Download** - Direct resume download functionality

### 🎨 Design & UI
- **Custom Design System** - Following design.json specifications
- **Dark Theme** - Professional dark color scheme throughout
- **Smooth Animations** - Fade-in and slide-up animations
- **Hover Effects** - Interactive elements with subtle transitions
- **Modern Typography** - Inter font with proper hierarchy
- **Custom Scrollbar** - Styled scrollbar matching the design

### 🔧 Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **Custom Hooks** for state management
- **Reusable Components** - Button, Card, Tag, Modal components
- **SEO Optimized** - Proper meta tags and OpenGraph data
- **Performance Optimized** - Image optimization and lazy loading

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles with design system
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navigation.tsx       # Fixed navigation with smooth scroll
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section with profile
│   │   ├── Experience.tsx   # Work/Education tabbed section
│   │   ├── Projects.tsx     # Projects showcase with modals
│   │   ├── Blog.tsx         # Blog posts section
│   │   ├── Contact.tsx      # Contact form and info
│   │   └── Footer.tsx       # Footer with social links
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx       # Button component with variants
│       ├── Card.tsx         # Card component system
│       └── Tag.tsx          # Tag component for technologies
├── hooks/
│   ├── useActiveSection.ts  # Active section detection
│   ├── useModal.ts          # Modal state management
│   └── useTheme.ts          # Theme management (prepared)
├── data/
│   └── mockData.ts          # Comprehensive mock data
├── lib/
│   └── utils.ts             # Utility functions
└── design.json              # Design system specifications
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

The portfolio follows a comprehensive design system defined in `design.json`:

### Color Palette
- **Primary Background**: `#0F1419` - Main page background
- **Surface Colors**: `#1A1F26`, `#252A32` - Card and component backgrounds
- **Accent Color**: `#4A9EFF` - Interactive elements and highlights
- **Text Colors**: White, light gray, and muted gray hierarchy

### Typography
- **Font**: Inter with weights 300-700
- **Hierarchy**: Proper heading and body text scaling
- **Line Heights**: Optimized for readability

### Components
- **Cards**: Rounded corners with subtle borders and hover effects
- **Buttons**: Three variants (primary, secondary, ghost) with hover states
- **Tags**: Technology tags with consistent styling
- **Form Elements**: Styled inputs with focus states

## 📝 Customization Guide

### 1. Personal Information
Update the mock data in `data/mockData.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
}
```

### 2. Work Experience
Add your work experience to the `workExperience` array:
```typescript
{
  id: "unique-id",
  title: "Your Job Title",
  company: "Company Name",
  // ... other fields
}
```

### 3. Projects
Update the `projects` array with your projects:
```typescript
{
  id: "project-id",
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description for modal",
  technologies: ["React", "Node.js"],
  images: ["image-url"],
  // ... other fields
}
```

### 4. Styling
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    accent: '#YOUR_COLOR', // Change accent color
    // ... other colors
  }
}
```

### 5. Content Sections
Each section can be customized by editing the respective component in `components/sections/`.

## 🔧 Key Features Implementation

### Smooth Scroll Navigation
- Custom `scrollToSection` utility function
- Active section detection with `useActiveSection` hook
- Hash-based URLs for direct section linking

### Project Modals
- Modal state management with `useModal` hook
- Image galleries with multiple project screenshots
- External links to demos, source code, and UI designs

### Responsive Design
- Mobile-first approach with breakpoint-specific layouts
- Hamburger menu for mobile navigation
- Flexible grid systems for different screen sizes

### Form Functionality
- Contact form with validation
- Loading states and user feedback
- Email integration ready (requires backend setup)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **AWS S3**: Static hosting with CloudFront
- **GitHub Pages**: With GitHub Actions workflow

## 📊 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **SEO Optimization**: Meta tags, OpenGraph, and Twitter cards
- **Lighthouse Score**: Optimized for 90+ scores across all metrics

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections
1. Create component in `components/sections/`
2. Add to main page in `app/page.tsx`
3. Update navigation in `components/Navigation.tsx`
4. Add section ID to `useActiveSection` hook

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design system inspired by modern portfolio trends
- Icons from Heroicons
- Images from Unsplash (placeholder)
- Built with Next.js, TypeScript, and Tailwind CSS
