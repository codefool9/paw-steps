'use client';
import { useState } from 'react';
import { ClickerIcon } from '@/components/Icon';

export default function Clicker() {
  const [clicks, setClicks] = useState(0);
  const [pulse, setPulse]   = useState(false);

  function handleClick() {
    setClicks(c => c + 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 120);
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 bg-white border-b border-amber-200 px-5 pt-4 pb-3">
        <h1 className="text-base font-extrabold text-amber-900">Clicker</h1>
        <p className="text-xs text-stone-400 mt-0.5">Tap each time your pet does the right behavior</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
        <button
          onClick={handleClick}
          className={`relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-b from-amber-500 to-amber-700 shadow-2xl transition-transform duration-100 active:bg-amber-700 ${
            pulse ? 'scale-95' : 'scale-100'
          }`}
        >
          <span className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/90">
            <ClickerIcon size={40} className="text-white"/>
          </span>
        </button>

        <div className="text-center">
          <p className="text-3xl font-extrabold text-amber-900">{clicks}</p>
          <p className="text-sm text-stone-400">click{clicks !== 1 ? 's' : ''} this session</p>
        </div>

        {clicks > 0 && (
          <button onClick={() => setClicks(0)} className="text-xs text-stone-400 underline">
            Reset counter
          </button>
        )}
      </div>

    </div>
  );
}
