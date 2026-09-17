'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Avatar = { emoji: string; color: string; breed: string; name: string };

const STREAK = 7;
const XP = 245;
const XP_NEXT = 300;
const LEVEL = 3;

const categories = [
  { label: 'Obedience', emoji: '🦴', color: 'bg-blue-100 text-blue-800' },
  { label: 'Tricks',    emoji: '⭐', color: 'bg-purple-100 text-purple-800' },
  { label: 'Hunting',   emoji: '🦆', color: 'bg-green-100 text-green-800' },
  { label: 'Agility',   emoji: '🏃', color: 'bg-orange-100 text-orange-800' },
];

export default function Home() {
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
    const a = localStorage.getItem('pawsteps_avatar');
    const m = localStorage.getItem('pawsteps_mode');
    if (a) setAvatar(JSON.parse(a));
    if (m) setMode(m);
  }, []);

  const xpPct = Math.round((XP / XP_NEXT) * 100);

  return (
    <div className="flex flex-1 flex-col bg-amber-50 pb-6">

      {/* Top bar — streak + XP */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-extrabold text-orange-500">{STREAK}</span>
          <span className="text-xs text-stone-400">day streak</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-lg">⭐</span>
          <span className="text-sm font-extrabold text-amber-600">{XP} XP</span>
          <span className="text-[10px] text-stone-400">Lv {LEVEL}</span>
        </div>
        {mode === 'guest' && (
          <Link href="/setup" className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold text-amber-700">
            Sign Up
          </Link>
        )}
      </div>

      {/* XP progress bar */}
      <div className="shrink-0 bg-white px-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-stone-400">Level {LEVEL}</span>
          <span className="text-[10px] text-stone-400">{XP} / {XP_NEXT} XP</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
          <div className="h-full rounded-full bg-amber-500 transition-all" style={{ width: `${xpPct}%` }} />
        </div>
      </div>

      {/* Avatar greeting */}
      <div className="flex flex-col items-center py-6">
        {avatar ? (
          <div className={`flex h-24 w-24 items-center justify-center rounded-full ${avatar.color} text-5xl shadow-md`}>
            {avatar.emoji}
          </div>
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-300 text-5xl shadow-md">🐶</div>
        )}
        <p className="mt-3 text-lg font-extrabold text-amber-900">
          {avatar ? `Train ${avatar.name}!` : 'Train your pup!'}
        </p>
        <p className="text-xs text-stone-400">🔥 {STREAK}-day streak — keep it going!</p>
      </div>

      {/* Continue card */}
      <div className="mx-5 mb-5">
        <Link href="/course">
          <div className="flex items-center gap-4 rounded-2xl bg-amber-600 p-4 shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-2xl">🦮</div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-200">Continue</p>
              <p className="text-sm font-bold text-white">Leash Training</p>
              <p className="text-[11px] text-amber-200">Lesson 3 of 10</p>
            </div>
            <svg className="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Daily goal */}
      <div className="mx-5 mb-5 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Daily Goal</p>
          <span className="text-xs font-semibold text-stone-500">3 / 5 lessons</span>
        </div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map((i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${i <= 3 ? 'bg-amber-500' : 'bg-amber-100'}`}
            />
          ))}
        </div>
      </div>

      {/* Browse by goal */}
      <div className="px-5 pb-4">
        <div className="grid grid-cols-4 gap-2">
          {categories.map((cat) => (
            <Link key={cat.label} href="/courses">
              <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-amber-100 bg-white px-2 py-3 shadow-sm active:bg-amber-50">
                <span className="text-xl">{cat.emoji}</span>
                <span className="text-[10px] font-semibold text-stone-600">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
