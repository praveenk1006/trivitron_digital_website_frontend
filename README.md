# Trivitron Digital Website

A modern, responsive website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **pnpm** (recommended)

To check if Node.js is installed, run:
```bash
node --version
npm --version
```

## Getting Started

Follow these steps to run the website locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd trivitrondigitalwebsite
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm (recommended):
```bash
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

The website will be available at **http://localhost:3000**

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Available Scripts

- **`npm run dev`** - Starts the development server with hot-reload
- **`npm run build`** - Creates an optimized production build
- **`npm run start`** - Runs the production build locally
- **`npm run lint`** - Runs ESLint to check code quality

## Building for Production

To create a production-ready build:

```bash
npm run build
```

After building, you can test the production build locally:

```bash
npm run start
```

The production server will run at **http://localhost:3000**

## Project Structure

```
trivitrondigitalwebsite/
├── app/                    # Next.js app directory (pages and layouts)
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and libraries
├── public/                 # Static assets (images, fonts, etc.)
├── styles/                 # Global styles
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Node Modules Issues

If you encounter dependency issues, try deleting `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure you're using a compatible Node.js version (18.x or higher):

```bash
node --version
```

## Additional Documentation

For detailed technical documentation, see [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md)

## Support

For issues or questions, please contact the development team or create an issue in the repository.
