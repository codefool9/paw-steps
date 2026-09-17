'use client';

type PetType = 'dog' | 'cat';
type EarType = 'floppy' | 'upright' | 'bat' | 'round' | 'folded' | 'wide';

interface DogCfg {
  head: string; ear: string; earType: EarType;
  innerEar?: string; snout?: string; topMark?: string;
  sideMark?: string; nose?: string; iris?: string;
  browDots?: string; spots?: boolean;
}

interface CatCfg {
  head: string; ear: string;
  innerEar?: string; snout?: string; iris?: string;
  nose?: string; stripes?: string; points?: string;
  fold?: boolean;
}

const DOG_CONFIGS: Record<string, DogCfg> = {
  'Golden Retriever':      { head:'#E6A020', ear:'#C88818', earType:'floppy',  innerEar:'#D89830', snout:'#F5CE80' },
  'Labrador':              { head:'#F0D090', ear:'#E0C080', earType:'floppy',  innerEar:'#F0E0A8', snout:'#F8EAC0' },
  'Beagle':                { head:'#F5F0E0', ear:'#C47028', earType:'floppy',  innerEar:'#A05818', snout:'#FFF8F0', topMark:'#1A1208' },
  'Poodle':                { head:'#E8B870', ear:'#D8A860', earType:'round',   innerEar:'#F0C880', snout:'#F5D8A0' },
  'German Shepherd':       { head:'#C07830', ear:'#C07830', earType:'upright', innerEar:'#D89850', snout:'#D8A860', topMark:'#1C1208' },
  'French Bulldog':        { head:'#C89060', ear:'#B88050', earType:'bat',     innerEar:'#D8A878', snout:'#E0C098' },
  'Bulldog':               { head:'#B88840', ear:'#A07030', earType:'folded',  snout:'#D8A870' },
  'Corgi':                 { head:'#E07030', ear:'#E07030', earType:'upright', innerEar:'#F5C870', snout:'#F5C07A' },
  'Siberian Husky':        { head:'#8090A8', ear:'#6A7A92', earType:'upright', innerEar:'#F0F0F0', snout:'#F0F0F0', topMark:'#2C3440', iris:'#4A78A8' },
  'Border Collie':         { head:'#222222', ear:'#1A1A1A', earType:'floppy',  innerEar:'#F5F5F5', snout:'#F0F0F0', topMark:'#111111' },
  'Dachshund':             { head:'#7B4020', ear:'#5A3010', earType:'floppy',  innerEar:'#6A3818', snout:'#B07848' },
  'Chihuahua':             { head:'#E0A860', ear:'#D09848', earType:'bat',     innerEar:'#F5D8A8', snout:'#F5D898' },
  'Australian Shepherd':   { head:'#7090B0', ear:'#5878A0', earType:'floppy',  snout:'#C8B898',   topMark:'#2C3440' },
  'Dalmatian':             { head:'#FAFAFA', ear:'#F5F5F5', earType:'round',   snout:'#FFFFFF',   spots:true },
  'Doberman':              { head:'#1C1208', ear:'#1C1208', earType:'upright', innerEar:'#C07028', snout:'#C07028', browDots:'#C07028', sideMark:'#C07028' },
  'Shih Tzu':              { head:'#F0E0B8', ear:'#D8C0A0', earType:'floppy', innerEar:'#E8D0A8', snout:'#FFFAF0' },
  'Pomeranian':            { head:'#D87828', ear:'#C86818', earType:'upright', innerEar:'#E88830', snout:'#F5C068' },
  'Yorkshire Terrier':     { head:'#8890A0', ear:'#6878A0', earType:'floppy', innerEar:'#A8A080', snout:'#C8A868' },
  'Great Dane':            { head:'#D8A878', ear:'#C89868', earType:'floppy', snout:'#F0D0A8' },
  'Rottweiler':            { head:'#1A1208', ear:'#1A1208', earType:'folded', snout:'#1A1208', browDots:'#C07028', sideMark:'#C07028', nose:'#0A0806' },
  'Cocker Spaniel':        { head:'#C88040', ear:'#8B5020', earType:'wide',   innerEar:'#A86030', snout:'#E8B878' },
  'Cavalier King Charles': { head:'#C07030', ear:'#6B3010', earType:'floppy', innerEar:'#7A4018', snout:'#F5E0C0' },
  'Boxer':                 { head:'#C08040', ear:'#A06830', earType:'folded', snout:'#D8B888' },
  'Weimaraner':            { head:'#A0A8B8', ear:'#9098A8', earType:'floppy', innerEar:'#B8C0D0', snout:'#C8CCD8', iris:'#6878A0' },
  'Vizsla':                { head:'#C07030', ear:'#A06020', earType:'floppy', innerEar:'#B07028', snout:'#D8A870', iris:'#785030' },
  'Maltese':               { head:'#F8F6F0', ear:'#F0EEE8', earType:'floppy', innerEar:'#F8F6F0', snout:'#FFFFFF' },
  'Bichon Frise':          { head:'#FFFFFF', ear:'#F8F6F0', earType:'round',  innerEar:'#F0EEE8', snout:'#FAFAF8' },
  'Shiba Inu':             { head:'#D06828', ear:'#C05818', earType:'upright', innerEar:'#F8D8A8', snout:'#F8E8D0', sideMark:'#F0F0F0' },
  'Miniature Schnauzer':   { head:'#9090A0', ear:'#80808C', earType:'upright', innerEar:'#A8A8B8', snout:'#D0D0D8' },
  'Basset Hound':          { head:'#F5F0E8', ear:'#8B4010', earType:'wide',   innerEar:'#A05020', snout:'#F5E8D8', topMark:'#8B4010' },
};

