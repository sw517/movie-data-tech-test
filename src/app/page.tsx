'use client';

import { useEffect, useState } from 'react';
import { MovieGrid } from './_components/MovieGrid/MovieGrid';
import { useDebounce } from './_hooks/useDebounce';
import { SearchInput } from './_components/SearchInput/SearchInput';
import { APIRoute, RapidAPILists, RapidAPIListLabels } from '@/types/api';

import { titles } from '@/data/movies/titles';
import { MovieGridOld } from './_components/MovieGridOld/MovieGridOld';
import { ListSelectOld } from './_components/ListSelectOld/ListSelectOld';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiPath, setApiPath] = useState('');
  const [queryString, setQueryString] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 600);
  const [selectedList, setSelectedList] = useState(
    RapidAPILists.MOST_POPULAR_MOVIES
  );
  const [title, setTitle] = useState(RapidAPIListLabels[selectedList]);

  useEffect(() => {
    if (debouncedQuery) {
      setApiPath(APIRoute.SEARCH);
      setQueryString(`search=${debouncedQuery}`);
    } else {
      setApiPath(APIRoute.LIST);
      setQueryString(`list=${selectedList}`);
    }
  }, [debouncedQuery, selectedList]);

  return (
    <main className="max-w-screen-xl flex flex-col p-3 ml-auto mr-auto">
      <div className="p-3 max-w-96">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <ListSelectOld value={selectedList} onChange={setSelectedList} />
      </div>
      <h1>{title}</h1>
      <div className="overflow-hidden">
        {/* <MovieGrid apiPath={apiPath} queryString={queryString} /> */}
      </div>
      <MovieGridOld movies={titles} />
    </main>
  );
}
