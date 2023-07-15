import React, {forwardRef, HTMLProps, MouseEvent} from 'react';
import {__DEV__} from 'utils/assertion';
import {ButtonVariantsProps, StyledButton} from './styles';
import withDefaults from 'utils/with-defaults';
import {CSS} from 'stitches/stitches.config';
import {useButton} from '@react-aria/button';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  auto?: boolean;
  pill?: boolean;
  css?: CSS;
  as?: React.ElementType<any>;
  fullWidth?: boolean;
  loading?: boolean;
  square?: boolean;
  circle?: boolean;
  type?: HTMLProps<HTMLButtonElement>['type'];
  className?: HTMLProps<HTMLButtonElement>['className'];
  onClick?: HTMLProps<HTMLButtonElement>['onClick'];
  disabled?: HTMLProps<HTMLButtonElement>['disabled'];
}

type ButtonProps = Props & ButtonVariantsProps;

const defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  auto: false,
  pill: false,
};
/** Ues */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      disabled,
      auto,
      pill,
      className,
      css,
      onClick,
      as,
      type,
      fullWidth,
      loading,
      square,
      circle,
    },
    ref
  ) => {
    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onClick && onClick(event);
    };

    const {buttonProps} = useButton(
      {
        // @ts-ignore
        onPress: onClick,
        isDisabled: disabled,
      },
      ref
    );

    return (
      <StyledButton
        {...buttonProps}
        className={`uberui-button ${className}`}
        as={as}
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        loading={loading}
        onClick={clickHandler}
        auto={auto}
        pill={pill}
        square={square}
        circle={circle}
        css={{...(css as any)}}
      >
        {children}
      </StyledButton>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'UberUI.Button';
}

Button.toString = () => '.uberui-button';

export default withDefaults(Button, defaultProps);
