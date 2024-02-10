'use client';

import { useQuery } from '@tanstack/react-query';
import { titles as mockData } from '@/app/_data/movies/titles';
import { MovieList } from './_components/MovieList/MovieList';
import { SearchInput } from './_components/SearchInput/SearchInput';
import { useState } from 'react';
import { LoadingCircle } from './_components/LoadingCircle/LoadingCircle';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    isLoading: isLoadingStaticResults,
    error,
    data: staticResults,
  } = useQuery({
    queryKey: ['movieTitles'],
    queryFn: () => mockData, //fetch('/api/movies/titles').then((res) => res.json()),
    // select: (data) => data.results,
  });

  const { isLoading: isLoadingSearchResults, data: searchResults } = useQuery({
    queryKey: ['movieSearch', searchQuery],
    queryFn: () => mockData,
    // fetch(`/api/movies/search?search=${searchQuery}`).then((res) =>
    //   res.json()
    // ),
    // select: (data) => data.results,
    enabled: !!searchQuery,
  });

  console.log(searchResults);

  return (
    <main className="max-w-screen-xl p-3 ml-auto mr-auto">
      <div className="p-3 max-w-96">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      {(isLoadingStaticResults || isLoadingSearchResults) && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoadingCircle />
        </div>
      )}
      {error && (error.message || 'Something went wrong :(')}
      {!searchQuery && !!staticResults?.length && (
        <MovieList movies={staticResults} />
      )}
      {searchQuery && !!searchResults?.length && (
        <MovieList movies={searchResults} />
      )}
    </main>
  );
}
