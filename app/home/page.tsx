'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import PetFace, { petBg } from '@/components/PetFace';
import { FlameIcon, StarIcon, BoneIcon, LightningIcon, TrophyIcon, TargetIcon, ChevronRightIcon, PawIcon } from '@/components/Icon';

type Pet = { breed: string; name: string; type: 'dog' | 'cat' };

const STREAK  = 7;
const XP      = 245;
const XP_NEXT = 300;
const LEVEL   = 3;
const PAW_PTS = 120;

const categories = [
  { label: 'Obedience', icon: <BoneIcon      size={22}/>, href: '/courses?category=Obedience' },
  { label: 'Tricks',    icon: <TrophyIcon    size={22}/>, href: '/courses?category=Tricks'    },
  { label: 'Hunting',   icon: <TargetIcon    size={22}/>, href: '/courses?category=Hunting'   },
  { label: 'Agility',   icon: <LightningIcon size={22}/>, href: '/courses?category=Agility'   },
];

const ROUTINES: Record<string, { title: string; lessons: { id: number; name: string; duration: string }[] }> = {
  '3':  { title: '3-Minute Focus',    lessons: [{ id:2, name:'Sit Command', duration:'1 min' }, { id:2, name:'Stay Command', duration:'1 min' }, { id:0, name:'Name Recognition', duration:'1 min' }] },
  '5':  { title: '5-Minute Drill',    lessons: [{ id:1, name:'Loose Leash Walking', duration:'2 min' }, { id:0, name:'Come When Called', duration:'2 min' }, { id:0, name:'Leave It', duration:'1 min' }] },
  '10': { title: '10-Minute Session', lessons: [{ id:0, name:'Sit, Down, Stay', duration:'3 min' }, { id:1, name:'Leash Walking', duration:'3 min' }, { id:4, name:'Shake / High Five', duration:'2 min' }, { id:0, name:'Recall Practice', duration:'2 min' }] },
};
const CAT_ROUTINES: Record<string, { title: string; lessons: { id: number; name: string; duration: string }[] }> = {
  '3':  { title: '3-Minute Focus',    lessons: [{ id:9, name:'Clicker Charge', duration:'1 min' }, { id:10, name:'Sit on Cue', duration:'1 min' }, { id:11, name:'Paw Target', duration:'1 min' }] },
  '5':  { title: '5-Minute Drill',    lessons: [{ id:9, name:'Touch Behavior', duration:'2 min' }, { id:10, name:'Stay Practice', duration:'2 min' }, { id:11, name:'High Five', duration:'1 min' }] },
  '10': { title: '10-Minute Session', lessons: [{ id:9, name:'Clicker Intro', duration:'3 min' }, { id:10, name:'Sit & Stay', duration:'3 min' }, { id:11, name:'Paw & High Five', duration:'2 min' }, { id:12, name:'Button Intro', duration:'2 min' }] },
};

// Fixed demo second pet — never changes
const DEMO_PET: Pet = { breed: 'Tabby', name: 'Mochi', type: 'cat' };

