'use client';

type PetType = 'dog' | 'cat';
type EarType = 'floppy' | 'upright' | 'bat' | 'round' | 'folded' | 'wide';
type Mark = 'blaze' | 'white-cheeks';

interface DogCfg {
  head: string; ear: string; earType: EarType;
  innerEar?: string; snout?: string; topMark?: string;
  sideMark?: string; nose?: string; iris?: string;
  browDots?: string; spots?: boolean;
  marks?: Mark[];
}

interface CatCfg {
  head: string; ear: string;
  innerEar?: string; snout?: string; iris?: string;
  nose?: string; stripes?: string; points?: string;
  fold?: boolean;
}

// Colors match flat-illustrated reference images
const DOG_CONFIGS: Record<string, DogCfg> = {
  // ── Shiba Inu: red-orange with white cheek patches ─────────────────────
  'Shiba Inu':             { head:'#C83010', ear:'#C83010', earType:'upright', innerEar:'#F8D8A8', snout:'#F5EAD8', marks:['white-cheeks'] },
  // ── Samoyed: off-white fluffy ──────────────────────────────────────────
  'Samoyed':               { head:'#E4E4DC', ear:'#D0D0C8', earType:'round',   innerEar:'#FAFAF8', snout:'#F8F8F5' },
  // ── Beagle: cream face, tan floppy ears, black cap ─────────────────────
  'Beagle':                { head:'#F5F0EB', ear:'#C07028', earType:'floppy',  innerEar:'#9A5818', snout:'#FAFAF8', topMark:'#1A1208' },
  // ── Poodle: dark chocolate, round curly ears ───────────────────────────
  'Poodle':                { head:'#7A3828', ear:'#6A2818', earType:'round',   snout:'#9A5038' },
  // ── Chihuahua: tan with enormous bat ears ──────────────────────────────
  'Chihuahua':             { head:'#C07028', ear:'#B06020', earType:'bat',     innerEar:'#E8C088', snout:'#E8C088' },
  // ── Rottweiler: black, bold tan marks ─────────────────────────────────
  'Rottweiler':            { head:'#1A1208', ear:'#1A1208', earType:'folded',  snout:'#C07028', browDots:'#C07028', sideMark:'#C07028', nose:'#0A0806' },
  // ── Golden Retriever: warm golden, floppy ─────────────────────────────
  'Golden Retriever':      { head:'#E8A028', ear:'#C88018', earType:'floppy',  innerEar:'#D89020', snout:'#F0C060' },
  // ── Dalmatian: white with black spots ─────────────────────────────────
  'Dalmatian':             { head:'#F8F8F8', ear:'#F0F0F0', earType:'floppy',  snout:'#FFFFFF', spots:true },
  // ── Doberman: dark reddish-brown, upright ─────────────────────────────
  'Doberman':              { head:'#5A1C0A', ear:'#5A1C0A', earType:'upright', innerEar:'#C07028', snout:'#C07028', browDots:'#C07028', sideMark:'#C07028' },
  // ── Labrador: pale golden ─────────────────────────────────────────────
  'Labrador':              { head:'#E8C060', ear:'#D8B050', earType:'floppy',  innerEar:'#E8C878', snout:'#F5D888' },
  // ── Border Collie: dark navy, white blaze ─────────────────────────────
  'Border Collie':         { head:'#2A2A40', ear:'#2A2A40', earType:'floppy',  innerEar:'#F5F5F5', snout:'#F5F5F5', marks:['blaze'] },
  // ── French Bulldog: warm brown, bat ears ──────────────────────────────
  'French Bulldog':        { head:'#9A5820', ear:'#8A4810', earType:'bat',     innerEar:'#D09878', snout:'#C87848' },
  // ── Pomeranian: golden-orange, round fluffy ───────────────────────────
  'Pomeranian':            { head:'#E89018', ear:'#C87808', earType:'upright', innerEar:'#F5C040', snout:'#F5C860' },
  // ── Dachshund: warm chocolate, floppy ────────────────────────────────
  'Dachshund':             { head:'#9A4820', ear:'#7A3010', earType:'floppy',  innerEar:'#8A3818', snout:'#C07840' },
  // ── Australian Shepherd: dark indigo-navy ────────────────────────────
  'Australian Shepherd':   { head:'#2A3068', ear:'#2A3068', earType:'floppy',  snout:'#F5F0E8', topMark:'#1A2048', sideMark:'#C07028' },
  // ── Boxer: medium brown, small folded ears ────────────────────────────
  'Boxer':                 { head:'#A06028', ear:'#886018', earType:'folded',  snout:'#D8A870' },
  // ── Great Dane: dark gray-slate, upright ─────────────────────────────
  'Great Dane':            { head:'#3A4050', ear:'#2A3040', earType:'upright', innerEar:'#B0A898', snout:'#B0A898', iris:'#6070A0' },
  // ── Basset Hound: cream with very long brown ears ────────────────────
  'Basset Hound':          { head:'#F5EAD8', ear:'#C07028', earType:'wide',   innerEar:'#A86020', snout:'#FAFAF8', topMark:'#8B4010' },
  // ── Corgi: orange with white snout ───────────────────────────────────
  'Corgi':                 { head:'#E06820', ear:'#E06820', earType:'upright', innerEar:'#F5C070', snout:'#F5F0E8' },
  // ── German Shepherd ───────────────────────────────────────────────────
  'German Shepherd':       { head:'#C07830', ear:'#C07830', earType:'upright', innerEar:'#D89850', snout:'#D8A860', topMark:'#1C1208' },
  // ── Bulldog ───────────────────────────────────────────────────────────
  'Bulldog':               { head:'#B88840', ear:'#A07030', earType:'folded',  snout:'#D8A870' },
  // ── Siberian Husky ────────────────────────────────────────────────────
  'Siberian Husky':        { head:'#8090A8', ear:'#6A7A92', earType:'upright', innerEar:'#F0F0F0', snout:'#F0F0F0', topMark:'#2C3440', iris:'#4A78A8' },
  // ── Shih Tzu ──────────────────────────────────────────────────────────
  'Shih Tzu':              { head:'#F0E0B8', ear:'#D8C0A0', earType:'floppy', innerEar:'#E8D0A8', snout:'#FFFAF0' },
  // ── Yorkshire Terrier ─────────────────────────────────────────────────
  'Yorkshire Terrier':     { head:'#8890A0', ear:'#6878A0', earType:'floppy', innerEar:'#A8A080', snout:'#C8A868' },
  // ── Cocker Spaniel ────────────────────────────────────────────────────
  'Cocker Spaniel':        { head:'#C88040', ear:'#8B5020', earType:'wide',   innerEar:'#A86030', snout:'#E8B878' },
  // ── Cavalier King Charles ─────────────────────────────────────────────
  'Cavalier King Charles': { head:'#C07030', ear:'#6B3010', earType:'floppy', innerEar:'#7A4018', snout:'#F5E0C0' },
  // ── Weimaraner ───────────────────────────────────────────────────────
  'Weimaraner':            { head:'#A0A8B8', ear:'#9098A8', earType:'floppy', innerEar:'#B8C0D0', snout:'#C8CCD8', iris:'#6878A0' },
  // ── Vizsla ────────────────────────────────────────────────────────────
  'Vizsla':                { head:'#C07030', ear:'#A06020', earType:'floppy', innerEar:'#B07028', snout:'#D8A870', iris:'#785030' },
  // ── Maltese ───────────────────────────────────────────────────────────
  'Maltese':               { head:'#F8F6F0', ear:'#F0EEE8', earType:'floppy', innerEar:'#F8F6F0', snout:'#FFFFFF' },
  // ── Bichon Frise ──────────────────────────────────────────────────────
  'Bichon Frise':          { head:'#FFFFFF', ear:'#F8F6F0', earType:'round',  innerEar:'#F0EEE8', snout:'#FAFAF8' },
  // ── Miniature Schnauzer ───────────────────────────────────────────────
  'Miniature Schnauzer':   { head:'#9090A0', ear:'#80808C', earType:'upright', innerEar:'#A8A8B8', snout:'#D0D0D8' },
};

