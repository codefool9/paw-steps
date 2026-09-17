'use client';
import Link from 'next/link';
import { useState } from 'react';

const CATEGORIES = ['All', 'Obedience', 'Tricks', 'Hunting', 'Agility'] as const;
type Category = typeof CATEGORIES[number];

const freeCourses = [
  { emoji: '🐶', title: 'Puppy Basics',       category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.9, reviews: 312 },
  { emoji: '🦮', title: 'Leash Training',      category: 'Obedience', level: 'Medium',   weeks: 4, lessons: 10, rating: 4.8, reviews: 204 },
  { emoji: '🐾', title: 'Sit, Stay, Come',     category: 'Obedience', level: 'Easy',     weeks: 2, lessons: 6,  rating: 4.9, reviews: 418 },
  { emoji: '🏠', title: 'House Training 101',  category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 7,  rating: 4.7, reviews: 189 },
  { emoji: '⭐', title: 'Basic Tricks Pack',   category: 'Tricks',    level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.8, reviews: 276 },
  { emoji: '🎪', title: 'Advanced Tricks',     category: 'Tricks',    level: 'Medium',   weeks: 5, lessons: 12, rating: 4.6, reviews: 94  },
  { emoji: '🦆', title: 'Hunting Intro',       category: 'Hunting',   level: 'Advanced', weeks: 8, lessons: 15, rating: 4.9, reviews: 67  },
  { emoji: '🐦', title: 'Bird Dog Basics',     category: 'Hunting',   level: 'Advanced', weeks: 6, lessons: 12, rating: 4.8, reviews: 52  },
  { emoji: '🏃', title: 'Agility Foundations', category: 'Agility',   level: 'Medium',   weeks: 6, lessons: 10, rating: 4.7, reviews: 131 },
];

const premiumCourses = [
  {
    emoji: '🏆', title: 'Advanced Obedience Pro',
    business: 'K9 Academy',   businessEmoji: '🎓',
    category: 'Obedience', weeks: 6, lessons: 20, price: '$29.99',
    features: ['HD video lessons', 'Weekly instructor check-ins', 'Certificate on completion'],
  },
  {
    emoji: '🎯', title: 'Pro Agility Training',
    business: 'AgilityX',     businessEmoji: '⚡',
    category: 'Agility',   weeks: 8, lessons: 24, price: '$39.99',
    features: ['Course layout videos', 'Live Q&A sessions', 'Equipment guide'],
  },
  {
    emoji: '🦮', title: 'Therapy Dog Certification',
    business: 'PawCare',      businessEmoji: '💙',
    category: 'Obedience', weeks: 10, lessons: 30, price: '$49.99',
    features: ['Vet-reviewed curriculum', 'Certification prep', '1-on-1 coaching call'],
  },
];

const levelColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700', Medium: 'bg-yellow-100 text-yellow-700', Advanced: 'bg-red-100 text-red-700',
};

function Stars({ rating }: { rating: number }) {
  return <span className="text-amber-400 text-xs">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</span>;
}

export default function Courses() {
  const [active, setActive] = useState<Category>('All');
  const filtered = freeCourses.filter((c) => active === 'All' || c.category === active);

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/home" className="flex items-center gap-1.5 text-amber-700">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Home</span>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Browse Courses</h1>
        <div className="w-14" />
      </div>

      {/* Filter tabs */}
      <div className="shrink-0 border-b border-amber-200 bg-white px-5 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === cat ? 'bg-amber-600 text-white shadow-sm' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-4">

        {/* Free courses */}
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">
          Free · {filtered.length} course{filtered.length !== 1 ? 's' : ''}
        </p>
        <div className="mb-6 space-y-3">
          {filtered.map((course) => (
            <Link key={course.title} href="/course">
              <div className="flex cursor-pointer items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm active:bg-amber-50">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                  {course.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-bold leading-tight text-amber-900">{course.title}</p>
                  <div className="mb-1 flex flex-wrap gap-1">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelColors[course.level]}`}>{course.level}</span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">{course.weeks} wks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Stars rating={course.rating} />
                    <span className="text-[10px] text-stone-400">({course.reviews})</span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">FREE</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Premium courses */}
        {(active === 'All' || premiumCourses.some(p => p.category === active)) && (
          <>
            <div className="mb-3 flex items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">⭐ Premium</p>
              <span className="text-[10px] font-medium text-amber-600">Expert-led · Videos · Check-ins</span>
            </div>
            <div className="space-y-3 pb-4">
              {premiumCourses
                .filter(p => active === 'All' || p.category === active)
                .map((course) => (
                  <Link key={course.title} href="/course">
                    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
                      {/* Business + lock */}
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">{course.businessEmoji}</span>
                          <span className="text-[11px] font-semibold text-amber-700">{course.business}</span>
                        </div>
                        <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white">⭐ PREMIUM</span>
                      </div>
                      {/* Title row */}
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                          {course.emoji}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-amber-900">{course.title}</p>
                          <p className="text-[11px] text-stone-500">{course.weeks} wks · {course.lessons} video lessons</p>
                        </div>
                      </div>
                      {/* Features */}
                      <div className="mb-3 flex flex-col gap-0.5">
                        {course.features.map((f) => (
                          <p key={f} className="text-[11px] text-stone-500">✓ {f}</p>
                        ))}
                      </div>
                      {/* Unlock CTA */}
                      <div className="flex items-center justify-between rounded-xl bg-amber-600 px-4 py-2.5">
                        <span className="text-xs font-bold text-white">🔒 Unlock Course</span>
                        <span className="text-sm font-extrabold text-white">{course.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
