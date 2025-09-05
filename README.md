# Stack Hono Vite Starter

A full-stack starter template with Hono backend, Vite frontend, and modern development tools.

## 🚀 Tech Stack

### Backend

- **Hono** - Fast web framework for Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js
- **Better Auth** - Complete open-source authentication solution
- **Prisma** - Next-generation ORM for TypeScript & Node.js
- **tRPC** - End-to-end typesafe APIs made easy
- **PostgreSQL** - Advanced open source relational database

### Frontend

- **React 19** - The library for web and native user interfaces
- **Vite** - Next generation frontend tooling
- **TanStack Router** - Fully type-safe router with built-in caching, built on TanStack Query
- **Tailwind CSS** - A utility-first CSS framework
- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind CSS

### Development Tools

- **TypeScript** - JavaScript with syntax for types
- **ESLint** - Tool for identifying and reporting on patterns in ECMAScript/JavaScript code
- **pnpm** - Fast, disk space efficient package manager

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (package manager)
- **PostgreSQL** database (or cloud database like Neon/Supabase)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/renaldyakb/stack-hono-vite-starter.git
   cd stack-hono-vite-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment file and configure it:

   ```bash
   cp apps/backend/.env.example apps/backend/.env
   ```

   Fill in the required values in `apps/backend/.env`:

   ```env
   # Better Auth Configuration
   BETTER_AUTH_SECRET=your-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000  # Base URL of your app
   TRUSTED_ORIGIN=http://localhost:5173   # Base URL for frontend

   # Database Configuration (using Neon)
   DATABASE_URL=postgresql://username:password@hostname/database

   # If using Supabase, add:
   DIRECT_URL=postgresql://username:password@hostname/database
   ```

4. **Set up the database**

   ```bash
   cd apps/backend
   pnpm prisma migrate dev
   ```

## 🚀 Running the Project

### Development

Run both backend and frontend simultaneously:

```bash
pnpm dev
```

This will start:

- Backend server on `http://localhost:3000`
- Frontend dev server on `http://localhost:5173`

### Individual Services

**Backend only:**

```bash
pnpm dev:backend
```

**Frontend only:**

```bash
pnpm dev:frontend
```

## 📁 Project Structure

```
stack-hono-vite-starter/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── auth.ts          # Better Auth configuration
│   │   │   │   ├── db.ts            # Database connection
│   │   │   │   └── trpc/            # tRPC configuration
│   │   │   ├── routes/
│   │   │   │   └── hello.ts         # API routes
│   │   │   ├── app.ts               # Hono app setup
│   │   │   └── index.ts             # Server entry point
│   │   ├── prisma/
│   │   │   ├── schema.prisma        # Database schema
│   │   │   └── migrations/          # Database migrations
│   │   └── package.json
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/              # shadcn/ui components
│       │   │   └── Navigation.tsx   # Navigation component
│       │   ├── lib/
│       │   │   ├── auth-client.ts   # Auth client configuration
│       │   │   └── trpc-client.ts   # tRPC client
│       │   ├── pages/               # TanStack Router pages
│       │   │   ├── auth/            # Authentication pages
│       │   │   ├── dashboard/       # Dashboard pages
│       │   │   └── users/           # User management pages
│       │   └── main.tsx             # React entry point
│       ├── components.json          # shadcn/ui configuration
│       └── package.json
├── package.json                      # Root package.json
└── pnpm-lock.yaml                    # pnpm lock file
```

## 🔧 Available Scripts

### Root Scripts

- `pnpm dev` - Start both backend and frontend in development mode
- `pnpm dev:backend` - Start backend only
- `pnpm dev:frontend` - Start frontend only

### Backend Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Frontend Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🔐 Authentication

This starter uses Better Auth for authentication with the following features:

- Email and password authentication
- Session management
- Type-safe authentication state

## 🗄️ Database

The project uses Prisma ORM with PostgreSQL. The schema includes:

- User authentication tables (managed by Better Auth)
- Custom tables can be added in `apps/backend/prisma/schema.prisma`

## 🎨 UI Components

The frontend uses shadcn/ui components built on top of:

- Radix UI primitives
- Tailwind CSS
- Lucide React icons

## 📝 API

The backend provides a tRPC API with end-to-end type safety:

- Type-safe API calls
- Automatic client generation
- Runtime type validation

## 🚀 Deployment

### Backend

The Hono backend can be deployed to various platforms:

- Cloudflare Workers
- Vercel
- Netlify Functions
- AWS Lambda
- Node.js servers

### Frontend

The Vite frontend can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

Happy coding! 🎉
