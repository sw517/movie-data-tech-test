import { FC, ReactNode } from 'react';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import { RapidAPIResponse } from '@/types/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LoadingCircle } from '../LoadingCircle/LoadingCircle';
import { useInView } from 'react-intersection-observer';

export const Movies: FC<{
  apiPath: string;
  queryString?: string;
}> = ({ apiPath, queryString }): ReactNode => {
  const {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    error,
    data,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [apiPath, queryString],
    queryFn: ({ pageParam = 1 }): Promise<RapidAPIResponse> =>
      fetch(`${apiPath}?page=${pageParam}&${queryString}`).then((res) =>
        res.json()
      ),
    getNextPageParam: (data) =>
      data?.next ? String(Number(data.page) + 1) : undefined,
    initialPageParam: '1',
  });

  const { ref: IntersectionObserverRef } = useInView({
    threshold: 1,
    onChange: (inView: boolean) => {
      if (!isFetchingNextPage && inView) {
        fetchNextPage();
      }
    },
  });

  return (
    <>
      {isFetching && !isFetchingNextPage && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoadingCircle />
        </div>
      )}
      {data && (
        <>
          <MovieGrid movies={data.pages.flatMap((group) => group.results)} />
        </>
      )}
      {!isFetching && hasNextPage && (
        <>
          <div
            ref={IntersectionObserverRef}
            className="flex items-center justify-center pt-10 pb-28"
          >
            <LoadingCircle />
          </div>
        </>
      )}
    </>
  );
};
