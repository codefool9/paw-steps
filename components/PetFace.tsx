'use client';

type PetType = 'dog' | 'cat';

const DOG_IMAGES: Record<string, string> = {
  'Golden Retriever':       '/breeds/dogs/golden-retriever.png',
  'Labrador':               '/breeds/dogs/labrador.png',
  'Labrador Retriever':     '/breeds/dogs/labrador.png',
  'Yellow Lab':             '/breeds/dogs/labrador.png',
  'Poodle':                 '/breeds/dogs/poodle.png',
  'Miniature Poodle':       '/breeds/dogs/poodle.png',
  'Toy Poodle':             '/breeds/dogs/poodle.png',
  'Beagle':                 '/breeds/dogs/beagle.png',
  'Dachshund':              '/breeds/dogs/dachshund.png',
  'Miniature Dachshund':    '/breeds/dogs/dachshund.png',
  'French Bulldog':         '/breeds/dogs/french-bulldog.png',
  'Rottweiler':             '/breeds/dogs/rottweiler.png',
  'Boxer':                  '/breeds/dogs/boxer.png',
  'Great Dane':             '/breeds/dogs/great-dane.png',
  'Doberman':               '/breeds/dogs/doberman.png',
  'Doberman Pinscher':      '/breeds/dogs/doberman.png',
  'Corgi':                  '/breeds/dogs/corgi.png',
  'Pembroke Welsh Corgi':   '/breeds/dogs/corgi.png',
  'Australian Shepherd':    '/breeds/dogs/australian-shepherd.png',
  'Mini Schnauzer':         '/breeds/dogs/miniature-schnauzer.png',
  'Miniature Schnauzer':    '/breeds/dogs/miniature-schnauzer.png',
  'Border Collie':          '/breeds/dogs/border-collie.png',
  'Bernese Mountain':       '/breeds/dogs/bernese-mountain-dog.png',
  'Bernese Mountain Dog':   '/breeds/dogs/bernese-mountain-dog.png',
  'Chihuahua':              '/breeds/dogs/chihuahua.png',
  'Pomeranian':             '/breeds/dogs/pomeranian.png',
  'Jack Russell':           '/breeds/dogs/jack-russell.png',
  'Jack Russell Terrier':   '/breeds/dogs/jack-russell.png',
  // extras in the reference grid (not in breed list but available)
  'Shiba Inu':              '/breeds/dogs/shiba-inu.png',
  'Samoyed':                '/breeds/dogs/samoyed.png',
  'Dalmatian':              '/breeds/dogs/dalmatian.png',
};

const CAT_IMAGES: Record<string, string> = {
  'Tabby':                  '/breeds/cats/american-shorthair.png',
  'American Shorthair':     '/breeds/cats/american-shorthair.png',
  'Siamese':                '/breeds/cats/siamese.png',
  'Persian':                '/breeds/cats/persian.png',
  'Maine Coon':             '/breeds/cats/maine-coon.png',
  'Bengal':                 '/breeds/cats/bengal.png',
  'Black Cat':              '/breeds/cats/british-shorthair.png',
  'Orange Cat':             '/breeds/cats/exotic-shorthair.png',
  'Calico':                 '/breeds/cats/ragdoll.png',
  'Scottish Fold':          '/breeds/cats/scottish-fold.png',
  'Russian Blue':           '/breeds/cats/russian-blue.png',
  'Ragdoll':                '/breeds/cats/ragdoll.png',
  'Birman':                 '/breeds/cats/birman.png',
  'Norwegian Forest Cat':   '/breeds/cats/norwegian-forest-cat.png',
  'Sphynx':                 '/breeds/cats/sphynx.png',
  'Abyssinian':             '/breeds/cats/abyssinian.png',
  'British Shorthair':      '/breeds/cats/british-shorthair.png',
  'Exotic Shorthair':       '/breeds/cats/exotic-shorthair.png',
  'Burmese':                '/breeds/cats/burmese.png',
  'Tonkinese':              '/breeds/cats/tonkinese.png',
  'Siberian':               '/breeds/cats/siberian.png',
  'Savannah':               '/breeds/cats/savannah.png',
};

export function petBg(_breed: string, type: PetType): string {
  return type === 'cat' ? 'bg-purple-50' : 'bg-amber-50';
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