const CAT_CONFIGS: Record<string, CatCfg> = {
  // Siamese: cream with very dark face/points, blue eyes
  'Siamese':    { head:'#F5E8D8', ear:'#3A1808', innerEar:'#D89898', snout:'#F8F4F0', points:'#3A1808', iris:'#4878A8' },
  // Tabby: warm golden with tabby stripes
  'Tabby':      { head:'#C8A060', ear:'#B89050', innerEar:'#F0A0A0', snout:'#EED898', stripes:'#8B6030', iris:'#6A9040' },
  // Persian: white/cream, very round fluffy face
  'Persian':    { head:'#F5D098', ear:'#E8C080', innerEar:'#F0A8A8', snout:'#FFFAF0', iris:'#C86828' },
  // Maine Coon: brown-gray tabby, large
  'Maine Coon': { head:'#9880A0', ear:'#887090', innerEar:'#D898A0', snout:'#D0C0D8', stripes:'#706080', iris:'#8A9A40' },
  // Bengal: warm brown with spots/stripes
  'Bengal':     { head:'#C89040', ear:'#B88030', innerEar:'#E8A8A0', snout:'#F5D890', stripes:'#7A4818', iris:'#708030' },
  // Black Cat: solid black, green eyes
  'Black Cat':  { head:'#222222', ear:'#1A1A1A', innerEar:'#C86880', snout:'#3A3A3A', iris:'#30A040' },
  // Orange Cat: orange tabby
  'Orange Cat': { head:'#E07828', ear:'#C86818', innerEar:'#E8A0A0', snout:'#F5C060', stripes:'#A05010', iris:'#608810' },
  // Calico: white/cream base
  'Calico':     { head:'#F5F0E8', ear:'#8B4010', innerEar:'#F0A8A8', snout:'#FFFFFF', iris:'#508050' },
};

