# Caffè Bella

A modern restaurant landing page for Caffè Bella & Restaurant, a stylish Italian café in Addis Ababa. The app showcases the brand, menu highlights, customer reviews, and a reservation flow designed to help visitors explore the experience and book a table.

## Overview

This project is built as a responsive single-page website using React and Vite, with a polished restaurant-focused design and structured content sections for:

- Hero banner and brand messaging
- Quick restaurant info and opening details
- About section with the café story
- Menu categories and signature dishes
- Customer reviews and ratings
- Reservation form
- Footer with contact details and business information

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS
- shadcn/ui components
- Supabase client integration
- ESLint and Prettier

## Project Structure

```bash
.
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── integrations/
│   ├── lib/
│   ├── routes/
│   ├── main.tsx
│   ├── router.tsx
│   ├── server.ts
│   └── styles.css
├── supabase/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+ or newer
- npm
- Git

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/MetiAb/caffe-bella.git
cd caffe-bella
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables

Create a `.env.local` file in the project root and add your Supabase values:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

> The app expects these variables when it initializes the Supabase client. Without them, the app will fail at runtime.

4. Start the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev       # start the Vite development server
npm run build     # create a production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint checks
npm run format    # format the codebase with Prettier
```

## Production Build

To build the app for production:

```bash
npm run build
```

To test the production build locally:

```bash
npm run preview
```

## Deployment

This project is ready to be deployed to a static hosting provider or SSR-compatible platform that supports Vite-based React apps. If you are using Supabase, ensure the environment variables are configured in your hosting environment as well.

## Notes

- The brand and menu content are tailored to Caffè Bella & Restaurant in Addis Ababa.
- Reservation and data integrations are Supabase-ready and can be extended for backend workflows.
- The layout is fully responsive and designed for mobile, tablet, and desktop screens.

## License

This project is developed for the Caffè Bella restaurant brand and is intended for its launch and presentation use.