import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { value: '', onChange: () => {} },
};

export const ContainsText: Story = {
  args: { value: 'Jurassic Park', onChange: () => {} },
};
