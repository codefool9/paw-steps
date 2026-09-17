import Link from 'next/link';

const course = {
  emoji: '🐶', title: 'Puppy Basics', category: 'Obedience',
  level: 'Easy', weeks: 3, lessons: 8, rating: 4.9, reviews: 312, ageNote: 'Ages 8 wks+',
};

const lessons = [
  { num: 1, title: 'Welcome & Bonding Time',  duration: '10 min' },
  { num: 2, title: 'Name Recognition',        duration: '15 min' },
  { num: 3, title: 'The Sit Command',         duration: '20 min' },
  { num: 4, title: 'The Down Command',        duration: '20 min' },
  { num: 5, title: 'The Stay Command',        duration: '25 min' },
  { num: 6, title: 'Come When Called',        duration: '20 min' },
  { num: 7, title: 'Leave It & Drop It',      duration: '25 min' },
  { num: 8, title: 'Putting It All Together', duration: '30 min' },
];

const totalMinutes = lessons.reduce((sum, l) => sum + parseInt(l.duration), 0);

export default function Course() {
  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/courses" className="flex items-center gap-1.5 text-amber-700">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Courses</span>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Course Detail</h1>
        <Link href="/home" className="text-sm font-semibold text-amber-600">Home</Link>
      </div>

      {/* Hero */}
      <div className="shrink-0 bg-gradient-to-br from-amber-300 to-amber-400 px-5 py-6 text-center">
        <div className="mb-2 text-6xl">{course.emoji}</div>
        <h2 className="text-2xl font-extrabold text-amber-900">{course.title}</h2>
        <p className="mt-1 text-sm font-medium text-amber-800">
          {course.lessons} lessons · {course.weeks} weeks · {totalMinutes} min total
        </p>
        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="text-sm text-amber-500">{'★'.repeat(5)}</span>
          <span className="text-sm font-bold text-amber-900">{course.rating}</span>
          <span className="text-xs text-amber-700">({course.reviews} reviews)</span>
        </div>
      </div>

      {/* Badges */}
      <div className="shrink-0 flex gap-2 px-5 py-3 bg-white border-b border-amber-100">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">🦴 {course.category}</span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">✅ {course.level}</span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">🐾 {course.ageNote}</span>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-5">

        {/* Progress */}
        <div className="mb-5 rounded-2xl bg-white p-4 border border-amber-100 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500">0 / {course.lessons} lessons</span>
            <span className="text-xs font-semibold text-amber-600">+{course.lessons * 15} XP on completion</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
            <div className="h-full w-0 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Lesson list */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
          {lessons.map((lesson, i) => (
            <div
              key={lesson.num}
              className={`flex items-center gap-4 px-4 py-3.5 ${i < lessons.length - 1 ? 'border-b border-amber-50' : ''}`}
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
            <span className="text-lg">⭐</span>
            <p className="text-sm font-extrabold text-amber-900">Want more? Go Premium</p>
          </div>
          <div className="mb-3 flex flex-col gap-1">
            {['HD video walkthroughs for every lesson', 'Weekly check-ins with a certified trainer', 'Completion certificate for your pup'].map((f) => (
              <p key={f} className="text-[11px] text-stone-500">✓ {f}</p>
            ))}
          </div>
          <Link href="/courses">
            <div className="flex items-center justify-between rounded-xl bg-amber-600 px-4 py-2.5">
              <span className="text-xs font-bold text-white">Browse Premium Courses</span>
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </div>

      </div>

      {/* Sticky CTA */}
      <div className="shrink-0 px-5 pb-4 pt-3 bg-amber-50 border-t border-amber-200">
        <button className="w-full rounded-2xl bg-amber-600 py-4 font-bold text-white shadow-md active:bg-amber-700">
          Start Course 🐾
        </button>
      </div>

    </div>
  );
}
