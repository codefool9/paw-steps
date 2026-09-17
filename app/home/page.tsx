'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DogFace from '@/components/DogFace';
import { FlameIcon, StarIcon, BoneIcon, LightningIcon, TrophyIcon, TargetIcon, PawIcon, ChevronRightIcon } from '@/components/Icon';

type Avatar = { breed: string; name: string };

const STREAK = 7;
const XP     = 245;
const XP_NEXT = 300;
const LEVEL  = 3;

const categories = [
  { label: 'Obedience', icon: <BoneIcon      size={22}/>, href: '/courses' },
  { label: 'Tricks',    icon: <TrophyIcon     size={22}/>, href: '/courses' },
  { label: 'Hunting',   icon: <TargetIcon     size={22}/>, href: '/courses' },
  { label: 'Agility',   icon: <LightningIcon  size={22}/>, href: '/courses' },
];

export default function Home() {
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [mode,   setMode]   = useState<string | null>(null);

  useEffect(() => {
    const a = localStorage.getItem('pawsteps_avatar');
    const m = localStorage.getItem('pawsteps_mode');
    if (a) setAvatar(JSON.parse(a));
    if (m) setMode(m);
  }, []);

  const xpPct = Math.round((XP / XP_NEXT) * 100);
  const breed = avatar?.breed ?? 'Golden Retriever';
  const pupName = avatar?.name ?? 'Your Pup';

  return (
    <div className="flex flex-1 flex-col bg-amber-50 pb-6">

      {/* Top bar */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-5 py-3">
        <div className="flex items-center gap-1.5 text-orange-500">
          <FlameIcon size={20}/>
          <span className="text-sm font-extrabold">{STREAK}</span>
          <span className="text-[10px] text-stone-400">days</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-500">
          <StarIcon size={18}/>
          <span className="text-sm font-extrabold text-amber-600">{XP}</span>
          <span className="text-[10px] text-stone-400">Lv {LEVEL}</span>
        </div>
        {mode === 'guest' && (
          <Link href="/setup" className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold text-amber-700">
            Sign Up
          </Link>
        )}
      </div>

      {/* XP bar */}
      <div className="shrink-0 bg-white px-5 pb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] text-stone-400">Level {LEVEL}</span>
          <span className="text-[10px] text-stone-400">{XP} / {XP_NEXT} XP</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
          <div className="h-full rounded-full bg-amber-500" style={{ width: `${xpPct}%` }}/>
        </div>
      </div>

      {/* Avatar + greeting */}
      <div className="flex flex-col items-center py-6">
        <div className="rounded-full bg-amber-100 p-2 shadow-md">
          <DogFace breed={breed} size={88}/>
        </div>
        <p className="mt-3 text-lg font-extrabold text-amber-900">Train {pupName}!</p>
        <div className="flex items-center gap-1 text-orange-500 text-xs mt-0.5">
          <FlameIcon size={13}/>
          <span className="font-semibold">{STREAK}-day streak — keep it going!</span>
        </div>
      </div>

      {/* Continue card */}
      <div className="mx-5 mb-5">
        <Link href="/course">
          <div className="flex items-center gap-4 rounded-2xl bg-amber-600 p-4 shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <DogFace breed="Labrador" size={44}/>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-200">Continue</p>
              <p className="text-sm font-bold text-white">Leash Training</p>
              <p className="text-[11px] text-amber-200">Lesson 3 of 10</p>
            </div>
            <ChevronRightIcon size={20} className="text-white/70"/>
          </div>
        </Link>
      </div>

      {/* Daily goal */}
      <div className="mx-5 mb-5 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-amber-700">
            <StarIcon size={14}/>
            <span className="text-xs font-bold">Daily Goal</span>
          </div>
          <span className="text-xs font-semibold text-stone-500">3 / 5</span>
        </div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`flex-1 h-2 rounded-full ${i <= 3 ? 'bg-amber-500' : 'bg-amber-100'}`}/>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="px-5">
        <div className="grid grid-cols-4 gap-2">
          {categories.map(cat => (
            <Link key={cat.label} href={cat.href}>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-amber-100 bg-white py-3 shadow-sm active:bg-amber-50 text-amber-700">
                {cat.icon}
                <span className="text-[10px] font-semibold text-stone-600">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
