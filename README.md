# Khansafolio - UI/UX Designer Portfolio

A modern, responsive portfolio website showcasing UI/UX design work. Built with the latest web technologies to deliver beautiful and purposeful digital experiences that blend creativity with strategy.

## Features

- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **Modern UI** - Clean, minimalist design with smooth animations and transitions
- **Optimized Performance** - Built with Next.js 16 and React Compiler for optimal performance
- **TypeScript** - Type-safe codebase for better development experience
- **Tailwind CSS v4** - Modern styling with the latest Tailwind CSS features

## Sections

- **Hero** - Eye-catching introduction section
- **Projects** - Showcase of design projects and case studies
- **Philosophy** - Design philosophy and approach
- **Clients** - Client testimonials and collaborations
- **Contact** - Get in touch section

## Tech Stack

- **Framework**: [Next.js 16.0.5](https://nextjs.org) with App Router
- **UI Library**: [React 19.2.0](https://react.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4.1.17](https://tailwindcss.com)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via next/font
- **Optimization**: [React Compiler](https://react.dev/learn/react-compiler) for automatic optimization

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/khansafolio.git
cd khansafolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
khansafolio/
├── app/
│   ├── components/
│   │   ├── icons/       # Icon components
│   │   ├── sections/    # Main page sections (Hero, Projects, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with Header and Footer
│   └── page.tsx         # Home page
├── public/
│   └── assets/
│       ├── icons/       # Static icon assets
│       └── images/      # Image assets
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development

The application uses:
- **App Router** for routing and layouts
- **Server Components** by default for better performance
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Inter font** with variable font optimization

### Editing Content

- Modify page content in `app/page.tsx`
- Edit individual sections in `app/components/sections/`
- Update global metadata in `app/layout.tsx`
- Add or modify styles in `app/globals.css`

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/khansafolio)

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- [Netlify](https://www.netlify.com)
- [Railway](https://railway.app)
- [Digital Ocean](https://www.digitalocean.com)
- Self-hosted with Node.js

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is private and proprietary.

## Author

Built by a freelance developer specializing in modern web applications.
