'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DogFace from '@/components/DogFace';
import { FlameIcon, StarIcon, BoneIcon, PawIcon, TrophyIcon, CheckCircleIcon, TargetIcon, MapPinIcon, ChevronRightIcon } from '@/components/Icon';

type Avatar = { breed: string; name: string };

const STREAK = 7;
const XP = 245;
const LEVEL = 3;

const WALKS = [
  { day: 'Mon', count: 2, done: true },
  { day: 'Tue', count: 1, done: true },
  { day: 'Wed', count: 3, done: true },
  { day: 'Thu', count: 2, done: true },
  { day: 'Fri', count: 1, done: true },
  { day: 'Sat', count: 0, done: false },
  { day: 'Sun', count: 0, done: false },
];
const TOTAL_WALKS = WALKS.reduce((s, d) => s + d.count, 0);

const HEALTH_STATS = [
  { label: 'Walks this week', value: `${TOTAL_WALKS}`, sub: 'Goal: 14 walks', icon: <PawIcon size={16}/>, color: 'text-amber-600' },
  { label: 'Training sessions', value: '5', sub: 'This week', icon: <BoneIcon size={16}/>, color: 'text-blue-600' },
  { label: 'Lessons completed', value: '12', sub: 'All time', icon: <CheckCircleIcon size={16}/>, color: 'text-green-600' },
  { label: 'Day streak', value: `${STREAK}`, sub: 'Keep it up!', icon: <FlameIcon size={16}/>, color: 'text-orange-500' },
];

const BADGES = [
  { title: 'First Steps',     desc: 'Completed your first lesson',  earned: true,  icon: <PawIcon size={20}/> },
  { title: 'On a Roll',       desc: '5-day training streak',         earned: true,  icon: <FlameIcon size={20}/> },
  { title: 'Treat Hunter',    desc: 'Completed 10 lessons',          earned: true,  icon: <BoneIcon size={20}/> },
  { title: 'Course Graduate', desc: 'Finished a full course',        earned: false, icon: <TrophyIcon size={20}/> },
  { title: 'Top Dog',         desc: 'Reach Level 5',                 earned: false, icon: <StarIcon size={20}/> },
  { title: 'Trail Blazer',    desc: 'Log 50 walks',                  earned: false, icon: <TargetIcon size={20}/> },
];

const TRAINERS = [
  { name: 'Happy Paws Training', distance: '0.8 mi', specialty: 'Obedience & Puppy Classes', rating: 4.9, reviews: 87 },
  { name: 'K9 Pro Academy',      distance: '1.2 mi', specialty: 'Advanced & Agility',        rating: 4.8, reviews: 63 },
  { name: 'Urban Dog School',    distance: '2.1 mi', specialty: 'City Manners & Leash Work', rating: 4.7, reviews: 112 },
];

