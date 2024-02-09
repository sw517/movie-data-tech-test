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
        'block relative overflow-hidden rounded-md aspect-[2/3] bg-orange-600',
        styles['movie-item'],
      ])}
    >
      <div
        className={clsx([
          'absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-20 backdrop-blur-sm text-white',
          styles.text,
          !hasImage && styles['force-show-text'],
        ])}
      >
        <h2 title={titleText.text} className="font-bold line-clamp-3">
          {titleText.text}
        </h2>
        <p>({releaseYear.year})</p>
      </div>
      {hasImage && primaryImage && (
        <Image
          src={primaryImage.url}
          width={primaryImage.width}
          height={primaryImage.height}
          alt={primaryImage.caption.plainText}
          className="object-cover bg-center rounded-md aspect-[2/3] w-full"
          onError={() => setHasImage(false)}
        />
      )}
      {!hasImage && (
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-white font-bold text-center">
          Image unavailable
        </div>
      )}
    </Link>
  );
};
