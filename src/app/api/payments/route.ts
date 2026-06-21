import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

type PaymentStatus = 'PENDING' | 'WAITING_CONFIRMATION' | 'CONFIRMED' | 'REJECTED' | 'REFUNDED' | 'CANCELLED';

const VALID_STATUSES: PaymentStatus[] = ['PENDING','WAITING_CONFIRMATION','CONFIRMED','REJECTED','REFUNDED','CANCELLED'];

const paymentSchema = z.object({
  userId: z.string(),
  amount: z.number().positive(),
  method: z.string().optional(),
  proofImage: z.string().url().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const statusParam = searchParams.get('status') as PaymentStatus | null;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = statusParam && VALID_STATUSES.includes(statusParam) ? { status: statusParam } : {};

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        include: { user: { select: { name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.payment.count({ where }),
    ]);

    return NextResponse.json({ payments, total });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch payments' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = paymentSchema.parse(body);

    const payment = await prisma.payment.create({
      data: {
        userId: data.userId,
        amount: data.amount,
        method: data.method,
        proofImage: data.proofImage,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status: 'PENDING' as any,
      },
    });

    return NextResponse.json({ payment }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { paymentId, status } = body;

    if (!VALID_STATUSES.includes(status as PaymentStatus)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const payment = await prisma.payment.update({
      where: { id: paymentId },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: { status: status as any },
    });

    return NextResponse.json({ payment });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update payment' }, { status: 500 });
  }
}
