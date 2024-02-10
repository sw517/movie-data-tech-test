import type { Meta, StoryObj } from '@storybook/react';

import { LoadingCircle } from './LoadingCircle';

const meta = {
  title: 'Components/LoadingCircle',
  component: LoadingCircle,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
