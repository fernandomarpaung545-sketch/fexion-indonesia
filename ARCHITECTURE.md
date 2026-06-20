# GOFEW Indonesia — Platform Architecture

## Project Structure

```
gofew-indonesia/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (public)/               # Public routes
│   │   │   ├── page.tsx            # Home
│   │   │   ├── about/page.tsx
│   │   │   ├── training/page.tsx
│   │   │   ├── events/page.tsx
│   │   │   ├── community/page.tsx
│   │   │   ├── knowledge/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── (auth)/                 # Auth routes
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (admin)/                # Protected admin
│   │   │   └── admin/
│   │   │       ├── page.tsx        # Dashboard
│   │   │       ├── users/page.tsx
│   │   │       ├── events/page.tsx
│   │   │       ├── training/page.tsx
│   │   │       ├── payments/page.tsx
│   │   │       └── content/page.tsx
│   │   ├── api/                    # API Routes
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── users/route.ts
│   │   │   ├── events/route.ts
│   │   │   ├── training/route.ts
│   │   │   ├── payments/route.ts
│   │   │   └── contact/route.ts
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AdminSidebar.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── FeaturedTraining.tsx
│   │   │   ├── UpcomingEvents.tsx
│   │   │   ├── Disciplines.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Partners.tsx
│   │   ├── training/
│   │   │   ├── TrainingCard.tsx
│   │   │   ├── TrainingFilter.tsx
│   │   │   └── RegistrationModal.tsx
│   │   ├── events/
│   │   │   ├── EventCard.tsx
│   │   │   ├── CountdownTimer.tsx
│   │   │   └── EventModal.tsx
│   │   ├── community/
│   │   │   ├── MemberCard.tsx
│   │   │   └── DirectoryFilter.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Modal.tsx
│   │       └── ThemeToggle.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useAuth.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── dummy.ts
├── public/
│   └── images/
├── prisma/
│   └── schema.prisma
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── .env.example
├── Dockerfile
└── docker-compose.yml
```
