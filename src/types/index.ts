// src/types/index.ts

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MODERATOR' | 'MEMBER' | 'GUEST'
export type MembershipType = 'FREE' | 'PROFESSIONAL' | 'CORPORATE' | 'STUDENT'
export type TrainingCategory =
  | 'FORMATION_EVALUATION'
  | 'PETROPHYSICS'
  | 'WELLSITE_GEOLOGY'
  | 'MUD_LOGGING'
  | 'GEOSTEERING'
  | 'RESERVOIR_GEOLOGY'
  | 'CCS_ENERGY_TRANSITION'
  | 'DRILLING_SUBSURFACE'

export type EventType = 'CONFERENCE' | 'WEBINAR' | 'WORKSHOP' | 'TECHNICAL_SHARING' | 'NETWORKING' | 'FIELD_TRIP'
export type ArticleCategory = 'TECHNICAL_ARTICLE' | 'INDUSTRY_INSIGHT' | 'CASE_STUDY' | 'TUTORIAL' | 'PAPER' | 'PRESENTATION' | 'NEWS'

export interface UserProfile {
  id: string
  name: string | null
  email: string | null
  image: string | null
  role: Role
  fullName: string | null
  phone: string | null
  company: string | null
  jobTitle: string | null
  location: string | null
  bio: string | null
  linkedinUrl: string | null
  expertise: string[]
  yearsExperience: number | null
  membershipType: MembershipType
  memberNumber: string | null
  createdAt: Date
}

export interface Training {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string | null
  category: TrainingCategory
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT'
  duration: string
  language: string
  thumbnail: string | null
  trainerName: string
  trainerTitle: string | null
  trainerCompany: string | null
  trainerPhoto: string | null
  scheduleStart: Date | null
  scheduleEnd: Date | null
  location: string | null
  isOnline: boolean
  maxParticipants: number | null
  priceRegular: number
  priceEarlyBird: number | null
  earlyBirdDeadline: Date | null
  isFree: boolean
  status: 'DRAFT' | 'PUBLISHED' | 'FULL' | 'COMPLETED' | 'CANCELLED'
  isFeatured: boolean
  syllabus: unknown
  prerequisites: string[]
  includes: string[]
  _count?: { registrations: number }
}

export interface Event {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string | null
  type: EventType
  thumbnail: string | null
  bannerImage: string | null
  startDate: Date
  endDate: Date
  timezone: string
  venue: string | null
  address: string | null
  city: string | null
  isOnline: boolean
  meetingLink: string | null
  maxAttendees: number | null
  registrationDeadline: Date | null
  priceRegular: number
  isFree: boolean
  agenda: unknown
  speakers: unknown
  status: 'DRAFT' | 'PUBLISHED' | 'ONGOING' | 'COMPLETED' | 'CANCELLED'
  isFeatured: boolean
  _count?: { registrations: number }
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  coverImage: string | null
  category: ArticleCategory
  tags: string[]
  status: 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED'
  isFeatured: boolean
  viewCount: number
  author: { id: string; name: string | null; image: string | null; jobTitle?: string | null }
  publishedAt: Date | null
  createdAt: Date
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface DashboardStats {
  totalMembers: number
  totalEvents: number
  totalTrainings: number
  totalRevenue: number
  newMembersThisMonth: number
  upcomingEvents: number
  activeTrainings: number
}