export default function Home() {
  const [basePet,      setBasePet]      = useState<Pet | null>(null);
  const [activePetIdx, setActivePetIdx] = useState(0);
  const [mode,         setMode]         = useState<string | null>(null);
  const [routineTime,  setRoutineTime]  = useState<'3' | '5' | '10'>('5');
  const [dropdownOpen, setDropdown]     = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const a = localStorage.getItem('pawsteps_avatar');
      const m = localStorage.getItem('pawsteps_mode');
      const t = localStorage.getItem('pawsteps_pet_type') as 'dog' | 'cat' | null;
      if (a) {
        const p = JSON.parse(a);
        setBasePet({ breed: p.breed, name: p.name, type: p.type ?? t ?? 'dog' });
      }
      if (m) setMode(m);
    } catch {
      localStorage.removeItem('pawsteps_avatar');
      localStorage.removeItem('pawsteps_mode');
    }
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdown(false);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  // Always two slots: user's real pet + demo pet
  // Using index-based selection prevents overwriting basePet when switching
  const pets: Pet[] = basePet ? [basePet, DEMO_PET] : [DEMO_PET];
  const activePet   = pets[activePetIdx] ?? DEMO_PET;
  const xpPct       = Math.round((XP / XP_NEXT) * 100);
  const routines    = activePet.type === 'cat' ? CAT_ROUTINES : ROUTINES;
  const routine     = routines[routineTime];
  const continueId  = activePet.type === 'cat' ? 9 : 1;
  const continueLabel = activePet.type === 'cat' ? 'Clicker Training Intro' : 'Leash Training';
  const continueLesson = activePet.type === 'cat' ? '3 of 5' : '3 of 10';

  return (
    <div className="flex flex-1 flex-col bg-amber-50 pb-6">

      {/* Top bar */}
      <div className="shrink-0 flex items-center justify-between border-b border-amber-200 bg-white px-4 py-3 relative">

        {/* Pet switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdown(v => !v)}
            className="flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-2.5 py-1.5 active:bg-amber-100"
          >
            <div style={{ background: petBg(activePet.breed, activePet.type) }} className="rounded-lg overflow-hidden">
              <PetFace breed={activePet.breed} type={activePet.type} size={24}/>
            </div>
            <span className="text-xs font-bold text-amber-900 max-w-[60px] truncate">{activePet.name}</span>
            <span className="text-[10px] text-amber-500">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-52 rounded-2xl bg-white border border-amber-100 shadow-xl z-50 overflow-hidden">
              {pets.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setActivePetIdx(i); setDropdown(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 transition-colors ${
                    i === activePetIdx ? 'bg-amber-50' : 'hover:bg-stone-50'
                  } ${i > 0 ? 'border-t border-amber-50' : ''}`}
                >
                  <div style={{ background: petBg(p.breed, p.type) }} className="rounded-lg overflow-hidden shrink-0">
                    <PetFace breed={p.breed} type={p.type} size={30}/>
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-xs font-bold text-amber-900 truncate">{p.name}</p>
                    <p className="text-[9px] text-stone-400">{p.type === 'dog' ? 'Dog' : 'Cat'} · {p.breed}</p>
                  </div>
                  {i === activePetIdx && <span className="text-amber-500 text-xs shrink-0">✓</span>}
                </button>
              ))}
              <Link href="/setup" onClick={() => setDropdown(false)}>
                <div className="flex items-center gap-2 px-3 py-2.5 border-t border-amber-100 hover:bg-stone-50">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-base font-bold shrink-0">+</div>
                  <span className="text-xs font-semibold text-amber-700">Add another pet</span>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Streak + XP */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-orange-500">
            <FlameIcon size={16}/><span className="text-xs font-extrabold">{STREAK}d</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon size={14} className="text-amber-500"/>
            <span className="text-xs font-extrabold text-amber-600">{XP} XP</span>
          </div>
        </div>

        {/* Right slot */}
        <div className="w-16 flex justify-end">
          {mode === 'guest' ? (
            <Link href="/setup" className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-700">Sign Up</Link>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1">
              <PawIcon size={11} className="text-amber-600"/>
              <span className="text-[10px] font-bold text-amber-700">{PAW_PTS}</span>
            </div>
          )}
        </div>
      </div>

      {/* XP bar */}
      <div className="shrink-0 bg-white px-5 pb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] text-stone-400">Level {LEVEL}</span>
          <span className="text-[10px] text-stone-400">{XP} / {XP_NEXT} XP to Level {LEVEL + 1}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
          <div className="h-full rounded-full bg-amber-500 transition-all" style={{ width: `${xpPct}%` }}/>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center py-5">
        <Link href="/setup" className="flex flex-col items-center gap-1 group">
          <div
            style={{ background: petBg(activePet.breed, activePet.type) }}
            className="rounded-full p-3 shadow-md group-active:opacity-80 transition-opacity"
          >
            <PetFace breed={activePet.breed} type={activePet.type} size={80}/>
          </div>
          <p className="mt-2 text-lg font-extrabold text-amber-900">Train {activePet.name}!</p>
          <span className="text-[10px] text-amber-500 font-medium">Change pet ›</span>
        </Link>
        <div className="flex items-center gap-1 text-orange-500 text-xs mt-1">
          <FlameIcon size={13}/>
          <span className="font-semibold">{STREAK}-day streak — keep it going!</span>
        </div>
      </div>

      {/* Continue */}
      <div className="mx-5 mb-4">
        <Link href={`/course?id=${continueId}`}>
          <div className="flex items-center gap-4 rounded-2xl bg-amber-600 p-4 shadow-md active:bg-amber-700 transition-colors">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <PetFace breed={activePet.type === 'cat' ? 'Tabby' : 'Labrador'} type={activePet.type} size={44}/>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-200">Continue</p>
              <p className="text-sm font-bold text-white">{continueLabel}</p>
              <p className="text-[11px] text-amber-200">Lesson {continueLesson}</p>
            </div>
            <ChevronRightIcon size={20} className="text-white/70"/>
          </div>
        </Link>
      </div>

      {/* Adaptive routine */}
      <div className="mx-5 mb-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold text-amber-900">Today&apos;s Routine</p>
          <div className="flex gap-1">
            {(['3','5','10'] as const).map(t => (
              <button key={t} onClick={() => setRoutineTime(t)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors ${routineTime === t ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}`}>
                {t} min
              </button>
            ))}
          </div>
        </div>
        <p className="text-[11px] font-semibold text-amber-700 mb-2">{routine.title}</p>
        <div className="space-y-1.5">
          {routine.lessons.map((l, i) => (
            <Link key={i} href={`/course?id=${l.id}`}>
              <div className="flex items-center gap-2.5 rounded-xl bg-amber-50 px-3 py-2 active:bg-amber-100">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-700">{i+1}</div>
                <span className="flex-1 text-[11px] font-medium text-stone-700">{l.name}</span>
                <span className="text-[10px] text-stone-400">{l.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Daily goal */}
      <div className="mx-5 mb-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-amber-700"><StarIcon size={14}/><span className="text-xs font-bold">Daily Goal</span></div>
          <span className="text-xs font-semibold text-stone-500">3 / 5 lessons</span>
        </div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(i => <div key={i} className={`flex-1 h-2 rounded-full ${i <= 3 ? 'bg-amber-500' : 'bg-amber-100'}`}/>)}
        </div>
      </div>

      {/* Category grid */}
      <div className="px-5">
        <div className="grid grid-cols-4 gap-2">
          {categories.map(cat => (
            <Link key={cat.label} href={cat.href}>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-amber-100 bg-white py-3 shadow-sm active:bg-amber-50 transition-colors text-amber-700">
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