// Card background colors (behind the face bubble)
const BG_COLORS: Record<string, string> = {
  'Golden Retriever':'#FDE68A', 'Labrador':'#FEF3C7',          'Beagle':'#FDE68A',
  'Poodle':'#F9A8D4',           'German Shepherd':'#D6D3D1',   'French Bulldog':'#BAE6FD',
  'Bulldog':'#D6CFC5',          'Corgi':'#FDBA74',             'Siberian Husky':'#BFDBFE',
  'Border Collie':'#D1FAE5',    'Dachshund':'#FED7AA',         'Chihuahua':'#FDE68A',
  'Australian Shepherd':'#C7D2FE','Dalmatian':'#F1F5F9',       'Doberman':'#D6D3D1',
  'Shih Tzu':'#FCE7F3',         'Pomeranian':'#FED7AA',        'Yorkshire Terrier':'#FDE68A',
  'Great Dane':'#CBD5E1',       'Rottweiler':'#D6D3D1',        'Cocker Spaniel':'#FDBA74',
  'Cavalier King Charles':'#FCA5A5','Boxer':'#FDBA74',         'Weimaraner':'#CBD5E1',
  'Vizsla':'#FED7AA',           'Maltese':'#F8FAFC',           'Bichon Frise':'#FEF9EE',
  'Shiba Inu':'#FCA5A5',        'Miniature Schnauzer':'#CBD5E1','Basset Hound':'#FDBA74',
  'Samoyed':'#F1F5F9',
  'Tabby':'#FDE68A',            'Siamese':'#FEF3C7',           'Persian':'#F5D0FE',
  'Maine Coon':'#FED7AA',       'Bengal':'#FDBA74',            'Black Cat':'#D6D3D1',
  'Orange Cat':'#FCA5A5',       'Calico':'#FDE68A',
};
const DEFAULT_BG: Record<PetType, string> = { dog: '#FDE68A', cat: '#FDE68A' };

