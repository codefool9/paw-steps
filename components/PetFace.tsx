'use client';

type PetType = 'dog' | 'cat';
type EmojiDef = { emoji: string; bg: string };

const DOG_MAP: Record<string, EmojiDef> = {
  'Golden Retriever':     { emoji: '🦮', bg: '#FDE68A' },
  'Labrador':             { emoji: '🐕', bg: '#FEF3C7' },
  'Beagle':               { emoji: '🐕', bg: '#FDBA74' },
  'Poodle':               { emoji: '🐩', bg: '#F9A8D4' },
  'German Shepherd':      { emoji: '🐺', bg: '#D6D3D1' },
  'French Bulldog':       { emoji: '🐶', bg: '#BAE6FD' },
  'Bulldog':              { emoji: '🐶', bg: '#C4B5A5' },
  'Corgi':                { emoji: '🦊', bg: '#FDBA74' },
  'Siberian Husky':       { emoji: '🐺', bg: '#BFDBFE' },
  'Border Collie':        { emoji: '🐕‍🦺', bg: '#D1FAE5' },
  'Dachshund':            { emoji: '🌭', bg: '#FED7AA' },
  'Chihuahua':            { emoji: '🐕', bg: '#FDE68A' },
  'Australian Shepherd':  { emoji: '🐕‍🦺', bg: '#C7D2FE' },
  'Dalmatian':            { emoji: '🐕', bg: '#F1F5F9' },
  'Doberman':             { emoji: '🐕', bg: '#D6D3D1' },
  'Shih Tzu':             { emoji: '🐶', bg: '#FCE7F3' },
  'Pomeranian':           { emoji: '🦊', bg: '#FED7AA' },
  'Yorkshire Terrier':    { emoji: '🐶', bg: '#FDE68A' },
  'Great Dane':           { emoji: '🐕', bg: '#CBD5E1' },
  'Rottweiler':           { emoji: '🐕', bg: '#D6D3D1' },
  'Cocker Spaniel':       { emoji: '🐕', bg: '#FDBA74' },
  'Cavalier King Charles':{ emoji: '🐕', bg: '#FCA5A5' },
  'Boxer':                { emoji: '🐕', bg: '#FDBA74' },
  'Weimaraner':           { emoji: '🐕', bg: '#CBD5E1' },
  'Vizsla':               { emoji: '🐕', bg: '#FED7AA' },
  'Maltese':              { emoji: '🐩', bg: '#F8FAFC' },
  'Bichon Frise':         { emoji: '🐩', bg: '#FEF9EE' },
  'Shiba Inu':            { emoji: '🦊', bg: '#FCA5A5' },
  'Miniature Schnauzer':  { emoji: '🐕', bg: '#CBD5E1' },
  'Basset Hound':         { emoji: '🐕', bg: '#FDBA74' },
};

const CAT_MAP: Record<string, EmojiDef> = {
  'Tabby':        { emoji: '🐱', bg: '#FDE68A' },
  'Siamese':      { emoji: '😸', bg: '#FEF3C7' },
  'Persian':      { emoji: '🐱', bg: '#F5D0FE' },
  'Maine Coon':   { emoji: '🐈', bg: '#FED7AA' },
  'Bengal':       { emoji: '🐱', bg: '#FDBA74' },
  'Black Cat':    { emoji: '🐈‍⬛', bg: '#D6D3D1' },
  'Orange Cat':   { emoji: '🐱', bg: '#FCA5A5' },
  'Calico':       { emoji: '🐱', bg: '#FDE68A' },
};

const DEFAULT: Record<PetType, EmojiDef> = {
  dog: { emoji: '🐶', bg: '#FDE68A' },
  cat: { emoji: '🐱', bg: '#FDE68A' },
};

type Props = { breed: string; type?: PetType; size?: number; className?: string };

export default function PetFace({ breed, type = 'dog', size = 64, className = '' }: Props) {
  const def = (type === 'cat' ? CAT_MAP : DOG_MAP)[breed] ?? DEFAULT[type];
  const fontSize = Math.round(size * 0.72);

  return (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center select-none shrink-0 ${className}`}
    >
      <span style={{ fontSize }} className="leading-none" role="img" aria-label={breed}>
        {def.emoji}
      </span>
    </div>
  );
}

export function petBg(breed: string, type: PetType = 'dog'): string {
  return ((type === 'cat' ? CAT_MAP : DOG_MAP)[breed] ?? DEFAULT[type]).bg;
}
