// src/app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = registerSchema.parse(body)

    const existing = await prisma.user.findUnique({ where: { email: data.email } })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }

    const hashed = await bcrypt.hash(data.password, 12)

    // Generate member number
    const count = await prisma.user.count()
    const memberNumber = `GEOFERA-${String(count + 1).padStart(5, '0')}`

    const user = await prisma.user.create({
      data: {
        fullName: data.fullName,
        name: data.fullName,
        email: data.email,
        password: hashed,
        phone: data.phone,
        company: data.company,
        jobTitle: data.jobTitle,
        memberNumber,
        status: 'ACTIVE', // Auto-approve for free membership
        role: 'MEMBER',
        membershipType: 'FREE',
      },
      select: { id: true, email: true, fullName: true, memberNumber: true },
    })

    return NextResponse.json({ data: user, message: 'Registration successful' }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
