'use client';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DogFace from '@/components/DogFace';
import CatFace from '@/components/CatFace';
import { BoneIcon, TrophyIcon, TargetIcon, LightningIcon, StarIcon, LockIcon, BackIcon, CheckCircleIcon } from '@/components/Icon';
import { FREE_COURSES, PREMIUM_COURSES, FreeCourse } from '@/lib/courses';

function CourseAvatar({ course, size }: { course: FreeCourse; size: number }) {
  return course.petType === 'cat'
    ? <CatFace breed={course.breed} size={size}/>
    : <DogFace breed={course.breed} size={size}/>;
}

const CATEGORIES = ['All', 'Obedience', 'Tricks', 'Hunting', 'Agility'] as const;
type Category = typeof CATEGORIES[number];

const levelColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

// Courses reviewed by a CPDT-KA certified trainer
const VERIFIED_IDS = new Set([0, 1, 2, 3, 5, 8]);

const catIcon: Record<string, React.ReactNode> = {
  Obedience: <BoneIcon      size={12}/>,
  Tricks:    <TrophyIcon    size={12}/>,
  Hunting:   <TargetIcon    size={12}/>,
  Agility:   <LightningIcon size={12}/>,
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={10} className={i < Math.round(rating) ? 'text-amber-400' : 'text-stone-200'}/>
      ))}
    </div>
  );
}

function EmptyState({ category }: { category: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-amber-100 bg-white p-8 text-center">
      <DogFace breed="Beagle" size={64}/>
      <p className="text-sm font-bold text-amber-900">No free courses in {category} yet</p>
      <p className="text-xs text-stone-400">Check our Premium section below for expert-led options</p>
    </div>
  );
}

function CoursesContent() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('category') ?? 'All';
  const initial: Category = (CATEGORIES as readonly string[]).includes(raw) ? raw as Category : 'All';
  const [active, setActive] = useState<Category>(initial);
  const [unlockBreed, setUnlockBreed] = useState<string | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category') ?? 'All';
    if ((CATEGORIES as readonly string[]).includes(cat)) setActive(cat as Category);
  }, [searchParams]);

  const petType = (typeof localStorage !== 'undefined' ? localStorage.getItem('pawsteps_pet_type') : null) ?? 'dog';
  const filtered = FREE_COURSES.filter(c =>
    (c.petType === petType || c.petType === 'both') &&
    (active === 'All' || c.category === active)
  );
  const filteredPremium = PREMIUM_COURSES.filter(p => active === 'All' || p.category === active);

  function handleUnlock(breed: string) {
    const mode = typeof localStorage !== 'undefined' ? localStorage.getItem('pawsteps_mode') : null;
    if (mode !== 'account') setUnlockBreed(breed);
  }

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
                active === cat ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700 active:bg-amber-200'
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

        {filtered.length === 0 ? (
          <div className="mb-6"><EmptyState category={active}/></div>
        ) : (
          <div className="mb-6 space-y-2.5">
            {filtered.map(course => (
              <Link key={course.id} href={`/course?id=${course.id}`}>
                <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white p-3 shadow-sm active:bg-amber-50 transition-colors">
                  <div className="shrink-0 rounded-xl bg-amber-50 p-1">
                    <CourseAvatar course={course} size={52}/>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex items-center gap-1.5">
                      <p className="text-sm font-bold leading-tight text-amber-900">{course.title}</p>
                      {VERIFIED_IDS.has(course.id) && (
                        <span className="shrink-0 rounded-full bg-blue-100 px-1.5 py-0.5 text-[8px] font-bold text-blue-700">CPDT-KA</span>
                      )}
                    </div>
                    <div className="mb-1 flex flex-wrap gap-1">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelColors[course.level]}`}>{course.level}</span>
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">{course.weeks} wks</span>
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
        )}

        {/* Premium courses */}
        {filteredPremium.length > 0 && (
          <>
            <div className="mb-3 flex items-center gap-2">
              <StarIcon size={14} className="text-amber-500"/>
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Premium</p>
              <span className="text-[10px] text-stone-400">Expert-led · Video · Check-ins</span>
            </div>
            <div className="space-y-3 pb-4">
              {filteredPremium.map(course => (
                <div key={course.id} className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
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
                      <p className="text-[11px] text-stone-500">{course.weeks} wks · {course.lessonCount} video lessons</p>
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
                  <button
                    onClick={() => handleUnlock(course.breed)}
                    className="w-full flex items-center justify-between rounded-xl bg-amber-600 px-4 py-2.5 active:bg-amber-700 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-white">
                      <LockIcon size={13}/>
                      <span className="text-xs font-bold">Unlock</span>
                    </div>
                    <span className="text-sm font-extrabold text-white">{course.price}</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

      </div>

      {/* Premium unlock prompt for guest users */}
      {unlockBreed && (
        <div className="absolute inset-0 flex items-end justify-center bg-black/40 pb-10 px-6">
          <div className="w-full rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center gap-3">
              <DogFace breed={unlockBreed} size={48}/>
              <div>
                <p className="text-sm font-bold text-amber-900">Create a free account</p>
                <p className="text-xs text-stone-500">Sign up to unlock premium courses and track your progress</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setUnlockBreed(null)}
                className="flex-1 rounded-xl border border-amber-200 py-2.5 text-sm font-semibold text-amber-700 active:bg-amber-50"
              >
                Not now
              </button>
              <Link href="/setup" className="flex-1">
                <div className="w-full rounded-xl bg-amber-600 py-2.5 text-center text-sm font-bold text-white active:bg-amber-700">
                  Sign Up Free
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function Courses() {
  return (
    <Suspense>
      <CoursesContent/>
    </Suspense>
  );
}
