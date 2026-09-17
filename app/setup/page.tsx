'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DogFace, { PRESET_BREEDS, MORE_BREEDS, ALL_BREEDS } from '@/components/DogFace';
import { BackIcon } from '@/components/Icon';

export default function Setup() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [showMore, setShowMore] = useState(false);

  const selectedBreed = ALL_BREEDS[selected];

  function handleStart() {
    const pupName = name.trim() || selectedBreed.name;
    localStorage.setItem('pawsteps_mode', 'account');
    localStorage.setItem('pawsteps_avatar', JSON.stringify({
      breed: selectedBreed.name,
      name: pupName,
    }));
    router.push('/home');
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-700">
          <BackIcon size={18}/>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Choose your pup</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">

        {/* ── Featured presets ─────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {PRESET_BREEDS.map((b, i) => (
            <button
              key={b.name}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 py-3 px-1 transition-all ${
                selected === i
                  ? 'border-amber-500 bg-amber-50 shadow-md'
                  : 'border-amber-100 bg-white'
              }`}
            >
              <DogFace breed={b.name} size={64}/>
              <span className="text-[10px] font-semibold text-stone-600 text-center leading-tight">{b.name}</span>
              {selected === i && <span className="text-[9px] font-bold text-amber-600">✓</span>}
            </button>
          ))}
        </div>

        {/* ── More breeds toggle ────────────────────────────────── */}
        <button
          onClick={() => setShowMore(v => !v)}
          className="w-full mb-3 flex items-center justify-between rounded-xl border border-amber-200 bg-white px-4 py-2.5"
        >
          <span className="text-xs font-bold text-amber-700">More breeds</span>
          <span className={`text-xs font-bold text-amber-500 transition-transform ${showMore ? 'rotate-90' : ''}`}>›</span>
        </button>

        {showMore && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {MORE_BREEDS.map((b, i) => {
              const globalIdx = i + 6;
              return (
                <button
                  key={b.name}
                  onClick={() => setSelected(globalIdx)}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 py-2.5 px-1 transition-all ${
                    selected === globalIdx
                      ? 'border-amber-500 bg-amber-50 shadow-md'
                      : 'border-amber-100 bg-white'
                  }`}
                >
                  <DogFace breed={b.name} size={52}/>
                  <span className="text-[9px] font-semibold text-stone-600 text-center leading-tight">{b.name}</span>
                  {selected === globalIdx && <span className="text-[9px] font-bold text-amber-600">✓</span>}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Name input ───────────────────────────────────────── */}
        <div className="mb-4">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-amber-600">Name your pup</p>
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-sm">
            <DogFace breed={selectedBreed.name} size={40}/>
            <input
              type="text"
              placeholder={`e.g. Biscuit, Luna, Max…`}
              value={name}
              onChange={e => setName(e.target.value)}
              className="flex-1 bg-transparent text-sm font-medium text-amber-900 placeholder-stone-300 outline-none"
            />
          </div>
        </div>

        {/* ── Preview card ─────────────────────────────────────── */}
        <div className="mb-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 py-5">
          <DogFace breed={selectedBreed.name} size={80}/>
          <p className="mt-2 text-sm font-bold text-amber-900">{name.trim() || selectedBreed.name}</p>
          <div className="mt-1 flex items-center gap-3 text-xs text-amber-700">
            <span>🔥 0 days</span>
            <span>⭐ 0 XP</span>
          </div>
        </div>

      </div>

      {/* Sticky CTA */}
      <div className="shrink-0 px-5 pb-6 pt-3 border-t border-amber-100 bg-amber-50">
        <button
          onClick={handleStart}
          className="w-full rounded-2xl bg-amber-600 py-4 text-base font-bold text-white shadow-md active:bg-amber-700"
        >
          Let&apos;s Start Training
        </button>
      </div>

    </div>
  );
}