const CAT_CONFIGS: Record<string, CatCfg> = {
  'Tabby':      { head:'#C8A060', ear:'#B89050', innerEar:'#F0A0A0', snout:'#EED898', stripes:'#8B6030', iris:'#6A9040' },
  'Siamese':    { head:'#F5E8D8', ear:'#2C1808', innerEar:'#D89898', snout:'#F8F4F0', points:'#2C1808',  iris:'#4878A8' },
  'Persian':    { head:'#F5D098', ear:'#E8C080', innerEar:'#F0A8A8', snout:'#FFFAF0', iris:'#C86828' },
  'Maine Coon': { head:'#9880A0', ear:'#887090', innerEar:'#D898A0', snout:'#D0C0D8', stripes:'#706080', iris:'#8A9A40' },
  'Bengal':     { head:'#C89040', ear:'#B88030', innerEar:'#E8A8A0', snout:'#F5D890', stripes:'#7A4818', iris:'#708030' },
  'Black Cat':  { head:'#222222', ear:'#1A1A1A', innerEar:'#C86880', snout:'#3A3A3A', iris:'#30A040' },
  'Orange Cat': { head:'#E07828', ear:'#C86818', innerEar:'#E8A0A0', snout:'#F5C060', stripes:'#A05010', iris:'#608810' },
  'Calico':     { head:'#F5F0E8', ear:'#8B4010', innerEar:'#F0A8A8', snout:'#FFFFFF', iris:'#508050' },
};

