'use client';

import { useEffect, useState } from 'react';
import { MovieGrid } from '@/app/_components/MovieGrid/MovieGrid';
import {
  defaultDebounceDelay,
  useDebouncedValue,
} from '@/app/_hooks/useDebouncedValue';
import { SearchInput } from '@/app/_components/SearchInput/SearchInput';
import { APIRoute, RapidAPILists } from '@/types/api';

import { titles } from '@/data/movies/titles';
import { MovieGridOld } from '@/app/_components/MovieGridOld/MovieGridOld';
import { ListSelect } from '@/app/_components/ListSelect/ListSelect';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiPath, setApiPath] = useState('');
  const [queryString, setQueryString] = useState('');
  const debouncedQuery = useDebouncedValue(searchQuery, defaultDebounceDelay);
  const [selectedList, setSelectedList] = useState(RapidAPILists.TOP_BOXOFFICE);

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
      <div className="p-3 min-[480px]:flex items-center justify-between">
        <div className="max-w-96 flex-grow">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="mt-4 max-w-96 min-[480px]:mt-0 flex-grow min-[480px]:ml-8">
          <ListSelect
            disabled={!!searchQuery}
            value={selectedList}
            onChange={setSelectedList}
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <MovieGrid apiPath={apiPath} queryString={queryString} />
      </div>
      {/* <MovieGridOld movies={titles} /> */}
    </main>
  );
}
