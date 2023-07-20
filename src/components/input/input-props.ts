import React from 'react';
import {CSS} from 'stitches/stitches.config';

import {AsProp} from 'utils/props-types';

export type FormElement = HTMLInputElement | HTMLTextAreaElement;

export interface Props
  extends AsProp<'input' | 'textarea'>,
    Omit<React.HTMLAttributes<FormElement>, 'as'> {
  placeholder?: string;
  error?: boolean;
  isError?: 'error' | 'success';
  success?: boolean;
  onFocus?: (e: React.FocusEvent<FormElement>) => void;
  onChange?: (e: React.ChangeEvent<FormElement>) => void;
  onClearClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  initialValue?: string;
  disabled?: boolean;
  label?: string;
  type?: string;
  helperText?: string;
  clearable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  css?: CSS;
  fullWidth?: boolean;
}

export const defaultProps = {
  type: 'text',
  isError: 'error',
  css: {},
  disabled: false,
  bordered: false,
  readOnly: false,
  clearable: false,
  rounded: false,
  fullWidth: false,
  size: 'md',
  className: '',
  placeholder: '',
  initialValue: '',
  helperText: '',
  label: '',
  error: false,
  success: false,
};
