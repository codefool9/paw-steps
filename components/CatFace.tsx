'use client';

export type CatBreedDef = {
  name: string;
  face: string;
  ear: string;
  earInner: string;
  eyeColor: string;
  outline: string;
};

export const CAT_BREEDS: CatBreedDef[] = [
  { name: 'Tabby',         face: '#F5C27A', ear: '#E8A855', earInner: '#FADA9A', eyeColor: '#5BA85B', outline: '#8B6A20' },
  { name: 'Siamese',       face: '#F5EAD0', ear: '#C8A878', earInner: '#F0DDB8', eyeColor: '#4A8FD9', outline: '#7A6040' },
  { name: 'Persian',       face: '#F8E4C8', ear: '#EDD0A0', earInner: '#F8E8D8', eyeColor: '#C87040', outline: '#9A7050' },
  { name: 'Maine Coon',    face: '#C8A878', ear: '#B09060', earInner: '#D8B888', eyeColor: '#6A9A30', outline: '#705030' },
  { name: 'Bengal',        face: '#D8883C', ear: '#C07030', earInner: '#E8A860', eyeColor: '#5BA85B', outline: '#804020' },
  { name: 'Black Cat',     face: '#4A4A4A', ear: '#3A2A2A', earInner: '#6A3A3A', eyeColor: '#C8B820', outline: '#2A2A2A' },
  { name: 'Orange Cat',    face: '#F08030', ear: '#D86820', earInner: '#F8A860', eyeColor: '#5BA85B', outline: '#904010' },
  { name: 'Calico',        face: '#F5DEB3', ear: '#E8C890', earInner: '#FAE8C8', eyeColor: '#8B4513', outline: '#8B6040' },
];

export const PRESET_CAT_BREEDS = CAT_BREEDS.slice(0, 4);
export const MORE_CAT_BREEDS   = CAT_BREEDS.slice(4);
export const ALL_CAT_BREEDS    = CAT_BREEDS;

type Props = { breed: string; size?: number; className?: string };

export default function CatFace({ breed, size = 64, className = '' }: Props) {
  const def = CAT_BREEDS.find(b => b.name === breed) ?? CAT_BREEDS[0];
  const { face, ear, earInner, eyeColor, outline } = def;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-label={breed}
    >
      {/* Outer ears */}
      <path d="M 10 52 L 25 12 L 43 46 Z" fill={ear} stroke={outline} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M 90 52 L 75 12 L 57 46 Z" fill={ear} stroke={outline} strokeWidth="2" strokeLinejoin="round"/>
      {/* Inner ears */}
      <path d="M 17 49 L 26 18 L 38 45 Z" fill={earInner}/>
      <path d="M 83 49 L 74 18 L 62 45 Z" fill={earInner}/>
      {/* Face */}
      <ellipse cx="50" cy="63" rx="36" ry="30" fill={face} stroke={outline} strokeWidth="2.5"/>
      {/* Eyes */}
      <path d="M 29 55 Q 37 48 45 55 Q 37 62 29 55 Z" fill={eyeColor} stroke={outline} strokeWidth="1.5"/>
      <path d="M 55 55 Q 63 48 71 55 Q 63 62 55 55 Z" fill={eyeColor} stroke={outline} strokeWidth="1.5"/>
      {/* Pupils — vertical slit */}
      <ellipse cx="37" cy="55" rx="1.8" ry="5" fill="#1A1A1A"/>
      <ellipse cx="63" cy="55" rx="1.8" ry="5" fill="#1A1A1A"/>
      {/* Eye shine */}
      <circle cx="40" cy="51" r="1.2" fill="white"/>
      <circle cx="66" cy="51" r="1.2" fill="white"/>
      {/* Nose */}
      <path d="M 47 68 L 50 64 L 53 68 Z" fill="#D4728A" stroke={outline} strokeWidth="1"/>
      {/* Mouth */}
      <path d="M 47 68 Q 44 72 41 71" stroke={outline} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M 53 68 Q 56 72 59 71" stroke={outline} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Whisker dots */}
      <circle cx="24" cy="65" r="1.3" fill={outline}/>
      <circle cx="21" cy="69" r="1.3" fill={outline}/>
      <circle cx="25" cy="73" r="1.3" fill={outline}/>
      <circle cx="76" cy="65" r="1.3" fill={outline}/>
      <circle cx="79" cy="69" r="1.3" fill={outline}/>
      <circle cx="75" cy="73" r="1.3" fill={outline}/>
    </svg>
  );
}
