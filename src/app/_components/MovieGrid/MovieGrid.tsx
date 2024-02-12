import { FC, ReactNode } from 'react';
import { RapidAPIListResponse } from '@/types/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LoadingCircle } from '../LoadingCircle/LoadingCircle';
import { useInView } from 'react-intersection-observer';
import { MovieItem } from '../MovieItem/MovieItem';

export const MovieGrid: FC<{
  apiPath: string;
  queryString?: string;
}> = ({ apiPath, queryString }): ReactNode => {
  const { isFetching, isFetchingNextPage, hasNextPage, data, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [apiPath, queryString],
      queryFn: ({ pageParam = 1 }): Promise<RapidAPIListResponse> =>
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

  const items = data?.pages.flatMap((group) =>
    group.results.map((movie) => {
      return (
        <div key={movie.id}>
          <MovieItem {...movie} />
        </div>
      );
    })
  );

  return (
    <>
      {isFetching && !isFetchingNextPage && (
        <div
          data-testid="initial-loading-circle"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <LoadingCircle />
        </div>
      )}
      {items && (
        <div
          data-testid="movie-grid"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3"
        >
          {items}
        </div>
      )}
      {!isFetching && hasNextPage && (
        <>
          <div
            data-testid="loading-additional-circle"
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
