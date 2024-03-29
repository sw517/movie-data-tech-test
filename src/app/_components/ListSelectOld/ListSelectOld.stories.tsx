import type { Meta, StoryObj } from '@storybook/react';

import { ListSelectOld } from './ListSelectOld';
import { RapidAPILists } from '@/types/api';

const meta = {
  title: 'Components/Legacy/ListSelectOld',
  component: ListSelectOld,
  tags: ['autodocs'],
} satisfies Meta<typeof ListSelectOld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { value: RapidAPILists.TOP_BOXOFFICE, onChange: () => {} },
};
