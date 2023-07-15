import React from 'react';
import {styled} from '../src/stitches';
import '../src/styles/globals.css';
// import {ToastProvider} from '../src/hooks/useToast';

const Box = styled('div', {
  display: 'flex',
  color: '$text',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontFamily: '$fonts$uber',
});

export const decorators = [
  Story => (
    <Box>
      <Story />
    </Box>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
