'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PetFace from '@/components/PetFace';
import { PawIcon } from '@/components/Icon';

const HERO_BREEDS = ['Golden Retriever', 'Poodle', 'Siberian Husky'];

export default function Welcome() {
  const router = useRouter();
  const [guestWarning, setGuestWarning] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const mode      = localStorage.getItem('pawsteps_mode');
    const onboarded = localStorage.getItem('pawsteps_onboarded');
    if (mode) {
      setRedirecting(true);
      router.push('/home');
    } else if (!onboarded) {
      router.push('/onboarding');
    }
  }, [router]);

  function handleGuestTap() {
    const existing = localStorage.getItem('pawsteps_mode');
    if (existing === 'account') {
      setGuestWarning(true); // warn before overwriting saved account
    } else {
      confirmGuest();
    }
  }

  function confirmGuest() {
    localStorage.setItem('pawsteps_mode', 'guest');
    localStorage.setItem('pawsteps_avatar', JSON.stringify({ breed: 'Golden Retriever', name: 'Your Pup' }));
    router.push('/home');
  }

  if (redirecting) {
    return (
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-amber-500 to-amber-600">
        <PawIcon size={48} className="text-white animate-pulse"/>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-between bg-gradient-to-b from-amber-500 to-amber-600 px-6 pb-10 pt-12 text-center">

      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <PawIcon size={52} className="text-white"/>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">PawSteps</h1>
        <p className="text-sm font-medium text-amber-100">Puppy Obedience &amp; Tricks</p>
      </div>

      {/* Hero dog faces */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3">
          {HERO_BREEDS.map(breed => (
            <div key={breed} className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 shadow-inner p-1">
              <PetFace breed={breed} type="dog" size={70}/>
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-amber-100">Join 50,000+ puppy owners training smarter</p>
      </div>

      {/* CTAs */}
      <div className="flex w-full flex-col gap-3">
        <Link href="/setup">
          <div className="w-full rounded-2xl bg-white py-4 text-center text-base font-bold text-amber-700 shadow-md active:bg-amber-50">
            Create Account
          </div>
        </Link>
        <button
          onClick={handleGuestTap}
          className="w-full rounded-2xl border-2 border-white/50 py-3 text-sm font-semibold text-white active:bg-white/10"
        >
          Continue as Guest
        </button>
        <p className="text-[11px] text-amber-200">No credit card required · Free courses always free</p>
      </div>

      {/* Guest warning overlay */}
      {guestWarning && (
        <div className="absolute inset-0 flex items-end justify-center bg-black/40 pb-10 px-6">
          <div className="w-full rounded-2xl bg-white p-5 shadow-xl">
            <p className="mb-1 text-sm font-bold text-amber-900">Leave your account?</p>
            <p className="mb-4 text-xs text-stone-500">Exploring as a guest will switch you out of your saved account.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setGuestWarning(false)}
                className="flex-1 rounded-xl border border-amber-200 py-2.5 text-sm font-semibold text-amber-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmGuest}
                className="flex-1 rounded-xl bg-amber-600 py-2.5 text-sm font-bold text-white"
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
