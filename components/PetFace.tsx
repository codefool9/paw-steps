'use client';

type PetType = 'dog' | 'cat';

// Filenames match /public/breeds/dogs/ and /public/breeds/cats/
const DOG_IMAGES: Record<string, string> = {
  'Golden Retriever':       '/breeds/dogs/golden-retriever.png',
  'Labrador':               '/breeds/dogs/labrador.png',
  'Labrador Retriever':     '/breeds/dogs/labrador.png',
  'Yellow Lab':             '/breeds/dogs/labrador.png',
  'French Bulldog':         '/breeds/dogs/french-bulldog.png',
  'Poodle':                 '/breeds/dogs/poodle.png',
  'Miniature Poodle':       '/breeds/dogs/poodle.png',
  'Toy Poodle':             '/breeds/dogs/poodle.png',
  'Beagle':                 '/breeds/dogs/beagle.png',
  'Dachshund':              '/breeds/dogs/dachshund.png',
  'Miniature Dachshund':    '/breeds/dogs/dachshund.png',
  'German Shepherd':        '/breeds/dogs/german-shepherd.png',
  'Bulldog':                '/breeds/dogs/bulldog.png',
  'English Bulldog':        '/breeds/dogs/bulldog.png',
  'Boxer':                  '/breeds/dogs/boxer.png',
  'Chihuahua':              '/breeds/dogs/chihuahua.png',
  'Shiba Inu':              '/breeds/dogs/shiba-inu.png',
  'Siberian Husky':         '/breeds/dogs/siberian-husky.png',
  'Husky':                  '/breeds/dogs/siberian-husky.png',
  'Doberman':               '/breeds/dogs/doberman.png',
  'Doberman Pinscher':      '/breeds/dogs/doberman.png',
  'Great Dane':             '/breeds/dogs/great-dane.png',
  'Mini Schnauzer':         '/breeds/dogs/mini-schnauzer.png',
  'Miniature Schnauzer':    '/breeds/dogs/mini-schnauzer.png',
  'Schnauzer':              '/breeds/dogs/mini-schnauzer.png',
  'Pug':                    '/breeds/dogs/pug.png',
  'Corgi':                  '/breeds/dogs/corgi.png',
  'Pembroke Welsh Corgi':   '/breeds/dogs/corgi.png',
  'Pomeranian':             '/breeds/dogs/pomeranian.png',
  'Border Collie':          '/breeds/dogs/border-collie.png',
  'Shih Tzu':               '/breeds/dogs/shih-tzu.png',
  'Maltese':                '/breeds/dogs/maltese.png',
  'Boston Terrier':         '/breeds/dogs/boston-terrier.png',
  'Yorkshire Terrier':      '/breeds/dogs/yorkshire-terrier.png',
  'Bichon Frise':           '/breeds/dogs/bichon-frise.png',
  'Bernese Mountain':       '/breeds/dogs/bernese-mountain.png',
  'Bernese Mountain Dog':   '/breeds/dogs/bernese-mountain.png',
  'Cocker Spaniel':         '/breeds/dogs/cocker-spaniel.png',
};

const CAT_IMAGES: Record<string, string> = {
  'Tabby':                  '/breeds/cats/american-shorthair.png',
  'American Shorthair':     '/breeds/cats/american-shorthair.png',
  'Siamese':                '/breeds/cats/siamese.png',
  'Persian':                '/breeds/cats/persian.png',
  'Maine Coon':             '/breeds/cats/maine-coon.png',
  'Bengal':                 '/breeds/cats/bengal.png',
  'Black Cat':              '/breeds/cats/burmese.png',
  'Orange Cat':             '/breeds/cats/somali.png',
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
  'Himalayan':              '/breeds/cats/himalayan.png',
  'Oriental Shorthair':     '/breeds/cats/oriental-shorthair.png',
  'Devon Rex':              '/breeds/cats/devon-rex.png',
  'Manx':                   '/breeds/cats/manx.png',
  'Chartreux':              '/breeds/cats/chartreux.png',
  'Munchkin':               '/breeds/cats/munchkin.png',
  'Savannah':               '/breeds/cats/savannah-b.png',
  'Singapura':              '/breeds/cats/singapura.png',
  'Korat':                  '/breeds/cats/korat.png',
  'Somali':                 '/breeds/cats/somali.png',
  'Turkish Angora':         '/breeds/cats/turkish-angora.png',
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
