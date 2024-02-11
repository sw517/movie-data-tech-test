'use client';

import { useEffect, useState } from 'react';
import { MovieGrid } from './_components/MovieGrid/MovieGrid';
import { useDebounce } from './_hooks/useDebounce';
import { SearchInput } from './_components/SearchInput/SearchInput';
import { APIRoute } from '@/types/api';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiPath, setApiPath] = useState('');
  const [queryString, setQueryString] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 600);

  useEffect(() => {
    if (debouncedQuery) {
      setApiPath(APIRoute.SEARCH);
      setQueryString(`search=${debouncedQuery}`);
    } else {
      setApiPath(APIRoute.LIST);
      setQueryString('');
    }
  }, [debouncedQuery]);

  return (
    <main className="max-w-screen-xl p-3 ml-auto mr-auto">
      <div className="p-3 max-w-96">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      <MovieGrid apiPath={apiPath} queryString={queryString} />
      {/* <MovieGrid movies={titles} /> */}
    </main>
  );
}
