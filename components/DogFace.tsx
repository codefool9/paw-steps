'use client';
import React from 'react';

type FaceType = 'floppy' | 'pointy' | 'bat' | 'fluffy' | 'flat' | 'longear' | 'husky';

interface BreedDef {
  type: FaceType;
  face: string;
  ear: string;
  earInner?: string;
  mark?: string;
  outline: string;
  eyeColor?: string;
}

export const ALL_BREEDS: { name: string; def: BreedDef }[] = [
  // ── Featured 6 ──────────────────────────────────────────────────────────
  { name: 'Golden Retriever',       def: { type: 'floppy',  face: '#E8B870', ear: '#C48C30', earInner: '#D4A050',                   outline: '#5C3A10' } },
  { name: 'Labrador',               def: { type: 'floppy',  face: '#EDD898', ear: '#C9A050', earInner: '#B88830',                   outline: '#5C3A10' } },
  { name: 'Poodle',                 def: { type: 'fluffy',  face: '#F5F0E0', ear: '#E0D8C0', earInner: '#F0EAD0',                   outline: '#6B5C3A' } },
  { name: 'Beagle',                 def: { type: 'floppy',  face: '#D4A86A', ear: '#5C3A18', earInner: '#8C5A28', mark: '#F5F0E0',  outline: '#3A2010' } },
  { name: 'Siberian Husky',         def: { type: 'husky',   face: '#E8E8F0', ear: '#808898', earInner: '#E8E8F0', mark: '#606870',  outline: '#303848', eyeColor: '#3A78E0' } },
  { name: 'Dachshund',              def: { type: 'floppy',  face: '#8B4513', ear: '#5C2C08', earInner: '#7A3A10',                   outline: '#3A1A08' } },
  // ── More Breeds ──────────────────────────────────────────────────────────
  { name: 'French Bulldog',         def: { type: 'bat',     face: '#E8D4A8', ear: '#C4B090', earInner: '#D4C090',                   outline: '#4A3820' } },
  { name: 'German Shepherd',        def: { type: 'pointy',  face: '#C4883A', ear: '#1A0A00', earInner: '#C4883A', mark: '#F5E8C0',  outline: '#2A1A0A' } },
  { name: 'Bulldog',                def: { type: 'flat',    face: '#D4C4A8', ear: '#C0B098', earInner: '#D0C0A8',                   outline: '#5A4830' } },
  { name: 'Rottweiler',             def: { type: 'floppy',  face: '#1A1210', ear: '#0A0808', earInner: '#1A1210', mark: '#C47830',  outline: '#080808' } },
  { name: 'Yorkshire Terrier',      def: { type: 'pointy',  face: '#C8A040', ear: '#2A2020', earInner: '#C8A040',                   outline: '#3A2810' } },
  { name: 'Boxer',                  def: { type: 'flat',    face: '#D89050', ear: '#C07838', earInner: '#C88040', mark: '#F5F0E8',  outline: '#5C3810' } },
  { name: 'Great Dane',             def: { type: 'floppy',  face: '#D4A46A', ear: '#B08040', earInner: '#C49050',                   outline: '#5C3A10' } },
  { name: 'Doberman',               def: { type: 'pointy',  face: '#1A1210', ear: '#0A0808', earInner: '#B05820', mark: '#B05820',  outline: '#080808' } },
  { name: 'Corgi',                  def: { type: 'bat',     face: '#E8A840', ear: '#E8A840', earInner: '#F5E0B0', mark: '#F5E0B0',  outline: '#5C4010' } },
  { name: 'Australian Shepherd',    def: { type: 'pointy',  face: '#9098B0', ear: '#707888', earInner: '#9098B0', mark: '#F5F0E8',  outline: '#303848' } },
  { name: 'Mini Schnauzer',         def: { type: 'floppy',  face: '#909090', ear: '#606060', earInner: '#A0A0A0',                   outline: '#303030' } },
  { name: 'Shih Tzu',               def: { type: 'fluffy',  face: '#E8D8B8', ear: '#C8B898', earInner: '#E0CCAA',                   outline: '#5C4A28' } },
  { name: 'Border Collie',          def: { type: 'pointy',  face: '#101010', ear: '#101010', earInner: '#101010', mark: '#F5F5F5',  outline: '#101010' } },
  { name: 'Cocker Spaniel',         def: { type: 'longear', face: '#D4A840', ear: '#B08030', earInner: '#C09040',                   outline: '#5C3A10' } },
  { name: 'Bernese Mountain',       def: { type: 'floppy',  face: '#101010', ear: '#0A0808', earInner: '#101010', mark: '#C07830',  outline: '#080808' } },
  { name: 'Chihuahua',              def: { type: 'bat',     face: '#D4A860', ear: '#C09040', earInner: '#E8C880',                   outline: '#5C3A10' } },
  { name: 'Pomeranian',             def: { type: 'fluffy',  face: '#E87830', ear: '#C05818', earInner: '#F09040',                   outline: '#5C2A08' } },
  { name: 'Saint Bernard',          def: { type: 'floppy',  face: '#C08040', ear: '#8A5020', earInner: '#B07030', mark: '#F5F0E8',  outline: '#402010' } },
  { name: 'Maltese',                def: { type: 'fluffy',  face: '#F8F5F0', ear: '#E8E0D8', earInner: '#F5F0E8',                   outline: '#909080' } },
  { name: 'Weimaraner',             def: { type: 'floppy',  face: '#90A0A8', ear: '#708090', earInner: '#A0B0B8',                   outline: '#304050' } },
  { name: 'Vizsla',                 def: { type: 'floppy',  face: '#C87830', ear: '#A85E18', earInner: '#B86C20',                   outline: '#5C3010' } },
  { name: 'Bichon Frise',           def: { type: 'fluffy',  face: '#F8F5F0', ear: '#E0D8D0', earInner: '#F5F0E8',                   outline: '#909080' } },
  { name: 'Cavalier King Charles',  def: { type: 'longear', face: '#C06040', ear: '#8A3818', earInner: '#B05030', mark: '#F5F0E8',  outline: '#5C2A10' } },
  { name: 'Jack Russell',           def: { type: 'pointy',  face: '#F5F5F0', ear: '#C4783A', earInner: '#F5F5F0', mark: '#C4783A',  outline: '#404040' } },
];

