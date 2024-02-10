'use client';

import { useEffect, useState } from 'react';
import { Movies } from './_components/Movies/Movies';
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

  // const { isLoading: isLoadingSearchResults, data: searchResults } = useQuery({
  //   queryKey: ['movieSearch', searchQuery],
  //   queryFn: () => mockData,
  //   // fetch(`/api/movies/search?search=${searchQuery}`).then((res) =>
  //   //   res.json()
  //   // ),
  //   // select: (data) => data.results,
  //   enabled: !!searchQuery,
  // });

  return (
    <main className="max-w-screen-xl p-3 ml-auto mr-auto">
      <div className="p-3 max-w-96">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      <Movies apiPath={apiPath} queryString={queryString} />
    </main>
  );
}
