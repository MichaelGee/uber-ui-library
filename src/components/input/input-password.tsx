import React, {useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {Props, FormElement} from './input-props';
import {PasswordEyeClosedIcon} from 'icons/password-eye-close';
import {PasswordEyeOpendIcon} from 'icons/password-eye-open';
import {__DEV__} from 'utils/assertion';
import {
  StyledInput,
  StyledInputMainContainer,
  StyledInputLabel,
  ErrorStateContainer,
  StyledHelperTextContainer,
  StyledHelperText,
} from './styles';
import {ErrorCircleIcon} from 'icons/error-circle-icon';
import {SuccessCircleIcon} from 'icons/success-circle-icon';

const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      css,
      label,
      size,
      isError,
      error,
      success,
      helperText,
      initialValue,
      onChange,
      disabled,
      readOnly,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
    const [selfValue, setSelfValue] = useState<string>(initialValue);
    const [errorState, setErorrState] = useState<boolean>(false);
    useImperativeHandle(ref, () => inputRef.current);

    const changeHandler = (event: React.ChangeEvent<FormElement>) => {
      if (disabled || readOnly) return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    const iconWidth = () => {
      switch (size) {
        case 'sm':
          return '16px';
        case 'md':
          return '20px';
        case 'lg':
          return '24px';
        default:
          return '20px';
      }
    };

    console.log('error', isError);
    console.log('value', value);

    useEffect(() => {
      if (value !== undefined && isError) {
        setErorrState(true);
      } else {
        setErorrState(false);
      }
    }, [isError, value]);
    return (
      <StyledInputMainContainer {...props}>
        <StyledInputLabel size={size}>{label}</StyledInputLabel>
        <StyledInput
          ref={inputRef}
          error={error}
          success={success}
          readOnly={readOnly}
          onChange={changeHandler}
          value={value}
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
              top: '21px',
              right: errorState ? '36px' : '13px',
            }}
          />
        ) : (
          <PasswordEyeOpendIcon
            onClick={togglePassword}
            style={{
              position: 'absolute',
              cursor: 'pointer',
              top: '21px',
              right: errorState ? '36px' : '13px',
            }}
          />
        )}
        {isError && isError === 'error' ? (
          <ErrorStateContainer size={size} visible={Boolean(selfValue)}>
            <ErrorCircleIcon width={iconWidth()} height={iconWidth()} />
          </ErrorStateContainer>
        ) : isError && isError === 'success' ? (
          <ErrorStateContainer size={size} visible={Boolean(selfValue)}>
            <SuccessCircleIcon width={iconWidth()} height={iconWidth()} />
          </ErrorStateContainer>
        ) : null}
        <StyledHelperTextContainer withValue={!!helperText}>
          {' '}
          {helperText && (
            <StyledHelperText error={error}>
              {error && <ErrorCircleIcon style={{marginRight: '0.25rem'}} />}
              {success && <SuccessCircleIcon style={{marginRight: '0.25rem'}} />}
              {helperText}
            </StyledHelperText>
          )}
        </StyledHelperTextContainer>
      </StyledInputMainContainer>
    );
  }
);

if (__DEV__) {
  InputPassword.displayName = 'UberUi.input-password';
}

InputPassword.toString = () => 'uber-input-password';

export default InputPassword;
