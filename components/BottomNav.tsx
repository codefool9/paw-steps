'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  {
    href: '/home',
    label: 'Home',
    icon: (active: boolean) => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '0' : '2'} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    href: '/courses',
    label: 'Courses',
    icon: (active: boolean) => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: (active: boolean) => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke={active ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="flex shrink-0 items-stretch border-t border-amber-200 bg-white">
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href ||
          (tab.href === '/courses' && pathname === '/course');
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-1 flex-col items-center justify-center gap-1 py-3 transition-colors ${
              isActive ? 'text-amber-600' : 'text-stone-400 hover:text-amber-500'
            }`}
          >
            {tab.icon(isActive)}
            <span className={`text-[10px] font-semibold ${isActive ? 'text-amber-600' : 'text-stone-400'}`}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
