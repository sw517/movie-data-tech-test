import type { Meta, StoryObj } from '@storybook/react';
import { titles as mockData } from '@/data/movies/titles';

import { MovieGrid } from './MovieGrid';

const meta = {
  title: 'Components/MovieGrid',
  component: MovieGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof MovieGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { movies: mockData },
};
