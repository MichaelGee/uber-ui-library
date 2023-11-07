import {Meta} from '@storybook/react';
import React, {useState} from 'react';
import {Toast} from './index';
import {useToast} from './useToast';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

export const Default = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  return (
    <>
      <button onClick={handler}>Open Toast</button>
      <Toast open={visible} onOpenChange={setVisible}>
        <p>Paragraph text</p>
      </Toast>
    </>
  );
};

export const UseToast = () => {
  const {addToast} = useToast();

  const handler = () => {
    addToast?.('Paragraph text', {type: 'info', headline: 'Headline text'});
  };

  return (
    <>
      <button onClick={handler}>Open Toast</button>
    </>
  );
};

export const Success = () => {
  const {addToast} = useToast();

  const handler = () => {
    addToast?.('Paragraph text', {
      type: 'success',
      headline: 'Headline text',
      duration: 300000,
      closeIcon: true,
    });
  };

  return (
    <>
      <button onClick={handler}>Open Toast</button>
    </>
  );
};

export const Error = () => {
  const {addToast} = useToast();

  const handler = () => {
    addToast?.('Paragraph text', {
      type: 'error',
      headline: 'Headline text',
    });
  };

  return (
    <>
      <button onClick={handler}>Open Toast</button>
    </>
  );
};
export const Warning = () => {
  const {addToast} = useToast();

  const handler = () => {
    addToast?.('Paragraph text', {type: 'warning', headline: 'Headline text'});
  };

  return (
    <>
      <button onClick={handler}>Open Toast</button>
    </>
  );
};
