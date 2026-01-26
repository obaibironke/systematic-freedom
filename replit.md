# Permasize

## Overview

Permasize is a B2B consulting business website built with React and TypeScript. The application is a marketing/landing page for a business consulting service that helps companies scale by making owners replaceable through systematic documentation and intelligent delegation. The site features a modern dark navy theme with cyan glow accents, showcasing a "Document, Delegate, Scale" framework methodology.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom dark theme design system (dark navy backgrounds with cyan/electric blue accents)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Animation**: Framer Motion for smooth animations and transitions
- **Routing**: React Router DOM for client-side navigation

### Design System
The application uses a custom design system with CSS variables defined in `src/index.css`:
- Dark navy backgrounds (`--background`, `--background-dark`, `--background-card`)
- Cyan/electric blue primary colors with glow effects
- Custom font families: Inter for body text, Space Grotesk for display/headings
- Glass morphism effects and gradient overlays

### Component Structure
- **Layout Components**: `Navbar`, `Footer` - consistent navigation and branding
- **Section Components**: `HeroSection`, `FrameworkSection`, `ProblemSection`, `WhyChooseSection`, `AboutSection`, `CTASection` - landing page content blocks
- **UI Components**: Full shadcn/ui component library in `src/components/ui/` including buttons, forms, dialogs, and more

### State Management
- **React Query** (@tanstack/react-query) configured for server state management
- Local component state using React hooks

### Testing
- **Framework**: Vitest with jsdom environment
- **Testing Library**: @testing-library/jest-dom for DOM assertions
- Test files located in `src/test/`

## External Dependencies

### UI Framework
- **Radix UI**: Headless accessible component primitives (accordion, dialog, dropdown, tooltip, etc.)
- **shadcn/ui**: Pre-built component library using Radix + Tailwind
- **Lucide React**: Icon library

### Animation & Styling
- **Framer Motion**: Animation library for React
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: For creating variant-based component styles
- **tailwind-merge**: Intelligent Tailwind class merging

### Utilities
- **date-fns**: Date manipulation library
- **react-day-picker**: Date picker component
- **embla-carousel-react**: Carousel/slider functionality
- **sonner**: Toast notification library
- **vaul**: Drawer component
- **cmdk**: Command palette component

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation (implied by resolvers)

### Theming
- **next-themes**: Theme management (dark/light mode support)

### Development
- **TypeScript**: Static type checking
- **ESLint**: Code linting with React-specific rules
- **Vitest**: Unit testing framework