const BG_COLORS: Record<string, string> = {
  'Golden Retriever':'#FDE68A', 'Labrador':'#FEF3C7',        'Beagle':'#FDE68A',
  'Poodle':'#F9A8D4',           'German Shepherd':'#D6D3D1', 'French Bulldog':'#BAE6FD',
  'Bulldog':'#D6CFC5',          'Corgi':'#FDBA74',           'Siberian Husky':'#BFDBFE',
  'Border Collie':'#D1FAE5',    'Dachshund':'#FED7AA',       'Chihuahua':'#FDE68A',
  'Australian Shepherd':'#C7D2FE','Dalmatian':'#F1F5F9',     'Doberman':'#D6D3D1',
  'Shih Tzu':'#FCE7F3',         'Pomeranian':'#FED7AA',      'Yorkshire Terrier':'#FDE68A',
  'Great Dane':'#CBD5E1',       'Rottweiler':'#D6D3D1',      'Cocker Spaniel':'#FDBA74',
  'Cavalier King Charles':'#FCA5A5','Boxer':'#FDBA74',       'Weimaraner':'#CBD5E1',
  'Vizsla':'#FED7AA',           'Maltese':'#F8FAFC',         'Bichon Frise':'#FEF9EE',
  'Shiba Inu':'#FCA5A5',        'Miniature Schnauzer':'#CBD5E1','Basset Hound':'#FDBA74',
  'Tabby':'#FDE68A',            'Siamese':'#FEF3C7',         'Persian':'#F5D0FE',
  'Maine Coon':'#FED7AA',       'Bengal':'#FDBA74',          'Black Cat':'#D6D3D1',
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

// ── Dog ear shapes ────────────────────────────────────────────────────────────

function DogEars({ type, color, inner }: { type: EarType; color: string; inner?: string }) {
  if (type === 'floppy') return (
    <>
      <ellipse cx="15" cy="60" rx="13" ry="23" fill={color} transform="rotate(-8,15,60)"/>
      <ellipse cx="85" cy="60" rx="13" ry="23" fill={color} transform="rotate(8,85,60)"/>
      {inner && <>
        <ellipse cx="15" cy="62" rx="7" ry="15" fill={inner} transform="rotate(-8,15,62)"/>
        <ellipse cx="85" cy="62" rx="7" ry="15" fill={inner} transform="rotate(8,85,62)"/>
      </>}
    </>
  );
  if (type === 'upright') return (
    <>
      <polygon points="23,38 15,7 39,26" fill={color}/>
      <polygon points="77,38 85,7 61,26" fill={color}/>
      {inner && <>
        <polygon points="25,34 19,14 36,27" fill={inner}/>
        <polygon points="75,34 81,14 64,27" fill={inner}/>
      </>}
    </>
  );
  if (type === 'bat') return (
    <>
      <polygon points="12,50 2,9 44,33" fill={color}/>
      <polygon points="88,50 98,9 56,33" fill={color}/>
      {inner && <>
        <polygon points="16,46 8,18 40,35" fill={inner}/>
        <polygon points="84,46 92,18 60,35" fill={inner}/>
      </>}
    </>
  );
  if (type === 'round') return (
    <>
      <circle cx="22" cy="27" r="15" fill={color}/>
      <circle cx="78" cy="27" r="15" fill={color}/>
      {inner && <>
        <circle cx="22" cy="28" r="8" fill={inner}/>
        <circle cx="78" cy="28" r="8" fill={inner}/>
      </>}
    </>
  );
  if (type === 'folded') return (
    <>
      <ellipse cx="16" cy="30" rx="14" ry="8" fill={color} transform="rotate(-25,16,30)"/>
      <ellipse cx="84" cy="30" rx="14" ry="8" fill={color} transform="rotate(25,84,30)"/>
    </>
  );
  // wide — Basset Hound, Cocker Spaniel
  return (
    <>
      <ellipse cx="11" cy="70" rx="15" ry="28" fill={color} transform="rotate(-10,11,70)"/>
      <ellipse cx="89" cy="70" rx="15" ry="28" fill={color} transform="rotate(10,89,70)"/>
      {inner && <>
        <ellipse cx="11" cy="72" rx="8"  ry="18" fill={inner} transform="rotate(-10,11,72)"/>
        <ellipse cx="89" cy="72" rx="8"  ry="18" fill={inner} transform="rotate(10,89,72)"/>
      </>}
    </>
  );
}

// ── Dog face ──────────────────────────────────────────────────────────────────

function DogSVG({ cfg, size, className }: { cfg: DogCfg; size: number; className: string }) {
  const nose = cfg.nose ?? '#1A1208';
  const iris = cfg.iris ?? '#3D2B1F';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`select-none shrink-0 ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ears (behind head) */}
      <DogEars type={cfg.earType} color={cfg.ear} inner={cfg.innerEar}/>

      {/* Head */}
      <circle cx="50" cy="52" r="38" fill={cfg.head}/>

      {/* Dark top patch (e.g. Beagle, Border Collie, German Shepherd) */}
      {cfg.topMark && <ellipse cx="50" cy="23" rx="30" ry="22" fill={cfg.topMark}/>}

      {/* Tan cheek patches on dark dogs (Doberman, Rottweiler, Shiba Inu) */}
      {cfg.sideMark && <>
        <ellipse cx="30" cy="58" rx="10" ry="13" fill={cfg.sideMark}/>
        <ellipse cx="70" cy="58" rx="10" ry="13" fill={cfg.sideMark}/>
      </>}

      {/* Dalmatian spots */}
      {cfg.spots && <>
        <circle cx="30" cy="35" r="5"   fill="#222"/>
        <circle cx="68" cy="30" r="4"   fill="#222"/>
        <circle cx="54" cy="22" r="3.5" fill="#222"/>
        <circle cx="34" cy="60" r="4"   fill="#222"/>
        <circle cx="70" cy="63" r="5.5" fill="#222"/>
        <circle cx="20" cy="52" r="3"   fill="#222"/>
        <circle cx="44" cy="73" r="3"   fill="#222"/>
      </>}

      {/* Snout / muzzle area */}
      <ellipse cx="50" cy="64" rx="17" ry="12" fill={cfg.snout ?? cfg.head}/>

      {/* Eyes — white sclera + iris + pupil + shine */}
      <circle cx="35" cy="47" r="6.5" fill="white"/>
      <circle cx="65" cy="47" r="6.5" fill="white"/>
      <circle cx="36" cy="48" r="4.5" fill={iris}/>
      <circle cx="66" cy="48" r="4.5" fill={iris}/>
      <circle cx="37.5" cy="46" r="1.5" fill="white"/>
      <circle cx="67.5" cy="46" r="1.5" fill="white"/>

      {/* Eyebrow dots (Doberman, Rottweiler) */}
      {cfg.browDots && <>
        <circle cx="35" cy="38.5" r="2.5" fill={cfg.browDots}/>
        <circle cx="65" cy="38.5" r="2.5" fill={cfg.browDots}/>
      </>}

      {/* Nose */}
      <ellipse cx="50" cy="62" rx="5" ry="3.5" fill={nose}/>
      {/* Nose highlight */}
      <ellipse cx="49" cy="61" rx="2" ry="1" fill="rgba(255,255,255,0.25)"/>

      {/* Mouth */}
      <path d="M 45.5 66 Q 50 70.5 54.5 66" stroke={nose} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="65.5" x2="50" y2="70.5" stroke={nose} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Cat face ──────────────────────────────────────────────────────────────────

function CatSVG({ cfg, size, className }: { cfg: CatCfg; size: number; className: string }) {
  const nose = cfg.nose ?? '#E87878';
  const iris = cfg.iris ?? '#6A8030';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`select-none shrink-0 ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      {cfg.fold ? (
        // Scottish Fold — small folded ears
        <>
          <ellipse cx="24" cy="25" rx="14" ry="9" fill={cfg.ear} transform="rotate(-30,24,25)"/>
          <ellipse cx="76" cy="25" rx="14" ry="9" fill={cfg.ear} transform="rotate(30,76,25)"/>
        </>
      ) : (
        // Pointed cat ears
        <>
          <polygon points="18,38 10,10 36,30" fill={cfg.ear}/>
          <polygon points="82,38 90,10 64,30" fill={cfg.ear}/>
          {cfg.innerEar && <>
            <polygon points="21,35 15,16 33,29" fill={cfg.innerEar}/>
            <polygon points="79,35 85,16 67,29" fill={cfg.innerEar}/>
          </>}
        </>
      )}

      {/* Head */}
      <circle cx="50" cy="54" r="38" fill={cfg.head}/>

      {/* Siamese / colorpoint dark mask on forehead */}
      {cfg.points && <ellipse cx="50" cy="27" rx="22" ry="16" fill={cfg.points}/>}

      {/* Tabby forehead stripes */}
      {cfg.stripes && <>
        <path d="M 32 28 Q 50 20 68 28" stroke={cfg.stripes} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M 28 36 Q 50 27 72 36" stroke={cfg.stripes} strokeWidth="2"   fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M 26 43 Q 50 34 74 43" stroke={cfg.stripes} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </>}

      {/* Snout / muzzle */}
      <ellipse cx="50" cy="64" rx="13" ry="9" fill={cfg.snout ?? '#F5E0D0'}/>

      {/* Eyes — almond shape, slit pupil */}
      <ellipse cx="34" cy="46" rx="8.5" ry="7" fill="white"/>
      <ellipse cx="66" cy="46" rx="8.5" ry="7" fill="white"/>
      <ellipse cx="34" cy="46" rx="6"   ry="6" fill={iris}/>
      <ellipse cx="66" cy="46" rx="6"   ry="6" fill={iris}/>
      {/* Vertical slit pupil */}
      <ellipse cx="34" cy="46" rx="2"   ry="5" fill="#1A1208"/>
      <ellipse cx="66" cy="46" rx="2"   ry="5" fill="#1A1208"/>
      {/* Eye shine */}
      <circle cx="32" cy="43" r="1.5" fill="white"/>
      <circle cx="64" cy="43" r="1.5" fill="white"/>

      {/* Nose — small heart/triangle */}
      <path d="M 47 62 L 53 62 L 50 65.5 Z" fill={nose}/>
      {/* Mouth */}
      <path d="M 50 65.5 Q 45.5 69.5 43 67.5" stroke={nose} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M 50 65.5 Q 54.5 69.5 57 67.5" stroke={nose} strokeWidth="1.2" fill="none" strokeLinecap="round"/>

      {/* Whisker dots */}
      <circle cx="29" cy="63" r="1.5" fill="#1A1208" opacity="0.4"/>
      <circle cx="35" cy="67" r="1.5" fill="#1A1208" opacity="0.4"/>
      <circle cx="71" cy="63" r="1.5" fill="#1A1208" opacity="0.4"/>
      <circle cx="65" cy="67" r="1.5" fill="#1A1208" opacity="0.4"/>
    </svg>
  );
}
