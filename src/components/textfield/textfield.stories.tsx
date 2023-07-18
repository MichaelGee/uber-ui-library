import {StoryObj, Meta} from '@storybook/react';
import {Textfield} from './index';

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isError: {
      control: 'select',
      options: ['error', 'success'],
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof Textfield>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    error: false,
    disabled: false,
    initialValue: '',
    value: '',
    label: 'Label',
    onChange: () => {},
    helperText: 'Hint',
    success: false,
    size: 'sm',
    clearable: false,
    readOnly: false,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    size: 'sm',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Placeholder',
    success: true,
    size: 'sm',
  },
};

export const Clearable: Story = {
  args: {
    placeholder: 'Placeholder',
    clearable: true,
    size: 'sm',
  },
};

export const Label: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    size: 'sm',
  },
};

export const Hint: Story = {
  args: {
    placeholder: 'Placeholder',
    helperText: 'Hint',
    size: 'sm',
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Read only',
    readOnly: true,
    size: 'sm',
  },
};