export function petBg(breed: string, type: PetType = 'dog'): string {
  return BG_COLORS[breed] ?? DEFAULT_BG[type];
}

type Props = { breed: string; type?: PetType; size?: number; className?: string };

export default function PetFace({ breed, type = 'dog', size = 64, className = '' }: Props) {
  if (type === 'cat') {
    const cfg = CAT_CONFIGS[breed] ?? CAT_CONFIGS['Tabby'];
    return <CatSVG cfg={cfg} size={size} className={className}/>;
  }
  const cfg = DOG_CONFIGS[breed] ?? DOG_CONFIGS['Labrador'];
  return <DogSVG cfg={cfg} size={size} className={className}/>;
}

// ── Dog ear shapes (large & prominent to match reference) ────────────────────

function DogEars({ type, color, inner }: { type: EarType; color: string; inner?: string }) {
  if (type === 'floppy') return (
    <>
      <ellipse cx="14" cy="60" rx="15" ry="25" fill={color} transform="rotate(-10,14,60)"/>
      <ellipse cx="86" cy="60" rx="15" ry="25" fill={color} transform="rotate(10,86,60)"/>
      {inner && <>
        <ellipse cx="14" cy="62" rx="8" ry="16" fill={inner} transform="rotate(-10,14,62)"/>
        <ellipse cx="86" cy="62" rx="8" ry="16" fill={inner} transform="rotate(10,86,62)"/>
      </>}
    </>
  );
  if (type === 'upright') return (
    <>
      <polygon points="24,40 14,5 40,24" fill={color}/>
      <polygon points="76,40 86,5 60,24" fill={color}/>
      {inner && <>
        <polygon points="26,36 19,12 37,26" fill={inner}/>
        <polygon points="74,36 81,12 63,26" fill={inner}/>
      </>}
    </>
  );
  if (type === 'bat') return (
    // Very wide bat ears (French Bulldog, Chihuahua)
    <>
      <polygon points="8,52 0,6 46,34" fill={color}/>
      <polygon points="92,52 100,6 54,34" fill={color}/>
      {inner && <>
        <polygon points="14,47 6,18 42,36" fill={inner}/>
        <polygon points="86,47 94,18 58,36" fill={inner}/>
      </>}
    </>
  );
  if (type === 'round') return (
    // Round/fluffy ears (Poodle, Bichon, Samoyed)
    <>
      <circle cx="22" cy="26" r="17" fill={color}/>
      <circle cx="78" cy="26" r="17" fill={color}/>
      {inner && <>
        <circle cx="22" cy="27" r="9" fill={inner}/>
        <circle cx="78" cy="27" r="9" fill={inner}/>
      </>}
    </>
  );
  if (type === 'folded') return (
    // Small folded/button ears (Bulldog, Boxer, Rottweiler)
    <>
      <ellipse cx="15" cy="28" rx="15" ry="9" fill={color} transform="rotate(-28,15,28)"/>
      <ellipse cx="85" cy="28" rx="15" ry="9" fill={color} transform="rotate(28,85,28)"/>
    </>
  );
  // wide — very long floppy (Basset Hound, Cocker Spaniel)
  return (
    <>
      <ellipse cx="10" cy="72" rx="16" ry="30" fill={color} transform="rotate(-12,10,72)"/>
      <ellipse cx="90" cy="72" rx="16" ry="30" fill={color} transform="rotate(12,90,72)"/>
      {inner && <>
        <ellipse cx="10" cy="74" rx="9"  ry="20" fill={inner} transform="rotate(-12,10,74)"/>
        <ellipse cx="90" cy="74" rx="9"  ry="20" fill={inner} transform="rotate(12,90,74)"/>
      </>}
    </>
  );
}

