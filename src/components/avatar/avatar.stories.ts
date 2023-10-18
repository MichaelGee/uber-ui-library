import {StoryObj, Meta} from '@storybook/react';
import Avatar from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
    defaultChecked: false,
  },
};
