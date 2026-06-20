# GOFEW Indonesia — Deployment Guide

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Set environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# 3. Set up database
npx prisma generate
npx prisma migrate dev --name init

# 4. Seed with sample data
npx ts-node prisma/seed.ts

# 5. Run development server
npm run dev
```

Open http://localhost:3000

---

## Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- Supabase (PostgreSQL) project
- Google OAuth credentials
- LinkedIn OAuth credentials

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial GOFEW Indonesia platform"
git remote add origin https://github.com/yourusername/gofew-indonesia
git push -u origin main
```

2. **Create Vercel project**
   - Go to vercel.com → New Project → Import from GitHub
   - Select your repository

3. **Set environment variables in Vercel dashboard**
   - Copy all values from `.env.example`
   - Fill in your real credentials

4. **Database: Supabase**
   - Create a project at supabase.com
   - Copy the connection string to `DATABASE_URL`
   - Run: `npx prisma migrate deploy`

5. **Deploy**
   - Vercel auto-deploys on every push to `main`

---

## Docker Deployment

```bash
# Build and run with Docker Compose
cp .env.example .env
# Edit .env with your values

docker compose up --build -d

# Run migrations inside the container
docker compose exec app npx prisma migrate deploy
docker compose exec app npx ts-node prisma/seed.ts
```

Access at http://localhost:3000

---

## Database Setup (Manual PostgreSQL)

```sql
CREATE DATABASE gofew_db;
CREATE USER gofew WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE gofew_db TO gofew;
```

Then run:
```bash
npx prisma migrate deploy
```

---

## OAuth Setup

### Google OAuth
1. Go to console.cloud.google.com
2. Create a new project → APIs & Services → Credentials
3. Create OAuth 2.0 Client ID
4. Authorized redirect URIs: `https://yourdomain.com/api/auth/callback/google`

### LinkedIn OAuth
1. Go to linkedin.com/developers
2. Create an app
3. Add OAuth 2.0 redirect URL: `https://yourdomain.com/api/auth/callback/linkedin`

---

## Admin Access

After seeding, login at `/login` with:
- **Email**: admin@gofewindonesia.com
- **Password**: admin123!

Admin dashboard: `/admin`

---

## Project Structure Summary

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Home
│   ├── about/              # About GOFEW
│   ├── training/           # Training catalog
│   ├── events/             # Events
│   ├── community/          # Member directory
│   ├── knowledge/          # Knowledge center
│   ├── gallery/            # Photo/video gallery
│   ├── contact/            # Contact form
│   ├── login/              # Authentication
│   ├── register/           # Registration
│   ├── dashboard/          # Member dashboard
│   ├── admin/              # Admin dashboard + sub-pages
│   └── api/                # API routes
├── components/             # Reusable components
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Landing page sections
│   ├── training/           # Training components
│   ├── events/             # Event components
│   └── community/          # Community components
├── data/dummy.ts           # Sample content
├── lib/prisma.ts           # Database client
└── types/index.ts          # TypeScript types
```

---

## Key Features

| Feature | Status | Notes |
|---------|--------|-------|
| 8 public pages | ✅ Complete | Home, About, Training, Events, Community, Knowledge, Gallery, Contact |
| Admin dashboard | ✅ Complete | Users, Events, Training, Payments, Certificates |
| Member dashboard | ✅ Complete | Stats, registrations, certificates |
| Login / Register | ✅ Complete | Email + Google + LinkedIn OAuth |
| API routes | ✅ Complete | CRUD for all entities |
| Database schema | ✅ Complete | Prisma + PostgreSQL |
| Dark mode UI | ✅ Complete | Navy/Crimson/Gold design system |
| Mobile responsive | ✅ Complete | Tailwind CSS mobile-first |
| Docker ready | ✅ Complete | Dockerfile + docker-compose.yml |
| Vercel ready | ✅ Complete | next.config.ts + env.example |
| Seed data | ✅ Complete | Members, trainings, events |