// ── Dog face ──────────────────────────────────────────────────────────────────

function DogSVG({ cfg, size, className }: { cfg: DogCfg; size: number; className: string }) {
  const nose = cfg.nose ?? '#1A1208';
  const iris = cfg.iris ?? '#3D2B1F';
  const hasBlaze = cfg.marks?.includes('blaze');
  const hasWhiteCheeks = cfg.marks?.includes('white-cheeks');

  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      className={`select-none shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg">

      {/* Ears (drawn behind head) */}
      <DogEars type={cfg.earType} color={cfg.ear} inner={cfg.innerEar}/>

      {/* Head */}
      <circle cx="50" cy="52" r="38" fill={cfg.head}/>

      {/* Dark cap on top (Beagle, Border Collie gradient, etc.) */}
      {cfg.topMark && <ellipse cx="50" cy="22" rx="30" ry="22" fill={cfg.topMark}/>}

      {/* White center blaze (Border Collie) */}
      {hasBlaze && (
        <path d="M 50 20 L 44 38 L 47 58 L 53 58 L 56 38 Z" fill="white"/>
      )}

      {/* Tan cheek / side patches on dark dogs (Doberman, Rottweiler, Shiba, Australian Shepherd) */}
      {cfg.sideMark && <>
        <ellipse cx="30" cy="58" rx="11" ry="13" fill={cfg.sideMark}/>
        <ellipse cx="70" cy="58" rx="11" ry="13" fill={cfg.sideMark}/>
      </>}

      {/* White cheek ovals (Shiba Inu) — drawn over head */}
      {hasWhiteCheeks && <>
        <ellipse cx="31" cy="65" rx="14" ry="11" fill="#F8F5EF"/>
        <ellipse cx="69" cy="65" rx="14" ry="11" fill="#F8F5EF"/>
      </>}

      {/* Dalmatian spots */}
      {cfg.spots && <>
        <circle cx="30" cy="35" r="5"   fill="#1A1208"/>
        <circle cx="68" cy="30" r="4"   fill="#1A1208"/>
        <circle cx="55" cy="22" r="3.5" fill="#1A1208"/>
        <circle cx="35" cy="60" r="4"   fill="#1A1208"/>
        <circle cx="70" cy="63" r="5.5" fill="#1A1208"/>
        <circle cx="20" cy="53" r="3"   fill="#1A1208"/>
        <circle cx="44" cy="74" r="3"   fill="#1A1208"/>
      </>}

      {/* Muzzle / snout area */}
      <ellipse cx="50" cy="65" rx="18" ry="13" fill={cfg.snout ?? cfg.head}/>

      {/* Eyes: sclera → iris → highlight */}
      <circle cx="34" cy="46" r="7" fill="white"/>
      <circle cx="66" cy="46" r="7" fill="white"/>
      <circle cx="35" cy="47" r="5" fill={iris}/>
      <circle cx="67" cy="47" r="5" fill={iris}/>
      <circle cx="33.5" cy="44.5" r="1.8" fill="white"/>
      <circle cx="65.5" cy="44.5" r="1.8" fill="white"/>

      {/* Eyebrow dots (Rottweiler, Doberman) */}
      {cfg.browDots && <>
        <circle cx="34" cy="37.5" r="3" fill={cfg.browDots}/>
        <circle cx="66" cy="37.5" r="3" fill={cfg.browDots}/>
      </>}

      {/* Nose */}
      <ellipse cx="50" cy="63" rx="5.5" ry="4" fill={nose}/>
      <ellipse cx="49" cy="62" rx="2.2" ry="1.2" fill="rgba(255,255,255,0.22)"/>

      {/* Mouth */}
      <path d="M 45 67.5 Q 50 72.5 55 67.5" stroke={nose} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="67" x2="50" y2="72.5" stroke={nose} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

// ── Cat face ──────────────────────────────────────────────────────────────────

function CatSVG({ cfg, size, className }: { cfg: CatCfg; size: number; className: string }) {
  const nose = cfg.nose ?? '#E87878';
  const iris = cfg.iris ?? '#6A8030';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      className={`select-none shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg">

      {/* Ears */}
      {cfg.fold ? (
        // Scottish Fold — small forward-folded ears
        <>
          <ellipse cx="24" cy="25" rx="15" ry="9" fill={cfg.ear} transform="rotate(-30,24,25)"/>
          <ellipse cx="76" cy="25" rx="15" ry="9" fill={cfg.ear} transform="rotate(30,76,25)"/>
        </>
      ) : (
        // Pointed cat ears
        <>
          <polygon points="16,40 8,8 38,30" fill={cfg.ear}/>
          <polygon points="84,40 92,8 62,30" fill={cfg.ear}/>
          {cfg.innerEar && <>
            <polygon points="20,37 14,16 35,30" fill={cfg.innerEar}/>
            <polygon points="80,37 86,16 65,30" fill={cfg.innerEar}/>
          </>}
        </>
      )}

      {/* Head (slightly wider/rounder for cats) */}
      <circle cx="50" cy="55" r="38" fill={cfg.head}/>

      {/* Siamese dark face mask */}
      {cfg.points && <ellipse cx="50" cy="28" rx="24" ry="18" fill={cfg.points}/>}

      {/* Tabby forehead stripes */}
      {cfg.stripes && <>
        <path d="M 33 28 Q 50 19 67 28" stroke={cfg.stripes} strokeWidth="3"   fill="none" strokeLinecap="round" opacity="0.75"/>
        <path d="M 29 37 Q 50 27 71 37" stroke={cfg.stripes} strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.65"/>
        <path d="M 27 45 Q 50 35 73 45" stroke={cfg.stripes} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.55"/>
      </>}

      {/* Snout / muzzle */}
      <ellipse cx="50" cy="66" rx="14" ry="10" fill={cfg.snout ?? '#F5E0D0'}/>

      {/* Eyes: almond-shaped, with vertical slit pupil */}
      <ellipse cx="34" cy="47" rx="9" ry="7.5" fill="white"/>
      <ellipse cx="66" cy="47" rx="9" ry="7.5" fill="white"/>
      <ellipse cx="34" cy="47" rx="6.5" ry="6.5" fill={iris}/>
      <ellipse cx="66" cy="47" rx="6.5" ry="6.5" fill={iris}/>
      <ellipse cx="34" cy="47" rx="2.2" ry="5.5" fill="#1A1208"/>
      <ellipse cx="66" cy="47" rx="2.2" ry="5.5" fill="#1A1208"/>
      <circle  cx="32"   cy="44"  r="1.8" fill="white"/>
      <circle  cx="64"   cy="44"  r="1.8" fill="white"/>

      {/* Nose triangle */}
      <path d="M 46.5 63 L 53.5 63 L 50 66.5 Z" fill={nose}/>

      {/* Mouth lines */}
      <path d="M 50 66.5 Q 45 70.5 42.5 68.5" stroke={nose} strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M 50 66.5 Q 55 70.5 57.5 68.5" stroke={nose} strokeWidth="1.3" fill="none" strokeLinecap="round"/>

      {/* Whisker dots */}
      <circle cx="29" cy="65" r="1.6" fill="#1A1208" opacity="0.38"/>
      <circle cx="35" cy="68" r="1.6" fill="#1A1208" opacity="0.38"/>
      <circle cx="71" cy="65" r="1.6" fill="#1A1208" opacity="0.38"/>
      <circle cx="65" cy="68" r="1.6" fill="#1A1208" opacity="0.38"/>
    </svg>
  );
}
