'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PRESETS = [
  { emoji: '🐕',   breed: 'Golden',    color: 'bg-amber-400'  },
  { emoji: '🐩',   breed: 'Poodle',    color: 'bg-pink-400'   },
  { emoji: '🐕‍🦺', breed: 'Lab',       color: 'bg-sky-400'    },
  { emoji: '🐶',   breed: 'Beagle',    color: 'bg-green-400'  },
  { emoji: '🐕',   breed: 'Husky',     color: 'bg-indigo-400' },
  { emoji: '🐶',   breed: 'Dachshund', color: 'bg-orange-400' },
];

export default function Setup() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');

  function handleStart() {
    const pupName = name.trim() || PRESETS[selected].breed;
    localStorage.setItem('pawsteps_mode', 'account');
    localStorage.setItem('pawsteps_avatar', JSON.stringify({
      ...PRESETS[selected],
      name: pupName,
    }));
    router.push('/home');
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 px-5 pb-4 pt-6 text-center">
        <h1 className="text-2xl font-extrabold text-amber-900">Choose your pup 🐾</h1>
        <p className="mt-1 text-sm text-stone-500">Pick the one that looks like your dog</p>
      </div>

      {/* Preset grid */}
      <div className="px-5 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all ${
                selected === i
                  ? 'border-amber-500 bg-amber-50 shadow-md'
                  : 'border-amber-100 bg-white'
              }`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${p.color} text-3xl shadow-sm`}>
                {p.emoji}
              </div>
              <span className="text-xs font-semibold text-stone-700">{p.breed}</span>
              {selected === i && (
                <span className="text-[10px] font-bold text-amber-600">✓ Selected</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Name input */}
      <div className="px-5 pb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Name your pup</p>
        <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-sm">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${PRESETS[selected].color} text-xl`}>
            {PRESETS[selected].emoji}
          </div>
          <input
            type="text"
            placeholder="e.g. Biscuit, Max, Luna…"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-transparent text-sm font-medium text-amber-900 placeholder-stone-300 outline-none"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mx-5 mb-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 py-5">
        <div className={`flex h-20 w-20 items-center justify-center rounded-full ${PRESETS[selected].color} text-4xl shadow-md`}>
          {PRESETS[selected].emoji}
        </div>
        <p className="mt-2 text-sm font-bold text-amber-900">{name.trim() || PRESETS[selected].breed}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs text-amber-700">🔥 0 day streak</span>
          <span className="text-xs text-amber-700">⭐ 0 XP</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto px-5 pb-6">
        <button
          onClick={handleStart}
          className="w-full rounded-2xl bg-amber-600 py-4 text-base font-bold text-white shadow-md active:bg-amber-700"
        >
          Let&apos;s Start Training 🐾
        </button>
      </div>

    </div>
  );
}
