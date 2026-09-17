'use client';
import { useState } from 'react';
import Link from 'next/link';
import PetFace from '@/components/PetFace';
import { PawIcon, MapPinIcon, StarIcon, FlameIcon, BoneIcon } from '@/components/Icon';

type PetType = 'dog' | 'cat';

const TABS = ['Feed', 'Find Friends', 'Events'] as const;
type Tab = typeof TABS[number];

const FEED = [
  { name: 'Bella',   breed: 'Golden Retriever', type: 'dog' as PetType, owner: 'Sarah M.',  msg: 'Finally nailed Stay after 3 days of practice!',    time: '2h ago',  reactions: 14 },
  { name: 'Mochi',   breed: 'Tabby',            type: 'cat' as PetType, owner: 'James K.',  msg: 'Learned 3 button words — outside, food & play 🎉', time: '4h ago',  reactions: 22 },
  { name: 'Max',     breed: 'Labrador',          type: 'dog' as PetType, owner: 'Chris L.',  msg: 'Week 2 of Leash Training done. No more pulling!',   time: '6h ago',  reactions: 9  },
  { name: 'Luna',    breed: 'Siamese',           type: 'cat' as PetType, owner: 'Priya N.',  msg: 'High Five on the first try today — she\'s a genius', time: '1d ago',  reactions: 31 },
  { name: 'Biscuit', breed: 'Beagle',            type: 'dog' as PetType, owner: 'Tyler R.',  msg: 'Finished Puppy Basics in 12 days!',                 time: '1d ago',  reactions: 18 },
  { name: 'Nori',    breed: 'Persian',           type: 'cat' as PetType, owner: 'Emma W.',   msg: 'Clicker training is changing everything for us.',   time: '2d ago',  reactions: 7  },
];

const FRIENDS = [
  { name: 'Daisy',  breed: 'French Bulldog',  type: 'dog' as PetType, age: '6 mo', energy: 'High',   distance: '0.4 mi' },
  { name: 'Oliver', breed: 'Maine Coon',       type: 'cat' as PetType, age: '1 yr', energy: 'Medium', distance: '0.7 mi' },
  { name: 'Pepper', breed: 'Corgi',            type: 'dog' as PetType, age: '8 mo', energy: 'High',   distance: '1.1 mi' },
  { name: 'Willow', breed: 'Bengal',           type: 'cat' as PetType, age: '2 yr', energy: 'High',   distance: '1.4 mi' },
  { name: 'Rocky',  breed: 'German Shepherd',  type: 'dog' as PetType, age: '1 yr', energy: 'High',   distance: '1.8 mi' },
  { name: 'Chai',   breed: 'Siamese',          type: 'cat' as PetType, age: '3 yr', energy: 'Low',    distance: '2.2 mi' },
];

const EVENTS = [
  {
    title: 'Puppy Playdate @ Riverside Park',
    type: 'dog' as PetType,
    date: 'Sat, Sep 20 · 10:00 AM',
    location: 'Riverside Dog Park',
    attending: 12,
    maxCapacity: 20,
    host: 'Downtown Pup Club',
  },
  {
    title: 'Cat Clicker Crew — Weekly Session',
    type: 'cat' as PetType,
    date: 'Sun, Sep 21 · 2:00 PM',
    location: 'Urban Paws Studio',
    attending: 6,
    maxCapacity: 10,
    host: 'Mochi\'s Cat Club',
  },
  {
    title: 'Leash Training Group Walk',
    type: 'dog' as PetType,
    date: 'Mon, Sep 22 · 7:30 AM',
    location: 'Greenway Trail',
    attending: 8,
    maxCapacity: 15,
    host: 'K9 Pro Academy',
  },
  {
    title: 'Indoor Cat Agility Intro',
    type: 'cat' as PetType,
    date: 'Wed, Sep 24 · 6:00 PM',
    location: 'Happy Paws Studio',
    attending: 4,
    maxCapacity: 8,
    host: 'City Cat Trainers',
  },
];

function Avatar({ breed, type, size }: { breed: string; type: PetType; size: number }) {
  return <PetFace breed={breed} type={type} size={size}/>;
}

const energyColor: Record<string, string> = {
  Low: 'bg-blue-100 text-blue-700',
  Medium: 'bg-green-100 text-green-700',
  High: 'bg-orange-100 text-orange-700',
};

