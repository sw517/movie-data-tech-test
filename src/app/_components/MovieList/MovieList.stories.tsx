import type { Meta, StoryObj } from '@storybook/react';
import { titles as mockData } from '@/app/_data/movies/titles';

import { MovieList } from './MovieList';

const meta = {
  title: 'Components/MovieList',
  component: MovieList,
  tags: ['autodocs'],
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { movies: mockData },
};
