import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Text} from './index';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
    i: {
      control: 'boolean',
    },
    span: {
      control: 'boolean',
    },
    weight: {
      control: 'select',
      options: [
        'hairline',
        'thin',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
    margin: {
      control: {type: 'number'},
    },
    marginTop: {
      control: {type: 'number'},
    },
    marginBottom: {
      control: {type: 'number'},
    },
    marginRight: {
      control: {type: 'number'},
    },
    marginLeft: {
      control: {type: 'number'},
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'capitalize', 'none'],
    },
    letterSpacing: {
      control: {type: 'number'},
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args}>Join Meeting</Text>;

export const Default = Template.bind({});
Default.args = {};
