import type { Meta, StoryObj } from '@storybook/react';
import { titles as mockData } from '@/app/_data/movies/titles';

import { MovieItem } from './MovieItem';

const meta = {
  title: 'MovieItem',
  component: MovieItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MovieItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: mockData.results[0],
};

export const MissingImage: Story = {
  args: { ...mockData.results[0], primaryImage: null },
};
