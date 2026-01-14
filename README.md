# Direct Booking Website

A production-ready web application foundation built with Next.js, Supabase, and Vercel.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase Postgres
- **Auth**: Supabase Auth
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes
│   │   ├── health/         # Health check endpoint
│   │   ├── db-health/      # Database health endpoint
│   │   └── me/             # Protected user endpoint
│   └── auth/               # Authentication pages
│       ├── login/          # Login/signup page
│       └── callback/       # OAuth callback handler
├── components/             # React components
├── lib/                    # Shared libraries
│   └── supabase/           # Supabase client configuration
└── services/               # Business logic layer (modular, extractable)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase account

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Fill in your Supabase credentials in `.env.local`

5. Run the database migration in Supabase SQL Editor:
   ```sql
   -- See: supabase/migrations/001_health_checks.sql
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

| Endpoint | Description | Auth Required |
|----------|-------------|---------------|
| `GET /api/health` | Application health check | No |
| `GET /api/db-health` | Database connectivity check | No |
| `GET /api/me` | Get current user info | Yes |

## Environment Variables

| Variable | Description | Exposed to Client |
|----------|-------------|-------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | **No** |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## Architecture Notes

The `/src/services/` directory contains a modular service layer that encapsulates business logic. This design allows:

- Easy extraction to a separate backend if needed
- Clear separation of concerns
- Testable business logic
- Framework-agnostic code

## License

Private
