import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const where: Record<string, unknown> = {};
    if (userId) where.userId = userId;

    const certificates = await prisma.certificate.findMany({
      where,
      include: {
        user: { select: { name: true, email: true, memberNumber: true } },
        training: { select: { title: true, level: true, category: true } },
      },
      orderBy: { issuedAt: 'desc' },
    });

    return NextResponse.json({ certificates });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, trainingId } = body;

    if (!userId || !trainingId) {
      return NextResponse.json({ error: 'userId and trainingId required' }, { status: 400 });
    }

    const [user, training] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.training.findUnique({ where: { id: trainingId } }),
    ]);

    if (!user || !training) {
      return NextResponse.json({ error: 'User or training not found' }, { status: 404 });
    }

    const count = await prisma.certificate.count();
    const certNumber = `CERT-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
    const verificationCode = `VER-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const certificate = await prisma.certificate.create({
      data: {
        certificateNumber: certNumber,
        verificationCode,
        title: `Certificate of Completion — ${training.title}`,
        userId,
        trainingId,
        issuedAt: new Date(),
      },
    });

    return NextResponse.json({ certificate }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to issue certificate' }, { status: 500 });
  }
}
