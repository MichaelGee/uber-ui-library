import React, {useImperativeHandle, useMemo, useRef, useState} from 'react';
import {Props} from './input-props';
import {CSS} from 'stitches/stitches.config';
import Input from './input';
import {PasswordEyeClosedIcon} from 'icons/password-eye-close';
import {PasswordEyeOpendIcon} from 'icons/password-eye-open';
import {__DEV__} from 'utils/assertion';
import {StyledInput, StyledInputMainContainer} from './styles';

const InputPassword = React.forwardRef<HTMLInputElement, Props>(({css, ...props}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => inputRef.current);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInputMainContainer {...props}>
      <StyledInput
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        css={{...(css as any)}}
        {...props}
      />
      {showPassword ? (
        <PasswordEyeClosedIcon
          onClick={togglePassword}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: '12px',
            right: '13px',
          }}
        />
      ) : (
        <PasswordEyeOpendIcon
          onClick={togglePassword}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: '12px',
            right: '13px',
          }}
        />
      )}
    </StyledInputMainContainer>
  );
});

if (__DEV__) {
  InputPassword.displayName = 'UberUi.input-password';
}

InputPassword.toString = () => 'uber-input-password';

export default InputPassword;
