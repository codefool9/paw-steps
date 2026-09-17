'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DogFace from '@/components/DogFace';
import { BackIcon, StarIcon, BoneIcon, CheckCircleIcon, PawIcon, TrophyIcon, TargetIcon, LightningIcon, ChevronRightIcon } from '@/components/Icon';
import { FREE_COURSES } from '@/lib/courses';

const levelColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const catIcon: Record<string, React.ReactNode> = {
  Obedience: <BoneIcon size={11}/>,
  Tricks:    <TrophyIcon size={11}/>,
  Hunting:   <TargetIcon size={11}/>,
  Agility:   <LightningIcon size={11}/>,
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={12} className={i < Math.round(rating) ? 'text-amber-400' : 'text-amber-200'}/>
      ))}
    </div>
  );
}

function CourseContent() {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get('id') ?? '0', 10);
  const course = FREE_COURSES.find(c => c.id === id) ?? FREE_COURSES[0];
  const totalMinutes = course.lessonList.reduce((sum, l) => sum + parseInt(l.duration), 0);

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/courses" className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-700">
          <BackIcon size={18}/>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Course Detail</h1>
        <Link href="/home" className="text-sm font-semibold text-amber-600">Home</Link>
      </div>

      {/* Hero */}
      <div className="shrink-0 bg-gradient-to-br from-amber-300 to-amber-400 px-5 py-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="rounded-full bg-white/30 p-2">
            <DogFace breed={course.breed} size={72}/>
          </div>
        </div>
        <h2 className="text-2xl font-extrabold text-amber-900">{course.title}</h2>
        <p className="mt-1 text-sm font-medium text-amber-800">
          {course.lessonCount} lessons · {course.weeks} weeks · {totalMinutes} min total
        </p>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <Stars rating={course.rating}/>
          <span className="text-sm font-bold text-amber-900">{course.rating}</span>
          <span className="text-xs text-amber-700">({course.reviews} reviews)</span>
        </div>
      </div>

      {/* Badges */}
      <div className="shrink-0 flex gap-2 px-5 py-3 bg-white border-b border-amber-100">
        <span className="flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
          {catIcon[course.category]}{course.category}
        </span>
        <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${levelColors[course.level]}`}>
          <CheckCircleIcon size={11}/>{course.level}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
          <PawIcon size={11}/>{course.ageNote}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-5">

        {/* Progress */}
        <div className="mb-5 rounded-2xl bg-white p-4 border border-amber-100 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500">0 / {course.lessonCount} lessons</span>
            <div className="flex items-center gap-1">
              <StarIcon size={11} className="text-amber-500"/>
              <span className="text-xs font-semibold text-amber-600">+{course.xpReward} XP on completion</span>
            </div>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
            <div className="h-full w-0 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Lesson list */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
          {course.lessonList.map((lesson, i) => (
            <div
              key={lesson.num}
              className={`flex items-center gap-4 px-4 py-3.5 ${i < course.lessonList.length - 1 ? 'border-b border-amber-50' : ''}`}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-amber-300 bg-amber-50">
                <span className="text-[11px] font-bold text-amber-600">{lesson.num}</span>
              </div>
              <span className="flex-1 text-sm text-stone-700 leading-tight">{lesson.title}</span>
              <span className="shrink-0 text-[11px] font-medium text-stone-400">{lesson.duration}</span>
            </div>
          ))}
        </div>

        {/* Go Premium upgrade card */}
        <div className="rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <StarIcon size={16} className="text-amber-500"/>
            <p className="text-sm font-extrabold text-amber-900">Want more? Go Premium</p>
          </div>
          <div className="mb-3 flex flex-col gap-1">
            {[
              'HD video walkthroughs for every lesson',
              'Weekly check-ins with a certified trainer',
              'Completion certificate for your pup',
            ].map(f => (
              <div key={f} className="flex items-center gap-1.5">
                <CheckCircleIcon size={11} className="text-green-500 shrink-0"/>
                <p className="text-[11px] text-stone-500">{f}</p>
              </div>
            ))}
          </div>
          <Link href="/courses">
            <div className="flex items-center justify-between rounded-xl bg-amber-600 px-4 py-2.5">
              <span className="text-xs font-bold text-white">Browse Premium Courses</span>
              <ChevronRightIcon size={16} className="text-white"/>
            </div>
          </Link>
        </div>

      </div>

      {/* Sticky CTA */}
      <div className="shrink-0 px-5 pb-4 pt-3 bg-amber-50 border-t border-amber-200">
        <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-amber-600 py-4 font-bold text-white shadow-md active:bg-amber-700">
          <PawIcon size={18}/>
          Start Course
        </button>
      </div>

    </div>
  );
}

export default function Course() {
  return (
    <Suspense>
      <CourseContent/>
    </Suspense>
  );
}