export default function Community() {
  const [tab, setTab]           = useState<Tab>('Feed');
  const [liked, setLiked]       = useState<Set<number>>(new Set());
  const [rsvpd, setRsvpd]       = useState<Set<number>>(new Set());
  const [hiSent, setHiSent]     = useState<Set<number>>(new Set());

  return (
    <div className="flex flex-1 flex-col bg-amber-50">

      {/* Header */}
      <div className="shrink-0 bg-white border-b border-amber-200 px-5 pt-4 pb-0">
        <h1 className="text-base font-extrabold text-amber-900 mb-3">Community</h1>
        <div className="flex gap-1">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 text-xs font-bold border-b-2 transition-colors ${
                tab === t ? 'border-amber-600 text-amber-700' : 'border-transparent text-stone-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">

        {/* ── Feed ─────────────────────────────────────────── */}
        {tab === 'Feed' && (
          <div className="space-y-3">
            {FEED.map((post, i) => (
              <div key={i} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 rounded-xl bg-amber-50 p-0.5">
                    <Avatar breed={post.breed} type={post.type} size={44}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <p className="text-sm font-bold text-amber-900">{post.name}</p>
                      <span className="text-[10px] text-stone-400">by {post.owner}</span>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-snug mt-0.5">{post.msg}</p>
                  </div>
                  <span className="shrink-0 text-[9px] text-stone-400">{post.time}</span>
                </div>
                <div className="mt-2.5 flex items-center gap-3">
                  <button
                    onClick={() => setLiked(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                      liked.has(i) ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    <PawIcon size={10}/>
                    {post.reactions + (liked.has(i) ? 1 : 0)}
                  </button>
                  <span className="text-[10px] text-stone-400">{post.type === 'dog' ? 'Dog' : 'Cat'} · {post.breed}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Find Friends ─────────────────────────────────── */}
        {tab === 'Find Friends' && (
          <div className="space-y-2.5">
            <p className="text-[10px] text-stone-400 mb-3">Pets looking for friends near you</p>
            {FRIENDS.map((friend, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white p-3 shadow-sm">
                <div className="shrink-0 rounded-xl bg-amber-50 p-0.5">
                  <Avatar breed={friend.breed} type={friend.type} size={48}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-sm font-bold text-amber-900">{friend.name}</p>
                    <span className="text-[9px] text-stone-400">{friend.type === 'dog' ? 'Dog' : 'Cat'}</span>
                  </div>
                  <p className="text-[11px] text-stone-500">{friend.breed} · {friend.age}</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${energyColor[friend.energy]}`}>
                      {friend.energy} energy
                    </span>
                    <span className="text-[10px] text-stone-400 flex items-center gap-0.5">
                      <MapPinIcon size={9}/>{friend.distance}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setHiSent(s => { const n = new Set(s); n.add(i); return n; })}
                  className={`shrink-0 rounded-xl px-3 py-2 text-[11px] font-bold transition-colors ${
                    hiSent.has(i)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-600 text-white active:bg-amber-700'
                  }`}
                >
                  {hiSent.has(i) ? 'Sent!' : 'Say Hi'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── Events ───────────────────────────────────────── */}
        {tab === 'Events' && (
          <div className="space-y-3">
            {EVENTS.map((event, i) => {
              const spotsLeft = event.maxCapacity - event.attending - (rsvpd.has(i) ? 1 : 0);
              return (
                <div key={i} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                        event.type === 'dog' ? 'bg-amber-100 text-amber-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {event.type === 'dog' ? 'Dog' : 'Cat'}
                      </div>
                      <span className="text-[10px] text-stone-400">{event.host}</span>
                    </div>
                    <span className="text-[9px] text-stone-400 shrink-0">{spotsLeft} spots left</span>
                  </div>
                  <p className="text-sm font-bold text-amber-900 mb-1">{event.title}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1 text-[11px] text-stone-500">
                      <StarIcon size={10} className="text-amber-400"/>
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500">
                      <MapPinIcon size={10} className="text-amber-500"/>
                      {event.location}
                    </div>
                  </div>
                  {/* Attendance bar */}
                  <div className="mb-3">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-amber-100">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: `${Math.round(((event.attending + (rsvpd.has(i) ? 1 : 0)) / event.maxCapacity) * 100)}%` }}
                      />
                    </div>
                    <p className="mt-1 text-[9px] text-stone-400">
                      {event.attending + (rsvpd.has(i) ? 1 : 0)} / {event.maxCapacity} attending
                    </p>
                  </div>
                  <button
                    onClick={() => setRsvpd(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                    disabled={spotsLeft <= 0 && !rsvpd.has(i)}
                    className={`w-full rounded-xl py-2.5 text-xs font-bold transition-colors ${
                      rsvpd.has(i)
                        ? 'bg-green-100 text-green-700'
                        : spotsLeft <= 0
                        ? 'bg-stone-100 text-stone-400'
                        : 'bg-amber-600 text-white active:bg-amber-700'
                    }`}
                  >
                    {rsvpd.has(i) ? 'Going! (Tap to cancel)' : spotsLeft <= 0 ? 'Full' : 'RSVP'}
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
