'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, useState, ReactNode } from 'react';

export const Providers: FC<{ children: ReactNode }> = ({
  children,
}): ReactNode => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
