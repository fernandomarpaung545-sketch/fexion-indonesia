import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding GOFEW Indonesia database...');

  const adminPassword = await bcrypt.hash('admin123!', 12);
  await prisma.user.upsert({
    where: { email: 'admin@gofewindonesia.com' },
    update: {},
    create: {
      email: 'admin@gofewindonesia.com',
      name: 'GOFEW Admin',
      password: adminPassword,
      role: 'ADMIN',
      status: 'ACTIVE',
      memberNumber: 'GOFEW-00001',
      jobTitle: 'Platform Administrator',
      company: 'GOFEW Indonesia',
      location: 'Jakarta',
      expertise: ['Formation Evaluation', 'Petrophysics'],
      membershipType: 'PROFESSIONAL',
    },
  });

  const memberPassword = await bcrypt.hash('member123!', 12);
  const members = [
    { email: 'budi.santoso@pertamina.com', name: 'Dr. Budi Santoso', jobTitle: 'Senior Petrophysicist', company: 'Pertamina EP', location: 'Jakarta', expertise: ['Petrophysics', 'Formation Evaluation'], yearsExperience: 18, memberNumber: 'GOFEW-00042' },
    { email: 'dewi.rahayu@medco.com', name: 'Ir. Dewi Rahayu', jobTitle: 'Wellsite Geologist', company: 'Medco E&P', location: 'Palembang', expertise: ['Wellsite Geology', 'Mud Logging'], yearsExperience: 12, memberNumber: 'GOFEW-00078' },
    { email: 'ahmad.fauzi@slb.com', name: 'Ahmad Fauzi, M.T.', jobTitle: 'Formation Evaluation Engineer', company: 'Schlumberger', location: 'Balikpapan', expertise: ['Formation Evaluation', 'Petrophysics'], yearsExperience: 9, memberNumber: 'GOFEW-00115' },
  ];

  for (const member of members) {
    await prisma.user.upsert({
      where: { email: member.email },
      update: {},
      create: {
        ...member,
        password: memberPassword,
        role: 'MEMBER',
        status: 'ACTIVE',
        membershipType: 'PROFESSIONAL',
      },
    });
  }

  await prisma.training.upsert({
    where: { slug: 'advanced-petrophysics-log-interpretation' },
    update: {},
    create: {
      title: 'Advanced Petrophysics: Log Interpretation Masterclass',
      slug: 'advanced-petrophysics-log-interpretation',
      description: 'A comprehensive 3-day masterclass covering advanced petrophysical log interpretation techniques for complex lithologies.',
      category: 'PETROPHYSICS',
      level: 'ADVANCED',
      duration: '3 Days',
      trainerName: 'Dr. Budi Santoso',
      trainerTitle: 'Senior Petrophysicist, Pertamina EP',
      scheduleStart: new Date('2026-07-14'),
      scheduleEnd: new Date('2026-07-16'),
      priceRegular: 2750000,
      priceEarlyBird: 2250000,
      maxParticipants: 50,
      status: 'PUBLISHED',
      isFeatured: true,
    },
  });

  await prisma.training.upsert({
    where: { slug: 'wellsite-geology-fundamentals' },
    update: {},
    create: {
      title: 'Wellsite Geology Fundamentals',
      slug: 'wellsite-geology-fundamentals',
      description: 'Essential skills for wellsite geologists covering cuttings description and real-time geological decision-making.',
      category: 'WELLSITE_GEOLOGY',
      level: 'BEGINNER',
      duration: '2 Days',
      trainerName: 'Ir. Dewi Rahayu',
      trainerTitle: 'Wellsite Geologist, Medco E&P',
      scheduleStart: new Date('2026-08-05'),
      scheduleEnd: new Date('2026-08-06'),
      priceRegular: 1800000,
      maxParticipants: 40,
      status: 'PUBLISHED',
      isFeatured: false,
    },
  });

  await prisma.event.upsert({
    where: { slug: 'gofew-mid-year-forum-2026' },
    update: {},
    create: {
      title: 'GOFEW Mid-Year Technical Forum 2026',
      slug: 'gofew-mid-year-forum-2026',
      description: 'Annual mid-year gathering of formation evaluation professionals for technical sharing and networking.',
      type: 'CONFERENCE',
      startDate: new Date('2026-07-28'),
      endDate: new Date('2026-07-28'),
      venue: 'Hotel Mulia',
      city: 'Jakarta',
      isOnline: false,
      maxAttendees: 200,
      priceRegular: 500000,
      status: 'PUBLISHED',
      isFeatured: true,
      registrationDeadline: new Date('2026-07-21'),
    },
  });

  await prisma.event.upsert({
    where: { slug: 'geosteering-well-placement-webinar' },
    update: {},
    create: {
      title: 'Geosteering & Well Placement Webinar',
      slug: 'geosteering-well-placement-webinar',
      description: 'Technical webinar on modern geosteering workflows and real-time well placement decisions using LWD data.',
      type: 'WEBINAR',
      startDate: new Date('2026-06-20'),
      endDate: new Date('2026-06-20'),
      isOnline: true,
      meetingLink: 'https://zoom.us/j/example',
      maxAttendees: 100,
      priceRegular: 0,
      isFree: true,
      status: 'PUBLISHED',
      isFeatured: false,
      registrationDeadline: new Date('2026-06-18'),
    },
  });

  console.log('✅ Seed complete!');
  console.log('   Admin: admin@gofewindonesia.com / admin123!');
  console.log('   Member: ahmad.fauzi@slb.com / member123!');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
