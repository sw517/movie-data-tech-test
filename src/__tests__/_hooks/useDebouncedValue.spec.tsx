import {
  defaultDebounceDelay,
  useDebouncedValue,
} from '@/app/_hooks/useDebouncedValue';
import {
  renderHook,
  act,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { FC, ReactNode, useState } from 'react';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

const TestComponent: FC = (): ReactNode => {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebouncedValue(value, defaultDebounceDelay);
  return (
    <>
      <button onClick={() => setValue((i) => i + 1)} />
      <span data-testid="value">{value}</span>
      <span data-testid="debounced-value">{debouncedValue}</span>
    </>
  );
};

describe('useDebouncedValue', () => {
  it('initialises debouncedValue to the passed value', () => {
    const { result: localState } = renderHook(() => useState(''));
    const [value] = localState.current;
    const {
      result: { current: debouncedValue },
    } = renderHook(() => useDebouncedValue(value, defaultDebounceDelay));

    expect(debouncedValue).toBe(value);
  });

  it('initialises debouncedValue to the passed value', async () => {
    const { unmount } = render(<TestComponent />);

    expect(screen.getByTestId('value').textContent).toBe('0');
    expect(screen.getByTestId('debounced-value').textContent).toBe('0');
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    });
    expect(screen.getByTestId('value').textContent).toBe('1');
    expect(screen.getByTestId('debounced-value').textContent).toBe('0');
    act(() => jest.advanceTimersByTime(defaultDebounceDelay));
    expect(screen.getByTestId('debounced-value').textContent).toBe('1');
    unmount();
  });
});
