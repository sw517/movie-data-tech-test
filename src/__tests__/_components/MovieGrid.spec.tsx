import { MovieGrid } from '@/app/_components/MovieGrid/MovieGrid';
import { titles } from '@/data/movies/titles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import { FC, ReactNode } from 'react';

const originalFetch = global.fetch;
beforeEach(() => {
  jest.useFakeTimers();
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          entries: 10,
          results: titles,
          next: null,
          page: 1,
        }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllTimers();
  global.fetch = originalFetch;
});

const TestQueryProvider: FC<{ children: ReactNode }> = ({
  children,
}): ReactNode => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('MovieGrid', () => {
  it('displays an initial loading circle when fetching', () => {
    const { unmount } = render(
      <TestQueryProvider>
        <MovieGrid queryString="" apiPath="" />
      </TestQueryProvider>
    );
    expect(screen.queryByTestId('initial-loading-circle')).toBeTruthy();
    unmount();
  });

  it('displays a grid of MovieItem components when loaded', async () => {
    const { unmount } = await act(
      async () =>
        await render(
          <TestQueryProvider>
            <MovieGrid queryString="test" apiPath="test" />
          </TestQueryProvider>
        )
    );

    expect(await screen.findByTestId('movie-grid')).toBeTruthy();
    unmount();
  });
});
