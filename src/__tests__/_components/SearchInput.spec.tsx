import { SearchInput } from '@/app/_components/SearchInput/SearchInput';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchInput', () => {
  it('renders a label containing input for a11y', () => {
    const { unmount, container } = render(
      <SearchInput value="" onChange={jest.fn} />
    );
    const labelEl = container.querySelector('label');
    expect(labelEl).toBeTruthy();
    expect(labelEl?.querySelector('input')).toBeTruthy();
    unmount();
  });

  it('calls onChange prop when value is changed', () => {
    const mockSpy = jest.fn();
    const { unmount } = render(<SearchInput value="" onChange={mockSpy} />);
    const inputEl = screen.getByRole('textbox');
    fireEvent.input(inputEl, { target: { value: 'something changed' } });
    expect(mockSpy).toHaveBeenCalledWith('something changed');
    unmount();
  });
});
