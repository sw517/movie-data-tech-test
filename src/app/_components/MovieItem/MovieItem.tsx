import Image from 'next/image';
import { Movie } from '@/types/movie';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

export const MovieItem: FC<Movie> = ({
  id,
  titleText,
  primaryImage,
}): ReactNode => {
  return (
    <Link href={`/movie/${id}`}>
      <h2>{titleText.text}</h2>
      {primaryImage && (
        <Image
          src={primaryImage.url}
          width={primaryImage.width}
          height={primaryImage.height}
          alt={primaryImage.caption.plainText}
          className="object-cover bg-center aspect-square"
        />
      )}
    </Link>
  );
};
