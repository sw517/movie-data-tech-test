import type { Meta, StoryObj } from '@storybook/react';
import { titles as mockData } from '@/data/movies/titles';

import { MovieGridOld } from './MovieGridOld';

const meta = {
  title: 'Components/MovieGridOld',
  component: MovieGridOld,
  tags: ['autodocs'],
} satisfies Meta<typeof MovieGridOld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { movies: mockData },
};
