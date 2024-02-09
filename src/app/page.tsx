'use client';

import { useQuery } from '@tanstack/react-query';
import { titles as mockData } from '@/app/_data/movies/titles';
import { MovieList } from './_components/MovieList/MovieList';
import { SearchInput } from './_components/SearchInput/SearchInput';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const { isPending, error, data } = useQuery({
    queryKey: ['movieTitles'],
    queryFn: () => mockData, //fetch('/api/movies/titles').then((res) => res.json()),
    // select: (data) => data.results,
  });

  return (
    <main className="p-3">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      {isPending && 'Loading'}
      {error && (error.message || 'Something went wrong :(')}
      {!!data?.length && <MovieList movies={data} />}
    </main>
  );
}
