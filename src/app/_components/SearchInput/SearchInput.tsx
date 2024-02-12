import { ChangeEvent, FC, ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const SearchInput: FC<{
  value: string;
  onChange: (input: string) => void;
}> = ({ value, onChange }): ReactNode => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <label className="block w-full">
      <span className="text-sm mb-3 pl-3">Search films</span>
      <div className="relative w-full">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search by film title"
          className="w-full rounded-3xl py-2 pl-3 pr-5 text-black"
        />
        {value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-white bg-gray-500 hover:bg-gray-400 p-1"
            aria-label="Clear input"
            onClick={() => onChange('')}
          >
            <XMarkIcon className="w-3" />
          </button>
        )}
      </div>
    </label>
  );
};
