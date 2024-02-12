import { useEffect, useState } from 'react';

export const defaultDebounceDelay = 500;

export function useDebouncedValue<T>(
  value: T,
  delay: number = defaultDebounceDelay
): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}
