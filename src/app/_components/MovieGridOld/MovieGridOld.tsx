import { Movie } from '@/types/movie';
import { FC, ReactNode } from 'react';
import { MovieItem } from '@/app/_components/MovieItem/MovieItem';

export const MovieGridOld: FC<{ movies: Movie[] }> = ({
  movies,
}): ReactNode => {
  const items = movies.map((movie) => (
    <div key={movie.id} className="">
      <MovieItem {...movie} />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
      {items}
    </div>
  );
};
