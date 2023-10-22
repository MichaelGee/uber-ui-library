import {StoryObj, Meta} from '@storybook/react';
import Avatar from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    fallback: {
      control: 'text',
    },
    user: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['labelXSmall', 'labelMedium', 'headingXSmall', 'headingMedium'],
      defaultValue: 'labelMedium',
    },
  },
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    alt: 'Pedro Duarte',
    fallback: 'PD',
    user: 'Pedro Duarte',
    size: 'labelMedium',
  },
};
