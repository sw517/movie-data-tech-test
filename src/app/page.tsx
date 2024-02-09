'use client';

import { useQuery } from '@tanstack/react-query';
import { titles as mockData } from '@/app/_data/movies/titles';
import { MovieItem } from '@/app/_components/MovieItem/MovieItem';

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['movieTitles'],
    queryFn: () => mockData,
    // fetch('/api/movies/titles')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   }),
    select: (data) => data.results,
  });

  const movieList = data?.map((movie) => (
    <div key={movie.id} className="">
      <MovieItem {...movie} />
    </div>
  ));

  return <div className="flex flex-wrap">{movieList}</div>;
}
