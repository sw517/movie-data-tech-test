import { ChangeEvent, FC, ReactNode } from 'react';

export const SearchInput: FC<{
  value: string;
  onChange: (input: string) => void;
}> = ({ value, onChange }): ReactNode => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search by film name"
        className="rounded-2xl py-1 px-3 text-black"
      />
      <button onClick={() => onChange('')}></button>
    </>
  );
};
