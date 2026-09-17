'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DogFace from '@/components/DogFace';
import { BackIcon, PawIcon, CheckCircleIcon, LockIcon } from '@/components/Icon';
import { FREE_COURSES } from '@/lib/courses';

function LessonContent() {
  const searchParams = useSearchParams();
  const courseId = parseInt(searchParams.get('course') ?? '0', 10);
  const lessonNum = parseInt(searchParams.get('lesson') ?? '1', 10);
  const course = FREE_COURSES.find(c => c.id === courseId) ?? FREE_COURSES[0];
  const lesson = course.lessonList.find(l => l.num === lessonNum) ?? course.lessonList[0];
  const isLast = lessonNum >= course.lessonList.length;
  const nextLesson = lessonNum + 1;

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

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
            <DogFace breed={course.breed} size={56}/>
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
