'use client';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PetFace from '@/components/PetFace';
import { BackIcon, PawIcon, CheckCircleIcon, LockIcon } from '@/components/Icon';
import { FREE_COURSES } from '@/lib/courses';
import { playClickSound } from '@/lib/clickSound';

function LessonContent() {
  const searchParams  = useSearchParams();
  const [clickerOpen, setClickerOpen] = useState(false);
  const [clicks,      setClicks]      = useState(0);
  const [pulse,       setPulse]       = useState(false);
  const courseId  = parseInt(searchParams.get('course') ?? '0', 10);
  const lessonNum = parseInt(searchParams.get('lesson') ?? '1', 10);
  const course    = FREE_COURSES.find(c => c.id === courseId) ?? FREE_COURSES[0];
  const lesson    = course.lessonList.find(l => l.num === lessonNum) ?? course.lessonList[0];
  const isLast    = lessonNum >= course.lessonList.length;
  const nextLesson = lessonNum + 1;
  const isCat     = course.petType === 'cat';

  function handleClick() {
    playClickSound();
    setClicks(c => c + 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 120);
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50 relative">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href={`/course?id=${courseId}`} className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-700">
          <BackIcon size={18}/>
        </Link>
        <div className="text-center">
          <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">{course.title}</p>
          <p className="text-sm font-extrabold text-amber-900">Lesson {lesson.num}</p>
        </div>
        <div className="w-8 text-right">
          <span className="text-[10px] font-semibold text-stone-400">{lesson.num}/{course.lessonCount}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="shrink-0 bg-white px-5 pb-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-amber-100">
          <div
            className="h-full rounded-full bg-amber-500 transition-all"
            style={{ width: `${Math.round((lesson.num / course.lessonCount) * 100)}%` }}
          />
        </div>
      </div>

      {/* Video placeholder */}
      <div className="shrink-0 mx-5 mt-4 rounded-2xl bg-amber-900 overflow-hidden shadow-md" style={{ aspectRatio: '16/9' }}>
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="rounded-full bg-white/10 p-4">
            <PetFace breed={course.breed} type={isCat ? 'cat' : 'dog'} size={56}/>
          </div>
          <p className="text-white/60 text-xs font-medium">Video coming soon</p>
        </div>
      </div>

      {/* Lesson info */}
      <div className="flex-1 px-5 py-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">Lesson {lesson.num} of {course.lessonCount}</p>
        <h2 className="text-xl font-extrabold text-amber-900 mb-1">{lesson.title}</h2>
        <p className="text-xs text-stone-400 mb-6">{lesson.duration} · {course.title}</p>

        {/* What you'll learn */}
        <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm mb-4">
          <p className="text-xs font-bold text-amber-700 mb-2">What you&apos;ll practice</p>
          <div className="space-y-2">
            {['Watch the demo video', 'Practice with your pup for 5–10 min', 'Mark it complete when ready'].map(step => (
              <div key={step} className="flex items-center gap-2">
                <CheckCircleIcon size={14} className="text-amber-400 shrink-0"/>
                <p className="text-xs text-stone-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* XP reward */}
        <div className="flex items-center gap-2 rounded-xl bg-amber-100 px-4 py-2.5">
          <PawIcon size={14} className="text-amber-600"/>
          <p className="text-xs font-semibold text-amber-700">
            Complete this lesson to earn <span className="font-extrabold">+15 XP</span>
          </p>
        </div>
      </div>

      {/* Clicker FAB */}
      <div className="shrink-0 px-5 pb-2 pt-2 flex justify-end">
        <button
          onClick={() => { setClickerOpen(true); setClicks(0); }}
          className="flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-2 shadow-sm active:bg-amber-200"
        >
          <span className="text-sm">🔔</span>
          <span className="text-[11px] font-bold text-amber-700">Clicker</span>
        </button>
      </div>

      {/* CTA */}
      <div className="shrink-0 px-5 pb-4 pt-3 border-t border-amber-100 bg-amber-50 flex gap-3">
        {isLast ? (
          <Link href={`/course?id=${courseId}`} className="flex-1">
            <div className="w-full flex items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 font-bold text-white shadow-md active:bg-green-700">
              <CheckCircleIcon size={18}/>
              Finish Course
            </div>
          </Link>
        ) : (
          <>
            <Link
              href={`/lesson?course=${courseId}&lesson=${lessonNum}`}
              className="flex items-center justify-center rounded-2xl border border-amber-300 bg-white px-4 py-4 font-semibold text-amber-700 active:bg-amber-50"
            >
              <LockIcon size={16}/>
            </Link>
            <Link href={`/lesson?course=${courseId}&lesson=${nextLesson}`} className="flex-1">
              <div className="w-full flex items-center justify-center gap-2 rounded-2xl bg-amber-600 py-4 font-bold text-white shadow-md active:bg-amber-700">
                <PawIcon size={18}/>
                Mark Complete &amp; Next
              </div>
            </Link>
          </>
        )}
      </div>

      {/* Clicker overlay */}
      {clickerOpen && (
        <div className="absolute inset-0 flex items-end bg-black/40 z-50">
          <div className="w-full rounded-t-3xl bg-white p-6 shadow-2xl">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-base font-extrabold text-amber-900">Training Clicker</p>
              <button
                onClick={() => setClickerOpen(false)}
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700"
              >
                Done
              </button>
            </div>
            <p className="text-xs text-stone-400 mb-6">Tap each time your pet does the right behavior</p>
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleClick}
                className={`flex h-36 w-36 items-center justify-center rounded-full bg-amber-600 shadow-xl transition-transform duration-100 active:bg-amber-700 ${
                  pulse ? 'scale-90' : 'scale-100'
                }`}
              >
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-white">CLICK</p>
                  <p className="text-[10px] text-amber-200 mt-0.5">tap to mark</p>
                </div>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-amber-900">{clicks}</span>
                <span className="text-sm text-stone-400">click{clicks !== 1 ? 's' : ''} this session</span>
              </div>
              {clicks > 0 && (
                <button
                  onClick={() => setClicks(0)}
                  className="text-xs text-stone-400 underline"
                >
                  Reset counter
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function Lesson() {
  return (
    <Suspense>
      <LessonContent/>
    </Suspense>
  );
}
