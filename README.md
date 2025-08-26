# Portfolio v02

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Next.js 14** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 📱 **Responsive design** (mobile-first)
- 🎯 **Smooth scrolling** navigation
- 🌐 **Semantic HTML5** structure

## Sections

1. **Home** - Hero section with call-to-action
2. **About** - Personal information and experience
3. **Skills** - Technical skills and expertise
4. **Contact** - Contact form and information
5. **Footer** - Quote and additional links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v02
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
portfolio-v02/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/             # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── HomeSection.tsx    # Hero section
│   ├── AboutSection.tsx   # About section
│   ├── SkillsSection.tsx  # Skills section
│   ├── ContactSection.tsx # Contact section
│   └── Footer.tsx         # Footer
├── design/                 # Design mockups
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js` with custom primary, secondary, and accent colors.

### Content

Update the content in each component file to match your personal information, skills, and contact details.

### Styling

Modify the Tailwind classes in the components to adjust spacing, colors, and layout.

## Deployment

The portfolio can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 18** - UI library
- **PostCSS** - CSS processing

## License

This project is open source and available under the [MIT License](LICENSE).