export const PRESET_BREEDS = ALL_BREEDS.slice(0, 6);
export const MORE_BREEDS   = ALL_BREEDS.slice(6);

function renderFace(def: BreedDef): React.ReactNode {
  const { type, face, ear, earInner = face, mark, outline, eyeColor } = def;
  const eye = eyeColor || outline;

  const eyes = (cx1: number, cy1: number, cx2: number, cy2: number, r = 7) => (
    <>
      <circle cx={cx1} cy={cy1} r={r}   fill="white" stroke={outline} strokeWidth="1.8"/>
      <circle cx={cx2} cy={cy2} r={r}   fill="white" stroke={outline} strokeWidth="1.8"/>
      <circle cx={cx1 + 1} cy={cy1 + 1.5} r={r * 0.58} fill={eye}/>
      <circle cx={cx2 + 1} cy={cy2 + 1.5} r={r * 0.58} fill={eye}/>
      <circle cx={cx1 - 1} cy={cy1 - 1} r={r * 0.2} fill="white"/>
      <circle cx={cx2 - 1} cy={cy2 - 1} r={r * 0.2} fill="white"/>
    </>
  );

  const nose = (cx: number, cy: number) => (
    <>
      <ellipse cx={cx}   cy={cy}       rx="7"   ry="5"   fill={outline}/>
      <ellipse cx={cx-2} cy={cy - 1.5} rx="2"   ry="1.5" fill="white" opacity="0.45"/>
    </>
  );

  const mouth = (cx: number, cy: number) => (
    <path d={`M ${cx-7} ${cy} Q ${cx} ${cy+5} ${cx+7} ${cy}`} fill="none" stroke={outline} strokeWidth="1.5" strokeLinecap="round"/>
  );

  switch (type) {
    case 'floppy': return (
      <>
        <path d="M 27 32 C 10 36 5 58 9 72 C 13 83 24 84 28 76 C 33 70 30 42 27 32 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 73 32 C 90 36 95 58 91 72 C 87 83 76 84 72 76 C 67 70 70 42 73 32 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 26 37 C 13 40 10 60 14 70 C 17 77 24 77 27 70 C 29 63 28 46 26 37 Z" fill={earInner}/>
        <path d="M 74 37 C 87 40 90 60 86 70 C 83 77 76 77 73 70 C 71 63 72 46 74 37 Z" fill={earInner}/>
        <circle  cx="50" cy="50" r="32"  fill={face} stroke={outline} strokeWidth="2.5"/>
        {mark && <ellipse cx="50" cy="55" rx="18" ry="13" fill={mark}/>}
        {eyes(37, 44, 63, 44)}
        <ellipse cx="50" cy="58" rx="14" ry="9"  fill={mark || earInner} stroke={outline} strokeWidth="1.5"/>
        {nose(50, 55)} {mouth(50, 64)}
      </>
    );

    case 'pointy': return (
      <>
        <path d="M 20 52 Q 12 32 24 12 Q 28 7 34 12 Q 42 32 40 52 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 80 52 Q 88 32 76 12 Q 72 7 66 12 Q 58 32 60 52 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 23 50 Q 17 34 25 16 Q 28 12 31 16 Q 38 34 36 50 Z" fill={earInner}/>
        <path d="M 77 50 Q 83 34 75 16 Q 72 12 69 16 Q 62 34 64 50 Z" fill={earInner}/>
        <circle  cx="50" cy="54" r="30"  fill={face} stroke={outline} strokeWidth="2.5"/>
        {mark && <ellipse cx="50" cy="49" rx="13" ry="21" fill={mark} opacity="0.7"/>}
        {eyes(37, 47, 63, 47)}
        <ellipse cx="50" cy="61" rx="12" ry="8"  fill={mark || earInner} stroke={outline} strokeWidth="1.5"/>
        {nose(50, 58)} {mouth(50, 66)}
      </>
    );

    case 'bat': return (
      <>
        <path d="M 14 65 Q 3 42 18 14 Q 24 7 33 14 Q 42 38 44 62 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 86 65 Q 97 42 82 14 Q 76 7 67 14 Q 58 38 56 62 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 18 61 Q 9 44 21 19 Q 26 13 32 19 Q 39 40 40 59 Z" fill={earInner}/>
        <path d="M 82 61 Q 91 44 79 19 Q 74 13 68 19 Q 61 40 60 59 Z" fill={earInner}/>
        <ellipse cx="50" cy="58" rx="34" ry="28" fill={face} stroke={outline} strokeWidth="2.5"/>
        {mark && <ellipse cx="50" cy="56" rx="22" ry="14" fill={mark} opacity="0.5"/>}
        {eyes(37, 50, 63, 50, 7.5)}
        <ellipse cx="50" cy="65" rx="16" ry="10" fill={earInner}    stroke={outline} strokeWidth="1.5"/>
        <path d="M 36 61 Q 50 57 64 61" fill="none" stroke={outline} strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
        {nose(50, 61)} {mouth(50, 70)}
      </>
    );

    case 'fluffy': return (
      <>
        <circle cx="18" cy="48" r="16" fill={ear} stroke={outline} strokeWidth="2"/>
        <circle cx="82" cy="48" r="16" fill={ear} stroke={outline} strokeWidth="2"/>
        <circle cx="50" cy="20" r="14" fill={ear} stroke={outline} strokeWidth="2"/>
        <circle cx="50" cy="52" r="28" fill={face} stroke={outline} strokeWidth="2"/>
        {eyes(37, 46, 63, 46, 6.5)}
        {nose(50, 57)} {mouth(50, 63)}
      </>
    );

    case 'flat': return (
      <>
        <path d="M 18 44 Q 10 32 16 23 Q 22 15 30 21 Q 36 27 32 38 Q 28 44 18 44 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 82 44 Q 90 32 84 23 Q 78 15 70 21 Q 64 27 68 38 Q 72 44 82 44 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 20 41 Q 14 33 19 26 Q 23 19 29 23 Q 33 28 30 37 Q 27 41 20 41 Z" fill={earInner}/>
        <path d="M 80 41 Q 86 33 81 26 Q 77 19 71 23 Q 66 28 70 37 Q 73 41 80 41 Z" fill={earInner}/>
        <ellipse cx="50" cy="54" rx="36" ry="28" fill={face} stroke={outline} strokeWidth="2.5"/>
        <path d="M 30 48 Q 42 43 50 45 Q 58 43 70 48" fill="none" stroke={outline} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        {mark && <ellipse cx="50" cy="60" rx="22" ry="12" fill={mark} opacity="0.3"/>}
        {eyes(36, 48, 64, 48, 7.5)}
        <ellipse cx="50" cy="63" rx="18" ry="11" fill={earInner} stroke={outline} strokeWidth="1.5"/>
        <ellipse cx="50" cy="59" rx="9"  ry="6"  fill={outline}/>
        <ellipse cx="47.5" cy="57" rx="2.5" ry="2" fill="white" opacity="0.45"/>
        {mouth(50, 70)}
      </>
    );

    case 'longear': return (
      <>
        <path d="M 26 36 C 9 40 4 65 8 82 C 12 94 26 95 30 86 C 35 78 32 46 26 36 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 74 36 C 91 40 96 65 92 82 C 88 94 74 95 70 86 C 65 78 68 46 74 36 Z" fill={ear} stroke={outline} strokeWidth="2.5"/>
        <path d="M 25 41 C 12 45 9 66 13 80 C 16 89 26 89 28 81 C 31 73 30 50 25 41 Z" fill={earInner}/>
        <path d="M 75 41 C 88 45 91 66 87 80 C 84 89 74 89 72 81 C 69 73 70 50 75 41 Z" fill={earInner}/>
        <circle  cx="50" cy="48" r="30"  fill={face} stroke={outline} strokeWidth="2.5"/>
        {mark && <ellipse cx="50" cy="40" rx="20" ry="15" fill={mark} opacity="0.5"/>}
        {eyes(37, 42, 63, 42)}
        <ellipse cx="50" cy="56" rx="13" ry="9"  fill={earInner} stroke={outline} strokeWidth="1.5"/>
        {nose(50, 52)} {mouth(50, 62)}
      </>
    );

    case 'husky': return (
      <>
        <path d="M 19 52 Q 10 30 23 11 Q 27 6 33 11 Q 42 30 40 52 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 81 52 Q 90 30 77 11 Q 73 6 67 11 Q 58 30 60 52 Z" fill={ear} stroke={outline} strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 22 50 Q 15 33 24 15 Q 27 11 31 15 Q 39 33 37 50 Z" fill={earInner}/>
        <path d="M 78 50 Q 85 33 76 15 Q 73 11 69 15 Q 61 33 63 50 Z" fill={earInner}/>
        <circle  cx="50" cy="52" r="31"  fill={mark || '#606870'} stroke={outline} strokeWidth="2.5"/>
        <ellipse cx="50" cy="57" rx="20" ry="22" fill={face}/>
        {eyes(37, 46, 63, 46, 7.5)}
        <ellipse cx="50" cy="63" rx="14" ry="9"  fill={face}      stroke={outline} strokeWidth="1.5"/>
        {nose(50, 59)} {mouth(50, 68)}
      </>
    );

    default: return null;
  }
}

interface DogFaceProps {
  breed: string;
  size?: number;
  className?: string;
}

export default function DogFace({ breed, size = 100, className = '' }: DogFaceProps) {
  const found = ALL_BREEDS.find(b => b.name === breed);
  const def = found?.def ?? { type: 'floppy' as FaceType, face: '#D4A86A', ear: '#B08040', outline: '#5C3A10' };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      {renderFace(def)}
    </svg>
  );
}
