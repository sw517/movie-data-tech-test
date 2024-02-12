'use client';

import { LoadingCircle } from '@/app/_components/LoadingCircle/LoadingCircle';
import { APIRoute, RapidAPISingleResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { Movie as MovieType } from '@/types/movie';

export default function Movie({ params: { id } }: { params: { id: string } }) {
  const [imageHasError, setImageHasError] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['movie-details', id],
    queryFn: (): Promise<RapidAPISingleResponse> =>
      fetch(`${APIRoute.DETAILS}?id=${id}`).then((res) => res.json()),
  });

  const movie = data?.results;
  console.log(movie);

  const getDateFromRelease = (
    date: MovieType['releaseDate']
  ): string | null => {
    if (!date?.day || !date?.month || !date?.year) return null;

    // Date uses index for month but not year/day
    return new Date(date.year, date.month - 1, date.day).toLocaleDateString();
  };

  return (
    <main className="pt-6">
      {isLoading && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoadingCircle />
        </div>
      )}
      {!isLoading && movie && (
        <>
          {movie.primaryImage && (
            <div className="relative flex items-center justify-center w-full h-[45vh]">
              {imageHasError && <div>Image unavailable</div>}
              {!imageHasError && (
                <>
                  <Image
                    src={movie.primaryImage?.url}
                    alt={movie.primaryImage.caption.plainText}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="blur-3xl"
                  />
                  <Image
                    src={movie.primaryImage?.url}
                    alt={movie.primaryImage.caption.plainText}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    onError={() => setImageHasError(true)}
                  />
                </>
              )}
            </div>
          )}
          <section className="py-3 px-6 mt-8 text-center ">
            <h1 className="text-xl sm:text-3xl mb-6">
              {movie?.titleText.text}
            </h1>
            <p className="text-lg">
              Release date: {movie?.releaseYear?.year || 'Unknown'}
            </p>
            {movie?.releaseDate && getDateFromRelease(movie.releaseDate) && (
              <p className="text-sm">
                ({getDateFromRelease(movie.releaseDate)})
              </p>
            )}
          </section>
        </>
      )}
    </main>
  );
}
