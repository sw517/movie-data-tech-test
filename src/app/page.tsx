'use client';

import { useQuery } from '@tanstack/react-query';
import { titles as mockData } from '@/app/_data/movies/titles';
import { MovieList } from './_components/MovieList/MovieList';

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

  return <div>{!!data?.length && <MovieList movies={data} />}</div>;
}
