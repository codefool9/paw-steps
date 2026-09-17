'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DogFace from '@/components/DogFace';
import { FlameIcon, StarIcon, BoneIcon, PawIcon, TrophyIcon, CheckCircleIcon, TargetIcon, MapPinIcon, ChevronRightIcon, LightningIcon } from '@/components/Icon';

type Avatar = { breed: string; name: string };

const STREAK    = 7;
const XP        = 245;
const LEVEL     = 3;
const PAW_PTS   = 120;
const WALKS     = [2, 1, 3, 2, 1, 0, 0];
const WALK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const TOTAL_WALKS = WALKS.reduce((s, n) => s + n, 0);

const ENERGY_LEVELS = ['Low', 'Medium', 'High', 'Very High'] as const;
const TEMPERAMENT_OPTIONS = ['Anxious', 'Playful', 'Stubborn', 'Eager to Please', 'Timid', 'Confident'] as const;

const BADGES = [
  { title: 'First Steps',     earned: true,  icon: <PawIcon size={18}/>     },
  { title: 'On a Roll',       earned: true,  icon: <FlameIcon size={18}/>   },
  { title: 'Treat Hunter',    earned: true,  icon: <BoneIcon size={18}/>    },
  { title: 'Graduate',        earned: false, icon: <TrophyIcon size={18}/>  },
  { title: 'Top Dog',         earned: false, icon: <StarIcon size={18}/>    },
  { title: 'Trail Blazer',    earned: false, icon: <TargetIcon size={18}/>  },
];

const WINS = [
  { name: 'Bella',  breed: 'Poodle',           msg: 'Finally nailed Stay after 3 days!',          time: '2h ago' },
  { name: 'Max',    breed: 'Labrador',          msg: 'Completed Leash Training — no more pulling!', time: '5h ago' },
  { name: 'Luna',   breed: 'Golden Retriever',  msg: 'Sit & Come on the first try today 🎉',        time: '1d ago' },
  { name: 'Biscuit',breed: 'Beagle',            msg: 'Finished Puppy Basics in under 2 weeks!',    time: '2d ago' },
];

const TRAINERS = [
  { name: 'Happy Paws Training', distance: '0.8 mi', specialty: 'Obedience & Puppy Classes', rating: 4.9, reviews: 87,  verified: true  },
  { name: 'K9 Pro Academy',      distance: '1.2 mi', specialty: 'Advanced & Agility',         rating: 4.8, reviews: 63,  verified: true  },
  { name: 'Urban Dog School',    distance: '2.1 mi', specialty: 'City Manners & Leash Work',  rating: 4.7, reviews: 112, verified: false },
];

const PERKS = [
  { partner: 'PetSmart',       deal: '15% off harnesses',           code: 'PAWSTEP15' },
  { partner: 'Chewy',          deal: 'Free first treat box',        code: 'PAWFIRST'  },
  { partner: 'BarkBox',        deal: '$10 off first month',         code: 'BARKPAW10' },
];

