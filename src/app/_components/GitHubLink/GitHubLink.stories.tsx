import type { Meta, StoryObj } from '@storybook/react';

import { GitHubLink } from './GitHubLink';

const meta = {
  title: 'Components/GitHubLink',
  component: GitHubLink,
  tags: ['autodocs'],
} satisfies Meta<typeof GitHubLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
