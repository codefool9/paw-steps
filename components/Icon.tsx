// Flat-outlined SVG icon set — consistent with the dog face style

interface IconProps {
  className?: string;
  size?: number;
}

const base = (size: number, className: string, children: React.ReactNode) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

export function PawIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      {/* Central pad */}
      <ellipse cx="50" cy="62" rx="18" ry="14"/>
      {/* Top toe pads */}
      <circle cx="28" cy="42" r="9"/>
      <circle cx="44" cy="32" r="9"/>
      <circle cx="60" cy="32" r="9"/>
      <circle cx="74" cy="42" r="9"/>
    </svg>
  );
}

export function FlameIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-2-1-4-2-5 0 0 0 3-2 4-1-2-1-4-1-4z"/>
    </svg>
  );
}

export function StarIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export function BoneIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <path d="M8.5 14.5l5-5"/>
      <path d="M14.5 8.5A3 3 0 0018 5a3 3 0 00-3-3 3 3 0 00-3 3.5"/>
      <path d="M9.5 15.5A3 3 0 016 19a3 3 0 003 3 3 3 0 003-3.5"/>
      <path d="M14.5 8.5A3 3 0 0118 12a3 3 0 01-3 3"/>
      <path d="M9.5 15.5A3 3 0 016 12a3 3 0 013-3"/>
    </>
  );
}

export function LightningIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <path d="M13 2L4.09 12.96 11 12l-2 9L20 12h-7L13 2z" fill="currentColor" stroke="none"/>
  );
}

export function TrophyIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <path d="M8 21h8m-4 0v-4"/>
      <path d="M17 5h2a2 2 0 010 4h-2"/>
      <path d="M7 5H5a2 2 0 000 4h2"/>
      <path d="M7 3h10v9a5 5 0 01-10 0V3z"/>
    </>
  );
}

export function TargetIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </>
  );
}

export function LockIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </>
  );
}

export function BackIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  );
}

export function ChevronRightIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <path d="M9 18l6-6-6-6"/>
  );
}

export function CheckCircleIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12l3 3 5-5"/>
    </>
  );
}

export function ClickerIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <path d="M8 8a4 4 0 018 0v9a4 4 0 01-8 0V8z"/>
      <circle cx="12" cy="10.5" r="2"/>
      <path d="M9.3 4.2L12 1.8l2.7 2.4M12 1.8v2.4"/>
    </>
  );
}

export function MapPinIcon({ size = 24, className = '' }: IconProps) {
  return base(size, className,
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </>
  );
}
