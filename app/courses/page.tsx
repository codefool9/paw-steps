'use client';
import Link from 'next/link';
import { useState } from 'react';
import DogFace from '@/components/DogFace';
import { BoneIcon, TrophyIcon, TargetIcon, LightningIcon, StarIcon, LockIcon, BackIcon, CheckCircleIcon } from '@/components/Icon';

const CATEGORIES = ['All', 'Obedience', 'Tricks', 'Hunting', 'Agility'] as const;
type Category = typeof CATEGORIES[number];

// Breed face for each course card — gives every card a unique illustrated dog
const freeCourses = [
  { breed: 'Beagle',            title: 'Puppy Basics',        category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.9, reviews: 312 },
  { breed: 'Labrador',          title: 'Leash Training',       category: 'Obedience', level: 'Medium',   weeks: 4, lessons: 10, rating: 4.8, reviews: 204 },
  { breed: 'Golden Retriever',  title: 'Sit, Stay, Come',      category: 'Obedience', level: 'Easy',     weeks: 2, lessons: 6,  rating: 4.9, reviews: 418 },
  { breed: 'Bulldog',           title: 'House Training 101',   category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 7,  rating: 4.7, reviews: 189 },
  { breed: 'Poodle',            title: 'Basic Tricks Pack',    category: 'Tricks',    level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.8, reviews: 276 },
  { breed: 'Border Collie',     title: 'Advanced Tricks',      category: 'Tricks',    level: 'Medium',   weeks: 5, lessons: 12, rating: 4.6, reviews: 94  },
  { breed: 'Vizsla',            title: 'Hunting Intro',        category: 'Hunting',   level: 'Advanced', weeks: 8, lessons: 15, rating: 4.9, reviews: 67  },
  { breed: 'Weimaraner',        title: 'Bird Dog Basics',      category: 'Hunting',   level: 'Advanced', weeks: 6, lessons: 12, rating: 4.8, reviews: 52  },
  { breed: 'Australian Shepherd', title: 'Agility Foundations',category: 'Agility',   level: 'Medium',   weeks: 6, lessons: 10, rating: 4.7, reviews: 131 },
];

const premiumCourses = [
  {
    breed: 'German Shepherd', title: 'Advanced Obedience Pro',
    business: 'K9 Academy',
    category: 'Obedience', weeks: 6, lessons: 20, price: '$29.99',
    features: ['HD video lessons', 'Weekly instructor check-ins', 'Certificate'],
  },
  {
    breed: 'Australian Shepherd', title: 'Pro Agility Training',
    business: 'AgilityX',
    category: 'Agility', weeks: 8, lessons: 24, price: '$39.99',
    features: ['Course layout videos', 'Live Q&A sessions', 'Equipment guide'],
  },
  {
    breed: 'Golden Retriever', title: 'Therapy Dog Certification',
    business: 'PawCare',
    category: 'Obedience', weeks: 10, lessons: 30, price: '$49.99',
    features: ['Vet-reviewed curriculum', 'Certification prep', '1-on-1 coaching'],
  },
];

const levelColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700', Medium: 'bg-yellow-100 text-yellow-700', Advanced: 'bg-red-100 text-red-700',
};

const catIcon: Record<string, React.ReactNode> = {
  Obedience: <BoneIcon     size={12}/>,
  Tricks:    <TrophyIcon   size={12}/>,
  Hunting:   <TargetIcon   size={12}/>,
  Agility:   <LightningIcon size={12}/>,
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={10} className={i < Math.round(rating) ? 'text-amber-400' : 'text-stone-200'}/>
      ))}
    </div>
  );
}

export default function Courses() {
  const [active, setActive] = useState<Category>('All');
  const filtered = freeCourses.filter(c => active === 'All' || c.category === active);

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/home" className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-700">
          <BackIcon size={18}/>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Courses</h1>
        <div className="w-8"/>
      </div>

      {/* Filter tabs */}
      <div className="shrink-0 border-b border-amber-200 bg-white px-5 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                active === cat ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'
              }`}
            >
              {cat !== 'All' && <span className={active === cat ? 'text-white' : 'text-amber-600'}>{catIcon[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-4">

        {/* Free courses */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Free</p>
          <span className="text-[10px] text-stone-400">{filtered.length} course{filtered.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="mb-6 space-y-2.5">
          {filtered.map(course => (
            <Link key={course.title} href="/course">
              <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white p-3 shadow-sm active:bg-amber-50">
                <div className="shrink-0 rounded-xl bg-amber-50 p-1">
                  <DogFace breed={course.breed} size={52}/>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-bold leading-tight text-amber-900">{course.title}</p>
                  <div className="mb-1 flex flex-wrap gap-1">
                    <span className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelColors[course.level]}`}>
                      {course.level}
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                      {course.weeks} wks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Stars rating={course.rating}/>
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
              <StarIcon size={14} className="text-amber-500"/>
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Premium</p>
              <span className="text-[10px] text-stone-400">Expert-led · Video · Check-ins</span>
            </div>
            <div className="space-y-3 pb-4">
              {premiumCourses
                .filter(p => active === 'All' || p.category === active)
                .map(course => (
                  <Link key={course.title} href="/course">
                    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-amber-700">{course.business}</span>
                        <div className="flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5">
                          <StarIcon size={9} className="text-white"/>
                          <span className="text-[9px] font-bold text-white">PREMIUM</span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center gap-3">
                        <div className="shrink-0 rounded-xl bg-amber-100 p-1">
                          <DogFace breed={course.breed} size={48}/>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-amber-900">{course.title}</p>
                          <p className="text-[11px] text-stone-500">{course.weeks} wks · {course.lessons} video lessons</p>
                        </div>
                      </div>
                      <div className="mb-3 flex flex-col gap-0.5">
                        {course.features.map(f => (
                          <div key={f} className="flex items-center gap-1.5">
                            <CheckCircleIcon size={11} className="text-green-500 shrink-0"/>
                            <p className="text-[11px] text-stone-500">{f}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-amber-600 px-4 py-2.5">
                        <div className="flex items-center gap-1.5 text-white">
                          <LockIcon size={13}/>
                          <span className="text-xs font-bold">Unlock</span>
                        </div>
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
