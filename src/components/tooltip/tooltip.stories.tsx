import { StoryObj, Meta } from '@storybook/react';
import Tooltip from './tooltip';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    side: {      
        options: ['top', 'left', 'right', 'bottom']
    },
    variant: {
      options: ['simple', 'icon'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = (args) => <Tooltip {...args} />;
Default.args = {
  side: 'right',
  variant: 'icon',
  children: 'label',
};
