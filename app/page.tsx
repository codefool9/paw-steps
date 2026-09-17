'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const mode = localStorage.getItem('pawsteps_mode');
    if (mode) router.replace('/home');
  }, [router]);

  function handleGuest() {
    localStorage.setItem('pawsteps_mode', 'guest');
    localStorage.setItem('pawsteps_avatar', JSON.stringify({
      emoji: '🐶', color: 'bg-amber-400', breed: 'Puppy', name: 'Your Pup',
    }));
    router.push('/home');
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-between bg-gradient-to-b from-amber-500 to-amber-600 px-6 pb-10 pt-12 text-center">

      {/* Logo */}
      <div>
        <div className="text-7xl mb-3">🐾</div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">PawSteps</h1>
        <p className="mt-1 text-base font-medium text-amber-100">Puppy Obedience &amp; Tricks</p>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          {['🐕', '🐩', '🐕‍🦺'].map((e) => (
            <div key={e} className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl shadow-inner">
              {e}
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-amber-100">Join 50,000+ puppy owners training smarter</p>
      </div>

      {/* CTAs */}
      <div className="flex w-full flex-col gap-3">
        <Link href="/setup">
          <div className="w-full rounded-2xl bg-white py-4 text-center text-base font-bold text-amber-700 shadow-md active:bg-amber-50">
            Create Account 🐾
          </div>
        </Link>
        <button
          onClick={handleGuest}
          className="w-full rounded-2xl border-2 border-white/50 py-3 text-sm font-semibold text-white"
        >
          Continue as Guest
        </button>
        <p className="text-[11px] text-amber-200">No credit card required · Free courses always free</p>
      </div>

    </div>
  );
}
