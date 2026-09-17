'use client';

type PetType = 'dog' | 'cat';

const DOG_IMAGES: Record<string, string> = {
  'Shiba Inu':              '/breeds/dogs/shiba-inu.png',
  'Samoyed':                '/breeds/dogs/samoyed.png',
  'Beagle':                 '/breeds/dogs/beagle.png',
  'Poodle':                 '/breeds/dogs/poodle.png',
  'Miniature Poodle':       '/breeds/dogs/poodle.png',
  'Toy Poodle':             '/breeds/dogs/poodle.png',
  'Chihuahua':              '/breeds/dogs/chihuahua.png',
  'Rottweiler':             '/breeds/dogs/rottweiler.png',
  'Golden Retriever':       '/breeds/dogs/golden-retriever.png',
  'Dalmatian':              '/breeds/dogs/dalmatian.png',
  'Doberman':               '/breeds/dogs/doberman.png',
  'Doberman Pinscher':      '/breeds/dogs/doberman.png',
  'Labrador':               '/breeds/dogs/labrador.png',
  'Yellow Lab':             '/breeds/dogs/labrador.png',
  'Yellow Labrador':        '/breeds/dogs/labrador.png',
  'Labrador Retriever':     '/breeds/dogs/labrador.png',
  'Border Collie':          '/breeds/dogs/border-collie.png',
  'French Bulldog':         '/breeds/dogs/french-bulldog.png',
  'Pomeranian':             '/breeds/dogs/pomeranian.png',
  'Dachshund':              '/breeds/dogs/dachshund.png',
  'Miniature Dachshund':    '/breeds/dogs/dachshund.png',
  'Australian Shepherd':    '/breeds/dogs/australian-shepherd.png',
  'Boxer':                  '/breeds/dogs/boxer.png',
  'Jack Russell':           '/breeds/dogs/jack-russell.png',
  'Jack Russell Terrier':   '/breeds/dogs/jack-russell.png',
  'Great Dane':             '/breeds/dogs/great-dane.png',
  'Bull Terrier':           '/breeds/dogs/bull-terrier.png',
  'Basset Hound':           '/breeds/dogs/basset-hound.png',
  'Corgi':                  '/breeds/dogs/corgi.png',
  'Pembroke Welsh Corgi':   '/breeds/dogs/corgi.png',
  'Bernese Mountain Dog':   '/breeds/dogs/bernese-mountain-dog.png',
  'Miniature Schnauzer':    '/breeds/dogs/miniature-schnauzer.png',
  'Schnauzer':              '/breeds/dogs/miniature-schnauzer.png',
  // fallbacks for breeds not in the grid
  'German Shepherd':        '/breeds/dogs/border-collie.png',
  'Siberian Husky':         '/breeds/dogs/samoyed.png',
  'Shih Tzu':               '/breeds/dogs/pomeranian.png',
  'Yorkshire Terrier':      '/breeds/dogs/pomeranian.png',
  'Bulldog':                '/breeds/dogs/boxer.png',
  'English Bulldog':        '/breeds/dogs/boxer.png',
  'Maltese':                '/breeds/dogs/samoyed.png',
  'Husky':                  '/breeds/dogs/samoyed.png',
};

const CAT_IMAGES: Record<string, string> = {
  'Siamese':                '/breeds/cats/siamese.png',
  'Sphynx':                 '/breeds/cats/sphynx.png',
  'Russian Blue':           '/breeds/cats/russian-blue.png',
  'Birman':                 '/breeds/cats/birman.png',
  'Norwegian Forest Cat':   '/breeds/cats/norwegian-forest-cat.png',
  'Persian':                '/breeds/cats/persian.png',
  'Bengal':                 '/breeds/cats/bengal.png',
  'Scottish Fold':          '/breeds/cats/scottish-fold.png',
  'Maine Coon':             '/breeds/cats/maine-coon.png',
  'Ragdoll':                '/breeds/cats/ragdoll.png',
  'American Shorthair':     '/breeds/cats/american-shorthair.png',
  'Tabby':                  '/breeds/cats/american-shorthair.png',
  'Orange Tabby':           '/breeds/cats/exotic-shorthair.png',
  'Orange Cat':             '/breeds/cats/exotic-shorthair.png',
  'Burmese':                '/breeds/cats/burmese.png',
  'Manx':                   '/breeds/cats/manx.png',
  'British Shorthair':      '/breeds/cats/british-shorthair.png',
  'Abyssinian':             '/breeds/cats/abyssinian.png',
  'Exotic Shorthair':       '/breeds/cats/exotic-shorthair.png',
  'Tonkinese':              '/breeds/cats/tonkinese.png',
  'Siberian':               '/breeds/cats/siberian.png',
  'Savannah':               '/breeds/cats/savannah.png',
  // fallbacks
  'Black Cat':              '/breeds/cats/british-shorthair.png',
  'Calico':                 '/breeds/cats/ragdoll.png',
  'Tuxedo':                 '/breeds/cats/manx.png',
};

const BG_COLORS: Record<string, string> = {
  'Shiba Inu': '#FDDEC8', 'Golden Retriever': '#FDEFD0', 'Samoyed': '#E8F0F8',
  'Border Collie': '#D0D8F0', 'Dalmatian': '#F0F0F0', 'Poodle': '#EAD8F0',
  'Corgi': '#FFE8C8', 'Dachshund': '#F0E0C8', 'Boxer': '#F5DCC8',
  'Rottweiler': '#E0D8D0', 'Doberman': '#D8D0C8', 'Pomeranian': '#FFE8D0',
  'Beagle': '#F5F0E0', 'French Bulldog': '#E8E0F8', 'Labrador': '#FFF0D0',
  'Yellow Lab': '#FFF0D0', 'Chihuahua': '#F8EADC',
};

export function petBg(breed: string, type: PetType): string {
  if (type === 'cat') return 'bg-purple-50';
  const hex = BG_COLORS[breed];
  if (hex) return '';
  return 'bg-amber-50';
}

interface Props {
  breed: string;
  type: PetType;
  size: number;
  className?: string;
}

export default function PetFace({ breed, type, size, className = '' }: Props) {
  const map = type === 'cat' ? CAT_IMAGES : DOG_IMAGES;
  const src = map[breed];

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={breed}
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
        className={className}
      />
    );
  }

  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.55 }}
      className={`flex items-center justify-center rounded-full bg-amber-100 ${className}`}
    >
      🐾
    </div>
  );
}
