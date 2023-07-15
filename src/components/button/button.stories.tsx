import {StoryObj, Meta} from '@storybook/react';
import {Button} from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    square: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    square: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Label',
    variant: 'secondary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    square: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Label',
    variant: 'tertiary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    square: false,
  },
};
export const Squared: Story = {
  args: {
    children: '01',
    variant: 'primary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    square: true,
  },
};
export const Circle: Story = {
  args: {
    children: '01',
    variant: 'primary',
    size: 'md',
    disabled: false,
    auto: false,
    pill: false,
    fullWidth: false,
    loading: false,
    circle: true,
  },
};