export default function Profile() {
  const [avatar,    setAvatar]    = useState<Avatar | null>(null);
  const [mode,      setMode]      = useState<string | null>(null);
  const [energy,    setEnergy]    = useState<string>('High');
  const [age,       setAge]       = useState<string>('8 months');
  const [tags,      setTags]      = useState<string[]>(['Playful', 'Eager to Please']);
  const [editPet,   setEditPet]   = useState(false);

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

  function toggleTag(tag: string) {
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  }

  return (
    <div className="flex flex-1 flex-col bg-amber-50 pb-6">

      {/* Profile header */}
      <div className="shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 px-5 pt-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/20 p-1.5 shadow-md">
            <DogFace breed={breed} size={68}/>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xl font-extrabold text-white leading-tight">{pupName}</p>
            <p className="text-xs text-amber-100 mb-1">{breed} · {age}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {tags.map(t => (
                <span key={t} className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-white">
                <FlameIcon size={12}/><span className="text-xs font-bold">{STREAK}d</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <StarIcon size={12}/><span className="text-xs font-bold">{XP} XP · Lv {LEVEL}</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <PawIcon size={12}/><span className="text-xs font-bold">{PAW_PTS} pts</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setEditPet(v => !v)}
            className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold text-white border border-white/30 shrink-0"
          >
            Edit
          </button>
        </div>

        {/* Guest upsell */}
        {mode === 'guest' && (
          <Link href="/setup">
            <div className="mt-3 rounded-xl bg-white/20 border border-white/30 px-4 py-2.5 flex items-center justify-between">
              <p className="text-xs font-semibold text-white">Save your progress — create a free account</p>
              <ChevronRightIcon size={14} className="text-white/70 shrink-0"/>
            </div>
          </Link>
        )}
      </div>

      {/* Pet detail editor */}
      {editPet && (
        <div className="mx-5 -mt-4 mb-3 rounded-2xl bg-white border border-amber-200 shadow-md p-4">
          <p className="text-xs font-bold text-amber-700 mb-3">Pet Details</p>

          <div className="mb-3">
            <p className="text-[10px] font-semibold text-stone-500 mb-1.5">Age</p>
            <div className="flex flex-wrap gap-1.5">
              {['8 weeks', '3 months', '6 months', '8 months', '1 year', '2+ years'].map(a => (
                <button
                  key={a}
                  onClick={() => setAge(a)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                    age === a ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <p className="text-[10px] font-semibold text-stone-500 mb-1.5">Energy Level</p>
            <div className="flex gap-1.5">
              {ENERGY_LEVELS.map(e => (
                <button
                  key={e}
                  onClick={() => setEnergy(e)}
                  className={`flex-1 rounded-full py-1.5 text-[10px] font-semibold transition-colors ${
                    energy === e ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-stone-500 mb-1.5">Temperament</p>
            <div className="flex flex-wrap gap-1.5">
              {TEMPERAMENT_OPTIONS.map(t => (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                    tags.includes(t) ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setEditPet(false)}
            className="mt-3 w-full rounded-xl bg-amber-600 py-2 text-xs font-bold text-white active:bg-amber-700"
          >
            Save
          </button>
        </div>
      )}

      {/* Stats row */}
      {!editPet && (
        <div className="-mt-4 mx-5 mb-4">
          <div className="rounded-2xl bg-white shadow-md border border-amber-100 p-4">
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="text-lg font-extrabold text-amber-900">{TOTAL_WALKS}</p>
                <p className="text-[9px] text-stone-400 leading-tight">Walks</p>
              </div>
              <div>
                <p className="text-lg font-extrabold text-amber-900">5</p>
                <p className="text-[9px] text-stone-400 leading-tight">Sessions</p>
              </div>
              <div>
                <p className="text-lg font-extrabold text-amber-900">12</p>
                <p className="text-[9px] text-stone-400 leading-tight">Lessons</p>
              </div>
              <div>
                <p className="text-lg font-extrabold text-amber-900">{PAW_PTS}</p>
                <p className="text-[9px] text-stone-400 leading-tight">PawPts</p>
              </div>
            </div>
            {/* Walk bar */}
            <div className="mt-3 flex gap-1 justify-between">
              {WALKS.map((n, i) => (
                <div key={i} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-md py-1.5 flex items-center justify-center ${
                    n >= 2 ? 'bg-amber-500' : n === 1 ? 'bg-amber-200' : 'bg-stone-100'
                  }`}>
                    <span className={`text-[9px] font-bold ${n > 0 ? 'text-white' : 'text-stone-300'}`}>{n || '·'}</span>
                  </div>
                  <span className="text-[8px] text-stone-400">{WALK_DAYS[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PawPoints loyalty */}
      <div className="mx-5 mb-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-500 to-amber-600 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <PawIcon size={14} className="text-white"/>
              <p className="text-sm font-extrabold text-white">PawPoints: {PAW_PTS}</p>
            </div>
            <p className="text-[11px] text-amber-100">Earn points every training session · Redeem for discounts</p>
          </div>
          <button className="rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-amber-700 shrink-0 active:bg-amber-50">
            Redeem
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="mx-5 mb-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-amber-600">Achievements</p>
        <div className="grid grid-cols-3 gap-2">
          {BADGES.map(badge => (
            <div
              key={badge.title}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 p-3 text-center ${
                badge.earned ? 'border-amber-300 bg-amber-50' : 'border-stone-100 bg-white opacity-40'
              }`}
            >
              <div className={badge.earned ? 'text-amber-500' : 'text-stone-300'}>{badge.icon}</div>
              <p className={`text-[10px] font-bold leading-tight ${badge.earned ? 'text-amber-900' : 'text-stone-300'}`}>
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Community wins */}
      <div className="mx-5 mb-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Community Wins</p>
          <span className="text-[10px] text-stone-400">See all</span>
        </div>
        <div className="space-y-2">
          {WINS.map(win => (
            <div key={win.name} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white p-3 shadow-sm">
              <div className="shrink-0 rounded-xl bg-amber-50 p-0.5">
                <DogFace breed={win.breed} size={40}/>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-amber-900">{win.name}</p>
                <p className="text-[11px] text-stone-600 leading-snug">{win.msg}</p>
              </div>
              <span className="shrink-0 text-[9px] text-stone-400">{win.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local trainers */}
      <div className="mx-5 mb-4">
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon size={13} className="text-amber-600"/>
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Local Trainers</p>
        </div>
        <div className="space-y-2">
          {TRAINERS.map(trainer => (
            <div key={trainer.name} className="rounded-2xl border border-amber-100 bg-white p-3.5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-sm font-bold text-amber-900 leading-tight">{trainer.name}</p>
                    {trainer.verified && (
                      <span className="shrink-0 rounded-full bg-blue-100 px-1.5 py-0.5 text-[8px] font-bold text-blue-700">CPDT-KA</span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500">{trainer.specialty}</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} size={9} className={i < Math.round(trainer.rating) ? 'text-amber-400' : 'text-stone-200'}/>
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400">{trainer.rating} ({trainer.reviews})</span>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-1.5">
                  <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-0.5">
                    <MapPinIcon size={9}/>{trainer.distance}
                  </span>
                  <button className="rounded-full bg-amber-600 px-3 py-1 text-[10px] font-bold text-white active:bg-amber-700">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner perks */}
      <div className="mx-5">
        <div className="mb-2 flex items-center gap-2">
          <LightningIcon size={13} className="text-amber-600"/>
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Partner Perks</p>
        </div>
        <div className="space-y-2">
          {PERKS.map(perk => (
            <div key={perk.partner} className="flex items-center justify-between rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
              <div>
                <p className="text-xs font-bold text-amber-900">{perk.partner}</p>
                <p className="text-[11px] text-stone-500">{perk.deal}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1">
                  <PawIcon size={9} className="text-amber-600"/>
                  <span className="text-[9px] font-bold text-amber-700">{perk.code}</span>
                </div>
                <CheckCircleIcon size={14} className="text-green-500"/>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[10px] text-stone-400">PawPoints unlock new perks every 100 pts earned</p>
      </div>

    </div>
  );
}