export default function Profile() {
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [mode,   setMode]   = useState<string | null>(null);

  useEffect(() => {
    try {
      const a = localStorage.getItem('pawsteps_avatar');
      const m = localStorage.getItem('pawsteps_mode');
      if (a) setAvatar(JSON.parse(a));
      if (m) setMode(m);
    } catch {
      localStorage.removeItem('pawsteps_avatar');
      localStorage.removeItem('pawsteps_mode');
    }
  }, []);

  const breed   = avatar?.breed ?? 'Golden Retriever';
  const pupName = avatar?.name  ?? 'Your Pup';

  return (
    <div className="flex flex-1 flex-col bg-amber-50 pb-6">

      {/* Profile header */}
      <div className="shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 px-5 pt-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/20 p-1.5 shadow-md">
            <DogFace breed={breed} size={72}/>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xl font-extrabold text-white">{pupName}</p>
            <p className="text-xs font-medium text-amber-100 mb-2">{breed}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-white">
                <FlameIcon size={13}/>
                <span className="text-xs font-bold">{STREAK} days</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <StarIcon size={13}/>
                <span className="text-xs font-bold">{XP} XP · Lv {LEVEL}</span>
              </div>
            </div>
          </div>
          <Link
            href="/setup"
            className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold text-white border border-white/30"
          >
            Edit Pup
          </Link>
        </div>
        {/* Guest upsell */}
        {mode === 'guest' && (
          <Link href="/setup">
            <div className="mt-4 rounded-xl bg-white/20 border border-white/30 px-4 py-2.5 flex items-center justify-between">
              <p className="text-xs font-semibold text-white">Save your progress — create a free account</p>
              <ChevronRightIcon size={14} className="text-white/70 shrink-0"/>
            </div>
          </Link>
        )}
      </div>

      {/* Health stats */}
      <div className="-mt-4 mx-5">
        <div className="rounded-2xl bg-white shadow-md border border-amber-100 p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-amber-600">This Week</p>
          <div className="grid grid-cols-2 gap-3">
            {HEALTH_STATS.map(stat => (
              <div key={stat.label} className="flex items-start gap-2.5">
                <div className={`mt-0.5 shrink-0 ${stat.color}`}>{stat.icon}</div>
                <div>
                  <p className="text-lg font-extrabold text-amber-900 leading-none">{stat.value}</p>
                  <p className="text-[10px] font-medium text-stone-500 leading-tight mt-0.5">{stat.label}</p>
                  <p className="text-[9px] text-stone-400">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Walk tracker */}
      <div className="mx-5 mt-4">
        <div className="rounded-2xl bg-white border border-amber-100 shadow-sm p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Daily Walks</p>
            <span className="text-[10px] text-stone-400">{TOTAL_WALKS} / 14 this week</span>
          </div>
          <div className="flex gap-1.5 justify-between">
            {WALKS.map(d => (
              <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-full rounded-lg py-2 flex items-center justify-center ${
                  d.count >= 2 ? 'bg-amber-500' : d.count === 1 ? 'bg-amber-200' : 'bg-stone-100'
                }`}>
                  <span className={`text-[10px] font-extrabold ${d.count > 0 ? 'text-white' : 'text-stone-300'}`}>
                    {d.count > 0 ? d.count : '—'}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-stone-400">{d.day}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-stone-400 text-center">Tap + on home screen after each walk to log it</p>
        </div>
      </div>

      {/* Badges */}
      <div className="mx-5 mt-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-amber-600">Achievements</p>
        <div className="grid grid-cols-3 gap-2">
          {BADGES.map(badge => (
            <div
              key={badge.title}
              className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-3 text-center ${
                badge.earned
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-stone-100 bg-white opacity-50'
              }`}
            >
              <div className={badge.earned ? 'text-amber-500' : 'text-stone-300'}>{badge.icon}</div>
              <p className={`text-[10px] font-bold leading-tight ${badge.earned ? 'text-amber-900' : 'text-stone-400'}`}>
                {badge.title}
              </p>
              {!badge.earned && <p className="text-[9px] text-stone-300 leading-tight">{badge.desc}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Local trainers */}
      <div className="mx-5 mt-5">
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon size={14} className="text-amber-600"/>
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Local Trainers</p>
        </div>
        <div className="space-y-2">
          {TRAINERS.map(trainer => (
            <div key={trainer.name} className="rounded-2xl border border-amber-100 bg-white p-3.5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-amber-900 leading-tight">{trainer.name}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">{trainer.specialty}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} size={9} className={i < Math.round(trainer.rating) ? 'text-amber-400' : 'text-stone-200'}/>
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400">({trainer.reviews})</span>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-1.5">
                  <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-0.5">
                    <MapPinIcon size={10}/>{trainer.distance}
                  </span>
                  <button className="rounded-full bg-amber-600 px-3 py-1 text-[10px] font-bold text-white active:bg-amber-700">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[10px] text-stone-400">Based on your location · Tap Contact to reach out</p>
      </div>

    </div>
  );
}
