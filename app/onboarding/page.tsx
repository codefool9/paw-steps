'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DogFace from '@/components/DogFace';
import { PawIcon, BoneIcon, FlameIcon, StarIcon, MapPinIcon, TrophyIcon } from '@/components/Icon';

const slides = [
  {
    key: 'welcome',
    bg: 'from-amber-500 to-amber-600',
    visual: (
      <div className="flex gap-3">
        {(['Golden Retriever', 'Poodle', 'Siberian Husky'] as const).map(b => (
          <div key={b} className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 p-1">
            <DogFace breed={b} size={68}/>
          </div>
        ))}
      </div>
    ),
    icon: <PawIcon size={36} className="text-white"/>,
    headline: 'Welcome to PawSteps',
    body: 'Your pup\'s personal training companion — free lessons, streaks, and real trainer support.',
  },
  {
    key: 'training',
    bg: 'from-orange-400 to-amber-500',
    visual: (
      <div className="w-full max-w-xs rounded-2xl bg-white/20 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white">
            <FlameIcon size={16}/>
            <span className="text-sm font-extrabold">7-day streak</span>
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <StarIcon size={16}/>
            <span className="text-sm font-extrabold">245 XP</span>
          </div>
        </div>
        <div className="mb-2 h-2.5 w-full overflow-hidden rounded-full bg-white/30">
          <div className="h-full w-4/5 rounded-full bg-white"/>
        </div>
        {['Sit, Stay, Come', 'Leash Training', 'Basic Tricks'].map((t, i) => (
          <div key={t} className={`mt-2 flex items-center gap-2 rounded-xl px-3 py-2 ${i === 0 ? 'bg-white/30' : 'bg-white/10'}`}>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-[9px] font-bold text-white">{i + 1}</div>
            <span className="text-xs font-medium text-white">{t}</span>
            {i === 0 && <span className="ml-auto text-[9px] font-bold text-white/70">3 min</span>}
          </div>
        ))}
      </div>
    ),
    icon: <BoneIcon size={36} className="text-white"/>,
    headline: 'Bite-sized daily lessons',
    body: 'Pick 3, 5, or 10-minute routines that fit your day. Earn XP and keep your streak alive.',
  },
  {
    key: 'customize',
    bg: 'from-amber-400 to-yellow-500',
    visual: (
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {(['Beagle', 'French Bulldog', 'Border Collie', 'Labrador'] as const).map(b => (
            <div key={b} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/25 p-1">
              <DogFace breed={b} size={52}/>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {['Playful', 'High Energy', 'Eager to Please'].map(tag => (
            <span key={tag} className="rounded-full bg-white/30 px-2.5 py-1 text-[10px] font-bold text-white">{tag}</span>
          ))}
        </div>
      </div>
    ),
    icon: <TrophyIcon size={36} className="text-white"/>,
    headline: 'Made for your dog',
    body: 'Choose your pup\'s avatar, set their age, energy level, and personality — the app adapts to them.',
  },
  {
    key: 'community',
    bg: 'from-amber-600 to-amber-700',
    visual: (
      <div className="w-full max-w-xs space-y-2">
        {[
          { breed: 'Golden Retriever', name: 'Bella', msg: 'Nailed Stay after 3 days!', badge: 'CPDT-KA' },
          { breed: 'Labrador',         name: 'Max',   msg: 'No more pulling on leash!', badge: null },
        ].map(item => (
          <div key={item.name} className="flex items-center gap-3 rounded-xl bg-white/20 px-3 py-2.5">
            <div className="shrink-0 rounded-lg bg-white/20 p-0.5">
              <DogFace breed={item.breed} size={36}/>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-bold text-white">{item.name}</p>
                {item.badge && (
                  <span className="rounded-full bg-blue-300/50 px-1.5 py-0.5 text-[8px] font-bold text-white">{item.badge}</span>
                )}
              </div>
              <p className="text-[10px] text-white/80 leading-tight">{item.msg}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-xl bg-white/20 px-3 py-2.5">
          <MapPinIcon size={16} className="text-white/70 shrink-0"/>
          <p className="text-[11px] text-white">CPDT-KA certified trainers near you</p>
        </div>
      </div>
    ),
    icon: <MapPinIcon size={36} className="text-white"/>,
    headline: 'Community & local trainers',
    body: 'Share your wins, follow others\' progress, and book sessions with verified trainers nearby.',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const slide = slides[step];
  const isLast = step === slides.length - 1;

  function finish() {
    localStorage.setItem('pawsteps_onboarded', 'true');
    router.push('/');
  }

  function next() {
    if (isLast) finish();
    else setStep(s => s + 1);
  }

  return (
    <div className={`flex flex-1 flex-col items-center justify-between bg-gradient-to-b ${slide.bg} px-6 pb-10 pt-10 transition-colors duration-500`}>

      {/* Skip */}
      <div className="w-full flex justify-end">
        <button onClick={finish} className="text-sm font-semibold text-white/70">
          Skip
        </button>
      </div>

      {/* Visual */}
      <div className="flex flex-col items-center gap-6 flex-1 justify-center">
        {slide.visual}
      </div>

      {/* Text */}
      <div className="w-full">
        <div className="mb-6 text-center">
          <div className="mb-3 flex justify-center">{slide.icon}</div>
          <h2 className="text-2xl font-extrabold text-white mb-2">{slide.headline}</h2>
          <p className="text-sm text-white/80 leading-relaxed">{slide.body}</p>
        </div>

        {/* Dots */}
        <div className="mb-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`rounded-full transition-all duration-300 ${
                i === step ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={next}
          className="w-full rounded-2xl bg-white py-4 text-base font-extrabold text-amber-600 shadow-md active:bg-amber-50 transition-colors"
        >
          {isLast ? "Let's Go" : 'Next'}
        </button>
      </div>

    </div>
  );
}
