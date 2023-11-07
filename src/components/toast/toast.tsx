import React, {forwardRef, memo} from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {StyledToast, ToastViewport, CloseButton} from './styles';
import withDefaults from 'utils/with-defaults';
import Box from 'ui-box';
import {SuccessCircleIcon} from 'icons/success-circle-icon';
import {InfoIcon} from 'icons/info';
import {WarningIcon} from 'icons/warning';
import {Text} from 'components/text';
import {CloseCircleIcon} from 'icons/close-circle.icon';
import {CloseIcon} from 'icons/close';

interface ToastProps {
  id?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  background?: string;
  border?: string;
  position?: 'top' | 'bottom' | 'topRight' | 'topLeft';
  message?: string;
  type?: 'error' | 'warning' | 'success' | 'info';
  duration?: number;
  headline?: string;
  showIcon?: boolean;
  onClick?: () => void;
  closeIcon?: boolean;
}

const defaultProps = {
  position: 'topRight',
  type: 'info',
  duration: '2000',
  showIcon: false,
};

const renderType = (
  type: string,
  message: string,
  headline,
  showIcon,
  children: React.ReactNode
) => {
  switch (type) {
    case 'error':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {showIcon && <CloseCircleIcon fill="white" width="24" height="24" />}
          <Box>
            <ToastPrimitive.Title>
              <Text color="white" size="1rem" weight="medium">
                {headline}
              </Text>
            </ToastPrimitive.Title>
            <ToastPrimitive.Description>
              <Text color="white" size="1rem" weight="normal">
                {message}
              </Text>
            </ToastPrimitive.Description>
          </Box>
        </Box>
      );
    case 'success':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {showIcon && (
            <SuccessCircleIcon fill="white" width="24" height="24" />
          )}

          <Box>
            <ToastPrimitive.Title>
              <Text color="white" size="1rem" weight="medium">
                {headline}
              </Text>
            </ToastPrimitive.Title>
            <ToastPrimitive.Description>
              <Text color="white" size="1rem" weight="normal">
                {message}
              </Text>
            </ToastPrimitive.Description>
          </Box>
        </Box>
      );
    case 'info':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {showIcon && <InfoIcon fill="white" />}
          <Box>
            <ToastPrimitive.Title>
              <Text color="white" size="1rem" weight="medium">
                {headline}
              </Text>
            </ToastPrimitive.Title>
            <ToastPrimitive.Description>
              <Text color="white" size="1rem" weight="normal">
                {message}
              </Text>
            </ToastPrimitive.Description>
          </Box>
        </Box>
      );
    case 'warning':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {showIcon && <WarningIcon />}
          <Box>
            <ToastPrimitive.Title>
              <Text color="white" size="1rem" weight="medium">
                {headline}
              </Text>
            </ToastPrimitive.Title>
            <ToastPrimitive.Description>
              <Text color="white" size="1rem" weight="normal">
                {message}
              </Text>
            </ToastPrimitive.Description>
          </Box>
        </Box>
      );
    default:
      return children;
  }
};

const Toast = forwardRef(
  (
    {
      children,
      id,
      open,
      onOpenChange,
      background,
      border,
      position,
      message,
      headline,
      type,
      duration,
      onClick,
      showIcon,
      closeIcon,
    }: ToastProps,
    ref
  ) => {
    return (
      <ToastPrimitive.Provider>
        <StyledToast
          open={open}
          position={position}
          css={{background, border}}
          onOpenChange={onOpenChange}
          id={id}
          type={type}
          duration={duration}
          onClick={onClick}
        >
          {renderType(type, message, headline, showIcon, children)}

          {closeIcon && (
            <CloseButton aria-label="Close">
              <span aria-hidden>
                <CloseIcon />
              </span>
            </CloseButton>
          )}
        </StyledToast>
        <ToastViewport position={position} />
      </ToastPrimitive.Provider>
    );
  }
);

Toast.displayName = 'UberUI.Toast';

Toast.toString = () => '.uberui-toast';

export default memo(withDefaults(Toast, defaultProps));
