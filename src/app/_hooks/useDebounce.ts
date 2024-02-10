import { useEffect, useRef, useState } from 'react';
export const useDebounce = (value: string, delay: number) => {
  const timeoutId = useRef<number | null>(null);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    timeoutId.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
