import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  useMemo,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import {
  StyledInputMainContainer,
  StyledInput,
  StyledInputLabel,
  StyledHelperTextContainer,
  StyledHelperText,
  InputVariants,
  StyledClearButton,
  ErrorStateContainer,
} from './styles';
import {__DEV__} from 'utils/assertion';
import {Props, FormElement, defaultProps} from './input-props';
import {ErrorCircleIcon} from 'icons/error-circle-icon';
import {SuccessCircleIcon} from 'icons/success-circle-icon';
import {CloseCircleIcon} from 'icons/close-circle.icon';
import InputPassword from './input-password';

type InputProps = Props & InputVariants;

const simulateChangeEvent = (
  el: FormElement,
  event: React.MouseEvent<HTMLButtonElement>
): React.ChangeEvent<FormElement> => {
  return {
    ...event,
    target: el,
    currentTarget: el,
  };
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      as: Component = 'input',
      placeholder,
      error,
      isError,
      success,
      value,
      initialValue,
      onChange,
      disabled,
      label,
      type,
      helperText,
      size,
      clearable,
      onClearClick,
      readOnly,
      css,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
    const [selfValue, setSelfValue] = useState<string>(initialValue);
    useImperativeHandle(ref, () => inputRef.current);
    const isControlledComponent = useMemo(() => value !== undefined, [value]);

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

    const controlledValue = isControlledComponent
      ? {value: selfValue}
      : {defaultValue: initialValue};

    const changeHandler = (event: React.ChangeEvent<FormElement>) => {
      if (disabled || readOnly) return;
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };

    const clearHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      isControlledComponent || setSelfValue('');
      onClearClick && onClearClick(event);
      if (!inputRef.current) return;

      const changeEvent = simulateChangeEvent(inputRef.current, event);

      changeEvent.target.value = '';
      onChange && onChange(changeEvent);
      inputRef.current.focus();
    };

    const inputProps = {
      ...props,
      ...controlledValue,
    };

    useEffect(() => {
      if (isControlledComponent) {
        setSelfValue(value as string);
      }
    }, [isControlledComponent, value]);

    return (
      <StyledInputMainContainer fullWidth={fullWidth}>
        <StyledInputLabel size={size}>{label}</StyledInputLabel>
        <StyledInput
          type={type}
          as={Component}
          ref={inputRef}
          error={error}
          value={value}
          success={success}
          placeholder={placeholder}
          onChange={changeHandler}
          disabled={disabled}
          isReadOnly={readOnly}
          readOnly={readOnly}
          size={size}
          fullWidth={fullWidth}
          css={{...(css as any)}}
          {...inputProps}
        />
        {clearable && (
          <StyledClearButton
            type="button"
            onClick={clearHandler}
            size={size}
            visible={Boolean(selfValue)}
          >
            <CloseCircleIcon width={iconWidth()} height={iconWidth()} />
          </StyledClearButton>
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

type InputComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Password: typeof InputPassword;
};

type ComponentProps = Partial<typeof Input.defaultProps> &
  Omit<Props, keyof typeof Input.defaultProps> &
  InputVariants & {as?: React.ElementType};

if (__DEV__) {
  Input.displayName = 'UberUI.Input';
}

Input.toString = () => '.uberui-Input';

export default Input as InputComponent<FormElement, ComponentProps>;
