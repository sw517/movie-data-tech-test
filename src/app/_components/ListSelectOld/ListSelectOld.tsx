import { RapidAPIListLabels, RapidAPILists } from '@/types/api';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react';

// This component was created to customize the styles,
// however, in the current state this component is unusable
// as it prevents the search input from working correctly and
// the useEffect listeners are conflicting with the option onclick.

export const ListSelectOld: FC<{
  value: RapidAPILists;
  onChange: (e: RapidAPILists) => void;
}> = ({ value, onChange }): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [focussedIndex, setFocussedIndex] = useState<number>(-1);
  const ref = useRef<HTMLButtonElement>(null);

  const options = Object.values(RapidAPILists).map((v) => {
    return (
      <li
        className={clsx([
          'block cursor-pointer appearance-none w-full hover:bg-orange-200 py-1 px-3 text-left focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:-outline-offset-2 focus-within:bg-orange-100',
          value === v ? 'bg-orange-200' : null,
        ])}
        key={v}
        data-option={v}
        value={v}
        tabIndex={0}
        onClick={() => onChange(v)}
      >
        {RapidAPIListLabels[v]}
      </li>
    );
  });

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest('#list-select')
      ) {
        setIsOpen(false);
      } else if (isOpen) {
        setIsOpen(false);
      }
      // setTimeout(() => {
      // }, 100);
    };

    const keyPressListener = (e: KeyboardEvent) => {
      if (!document.activeElement?.closest('#list-select')) return;

      e.preventDefault();

      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) return;

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      const focusOption = (index: number) => {
        const optionValue = Object.values(RapidAPILists)[index];
        const option = document.querySelector<HTMLElement>(
          `[data-option="${optionValue}"]`
        );
        option?.focus();
      };

      switch (e.key) {
        case 'ArrowDown':
          if (focussedIndex < Object.values(RapidAPILists).length - 1) {
            setFocussedIndex(focussedIndex + 1);
            focusOption(focussedIndex + 1);
          }
          break;
        case 'ArrowUp':
          if (focussedIndex > 0) {
            setFocussedIndex(focussedIndex - 1);
            focusOption(focussedIndex - 1);
          }
          break;
        case 'Enter':
          if (focussedIndex) {
            onChange(Object.values(RapidAPILists)[focussedIndex]);
            setIsOpen(false);
          }
      }
    };

    document.body.addEventListener('click', clickListener);
    document.body.addEventListener('keydown', keyPressListener);

    return () => {
      document.body.removeEventListener('click', clickListener);
      document.body.removeEventListener('keydown', keyPressListener);
    };
  }, [isOpen, focussedIndex, onChange]);

  return (
    <div id="list-select" className="relative z-10">
      {/* Hidden label to satisfy a11y */}
      <button
        ref={ref}
        role="combobox"
        className="w-full appearance-none flex items-center justify-between rounded-3xl py-1 px-3
         text-black bg-white cursor-pointer text-left hover:bg-orange-100"
        aria-controls="listbox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        data-select="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{RapidAPIListLabels[value]}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <ul
          id="listbox"
          className="absolute mt-2 top-full left-0 right-0 bg-white text-black overflow-hidden rounded-lg"
          role="listbox"
        >
          {options}
        </ul>
      )}
    </div>
  );
};
