import type { Meta, StoryObj } from '@storybook/react';

import { ListSelect } from './ListSelect';
import { RapidAPILists } from '@/types/api';

const meta = {
  title: 'Components/ListSelect',
  component: ListSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ListSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { value: RapidAPILists.TOP_BOXOFFICE, onChange: () => {} },
};
