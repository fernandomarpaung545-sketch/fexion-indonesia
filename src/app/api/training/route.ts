// src/app/api/training/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const search = searchParams.get('q')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    const where = {
      status: 'PUBLISHED' as const,
      ...(category && { category: category as 'PETROPHYSICS' }),
      ...(level && { level: level as 'BEGINNER' }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' as const } },
          { shortDescription: { contains: search, mode: 'insensitive' as const } },
          { trainerName: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    }

    const [trainings, total] = await Promise.all([
      prisma.training.findMany({
        where,
        orderBy: [{ isFeatured: 'desc' }, { scheduleStart: 'asc' }],
        skip,
        take: limit,
        include: {
          _count: { select: { registrations: true } },
        },
      }),
      prisma.training.count({ where }),
    ])

    return NextResponse.json({
      data: trainings,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch trainings' }, { status: 500 })
  }
}
