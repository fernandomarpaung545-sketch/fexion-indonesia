'use client';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Award, MessageSquare, UserPlus } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  disciplines: string[];
  yearsExperience: number;
  memberNumber: string;
  memberSince: string;
  avatar?: string;
  isVerified?: boolean;
}

interface MemberCardProps {
  member: Member;
  index?: number;
}

const getInitials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

const avatarColors = [
  'bg-slate-600', 'bg-indigo-600', 'bg-teal-600',
  'bg-rose-600', 'bg-violet-600', 'bg-sky-600',
];

const getAvatarColor = (name: string) =>
  avatarColors[name.charCodeAt(0) % avatarColors.length];

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white dark:bg-navy-900 border border-gray-100 dark:border-navy-700 rounded-2xl p-5 group hover:shadow-md hover:border-gray-200 dark:hover:border-navy-600 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className={`w-12 h-12 rounded-xl ${getAvatarColor(member.name)} flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">{getInitials(member.name)}</span>
          </div>
          {member.isVerified && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
              <Award size={10} className="text-white" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{member.title}</p>
            </div>
            <span className="text-gray-300 dark:text-gray-600 text-xs font-mono flex-shrink-0">{member.memberNumber}</span>
          </div>

          {/* Company & Location */}
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <Briefcase size={11} /> {member.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {member.location}
            </span>
          </div>

          {/* Disciplines — clean neutral tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {member.disciplines.slice(0, 3).map(d => (
              <span
                key={d}
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-navy-700"
              >
                {d}
              </span>
            ))}
            {member.disciplines.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-xs bg-gray-100 dark:bg-navy-800 text-gray-400 border border-gray-200 dark:border-navy-700">
                +{member.disciplines.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-400 dark:text-gray-500 text-xs">
              {member.yearsExperience} yrs exp · Member since {member.memberSince}
            </span>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-crimson-50 dark:hover:bg-crimson-900/20 text-gray-400 hover:text-crimson-500 transition-colors" title="Connect">
                <UserPlus size={12} />
              </button>
              <button className="p-1.5 rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-400 hover:text-indigo-500 transition-colors" title="Message">
                <MessageSquare size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
