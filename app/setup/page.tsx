'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PRESET_BREEDS, MORE_BREEDS, ALL_BREEDS } from '@/components/DogFace';
import { PRESET_CAT_BREEDS, MORE_CAT_BREEDS, ALL_CAT_BREEDS } from '@/components/CatFace';
import PetFace from '@/components/PetFace';
import { BackIcon } from '@/components/Icon';

type PetType = 'dog' | 'cat';

export default function Setup() {
  const router = useRouter();
  const [petType,   setPetType]   = useState<PetType>('dog');
  const [selected,  setSelected]  = useState(0);
  const [name,      setName]      = useState('');
  const [showMore,  setShowMore]  = useState(false);
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('pawsteps_pet_type') as PetType | null;
    if (stored === 'cat' || stored === 'dog') setPetType(stored);
  }, []);

  // Reset breed selection when pet type changes
  function switchType(t: PetType) {
    setPetType(t);
    setSelected(0);
    setShowMore(false);
    localStorage.setItem('pawsteps_pet_type', t);
  }

  const presets  = petType === 'dog' ? PRESET_BREEDS  : PRESET_CAT_BREEDS;
  const more     = petType === 'dog' ? MORE_BREEDS     : MORE_CAT_BREEDS;
  const allBreeds = petType === 'dog' ? ALL_BREEDS     : ALL_CAT_BREEDS;
  const selectedBreed = allBreeds[selected];

  function Avatar({ breed, size }: { breed: string; size: number }) {
    return <PetFace breed={breed} type={petType} size={size}/>;
  }

  function handleStart() {
    setLoading(true);
    const pupName = name.trim() || selectedBreed.name;
    localStorage.setItem('pawsteps_mode',     'account');
    localStorage.setItem('pawsteps_pet_type', petType);
    localStorage.setItem('pawsteps_avatar',   JSON.stringify({ breed: selectedBreed.name, name: pupName, type: petType }));
    router.push('/home');
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-700">
          <BackIcon size={18}/>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Choose your pet</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">

        {/* Dog / Cat toggle */}
        <div className="mb-4 flex gap-2 rounded-2xl border border-amber-100 bg-white p-1.5 shadow-sm">
          {(['dog', 'cat'] as PetType[]).map(t => (
            <button
              key={t}
              onClick={() => switchType(t)}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-colors ${
                petType === t ? 'bg-amber-600 text-white shadow-sm' : 'text-stone-500'
              }`}
            >
              <PetFace breed={t === 'dog' ? 'Golden Retriever' : 'Tabby'} type={t} size={22}/>
              {t === 'dog' ? 'Dog' : 'Cat'}
            </button>
          ))}
        </div>

        {/* Hint */}
        <p className="mb-3 text-[11px] text-stone-400 text-center">
          Pick the one that looks like your pet — breed doesn&apos;t change your training path
        </p>

        {/* Preset breeds */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {presets.map((b, i) => (
            <button
              key={b.name}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 py-3 px-1 transition-all ${
                selected === i ? 'border-amber-500 bg-amber-50 shadow-md' : 'border-amber-100 bg-white'
              }`}
            >
              <Avatar breed={b.name} size={64}/>
              <span className="text-[10px] font-semibold text-stone-600 text-center leading-tight">{b.name}</span>
              {selected === i && <span className="text-[9px] font-bold text-amber-600">Selected</span>}
            </button>
          ))}
        </div>

        {/* More breeds */}
        <button
          onClick={() => setShowMore(v => !v)}
          className="w-full mb-3 flex items-center justify-between rounded-xl border border-amber-200 bg-white px-4 py-2.5 active:bg-amber-50"
        >
          <span className="text-xs font-bold text-amber-700">
            {showMore ? 'Fewer breeds' : `${more.length} more breeds`}
          </span>
          <span className={`text-sm font-bold text-amber-500 transition-transform duration-200 ${showMore ? 'rotate-90' : ''}`}>›</span>
        </button>

        {showMore && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {more.map((b, i) => {
              const globalIdx = i + presets.length;
              return (
                <button
                  key={b.name}
                  onClick={() => setSelected(globalIdx)}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 py-2.5 px-1 transition-all ${
                    selected === globalIdx ? 'border-amber-500 bg-amber-50 shadow-md' : 'border-amber-100 bg-white'
                  }`}
                >
                  <Avatar breed={b.name} size={52}/>
                  <span className="text-[9px] font-semibold text-stone-600 text-center leading-tight">{b.name}</span>
                  {selected === globalIdx && <span className="text-[9px] font-bold text-amber-600">✓</span>}
                </button>
              );
            })}
          </div>
        )}

        {/* Name input */}
        <div className="mb-4">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-amber-600">Name your pet</p>
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-sm">
            <Avatar breed={selectedBreed.name} size={40}/>
            <input
              type="text"
              placeholder="e.g. Biscuit, Luna, Mochi…"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={20}
              className="flex-1 bg-transparent text-sm font-medium text-amber-900 placeholder-stone-300 outline-none"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mb-6 flex flex-col items-center rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 py-5">
          <Avatar breed={selectedBreed.name} size={80}/>
          <p className="mt-2 text-sm font-bold text-amber-900">{name.trim() || selectedBreed.name}</p>
          <p className="text-xs text-amber-700 mt-0.5">{petType === 'dog' ? 'Dog' : 'Cat'} · {selectedBreed.name}</p>
        </div>

      </div>

      {/* CTA */}
      <div className="shrink-0 px-5 pb-6 pt-3 border-t border-amber-100 bg-amber-50">
        <button
          onClick={handleStart}
          disabled={loading}
          className={`w-full rounded-2xl py-4 text-base font-bold text-white shadow-md transition-colors ${
            loading ? 'bg-amber-400' : 'bg-amber-600 active:bg-amber-700'
          }`}
        >
          {loading ? 'Setting up…' : "Let's Start Training"}
        </button>
      </div>

    </div>
  );
}
