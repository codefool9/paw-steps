'use client';
import { usePathname } from 'next/navigation';
import BottomNav from './BottomNav';

const NO_NAV = ['/', '/setup', '/lesson', '/onboarding'];

export default function ConditionalNav() {
  const pathname = usePathname();
  if (NO_NAV.includes(pathname)) return null;
  return <BottomNav />;
}
