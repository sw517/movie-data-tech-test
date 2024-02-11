import { RapidAPIListLabels, RapidAPILists } from '@/types/api';
import { ChangeEvent, FC, ReactNode } from 'react';

export const ListSelect: FC<{
  disabled?: boolean;
  value: RapidAPILists;
  onChange: (e: RapidAPILists) => void;
}> = ({ disabled, value, onChange }): ReactNode => {
  const options = Object.values(RapidAPILists).map((v) => {
    return (
      <option key={v} value={v}>
        {RapidAPIListLabels[v]}
      </option>
    );
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as RapidAPILists);
  };

  return (
    <label className="block w-full">
      <span className="text-sm mb-3 pl-3">Film list</span>
      <select
        disabled={disabled}
        onChange={handleChange}
        value={value}
        className="w-full bg-white text-black px-2 py-1 rounded-2xl"
      >
        {options}
      </select>
    </label>
  );
};
