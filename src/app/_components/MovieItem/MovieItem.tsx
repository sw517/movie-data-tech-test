import Image from 'next/image';
import { Movie } from '@/types/movie';
import { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './styles.module.css';

export const MovieItem: FC<Movie> = ({
  id,
  titleText,
  primaryImage,
  releaseYear,
}): ReactNode => {
  const [hasImage, setHasImage] = useState(!!primaryImage);
  return (
    <Link
      href={`/movie/${id}`}
      className={clsx([
        'block relative overflow-hidden rounded-md aspect-[2/3] bg-orange-700',
        styles['movie-item'],
      ])}
      title={titleText.text}
    >
      <div
        className={clsx([
          'absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-20 text-xs sm:text-base backdrop-blur-sm text-white',
          styles.text,
          !hasImage && styles['force-show-text'],
        ])}
      >
        <h2 className="font-bold line-clamp-3">{titleText.text}</h2>
        <p>({releaseYear?.year || 'Release date unknown'})</p>
      </div>
      {hasImage && primaryImage && (
        <Image
          src={primaryImage.url}
          width={primaryImage.width}
          height={primaryImage.height}
          alt={primaryImage.caption.plainText}
          className="object-cover bg-center rounded-md aspect-[2/3] w-full"
          onError={() => setHasImage(false)}
          role="presentation"
        />
      )}
      {!hasImage && (
        <div className="absolute top-9 left-0 right-0 sm:top-1/2 sm:-translate-y-1/2 text-white font-bold text-center">
          Image unavailable
        </div>
      )}
    </Link>
  );
};
