import React, {forwardRef, memo} from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {StyledToast, ToastViewport} from './styles';
import withDefaults from 'utils/with-defaults';
import Box from 'ui-box';
import {ErrorCircleIcon} from 'icons/error-circle-icon';
import {SuccessCircleIcon} from 'icons/success-circle-icon';
import {InfoIcon} from 'icons/info';
import {WarningIcon} from 'icons/warning';
import {Text} from 'components/text';
import {CloseCircleIcon} from 'icons/close-circle.icon';

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
  onClick?: () => void;
}

const defaultProps = {
  position: 'topRight',
  type: 'info',
  duration: '2000',
};

const renderType = (
  type: string,
  message: string,
  headline,
  children: React.ReactNode
) => {
  switch (type) {
    case 'error':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <CloseCircleIcon fill="white" width="24" height="24" />
          <Box
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="white" size="1rem" weight="medium">
              {headline}
            </Text>
            <Text color="white" size="1rem" weight="normal">
              {message}
            </Text>
          </Box>
        </Box>
      );
    case 'success':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <SuccessCircleIcon fill="white" width="24" height="24" />
          <Box
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="white" size="1rem" weight="medium">
              {headline}
            </Text>
            <Text color="white" size="1rem" weight="normal">
              {message}
            </Text>
          </Box>
        </Box>
      );
    case 'info':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <InfoIcon fill="white" />
          <Box
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="white" size="1rem" weight="medium">
              {headline}
            </Text>
            <Text color="white" size="1rem" weight="light">
              {message}
            </Text>
          </Box>
        </Box>
      );
    case 'warning':
      return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <WarningIcon />
          <Box
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="black" size="1rem" weight="medium">
              {headline}
            </Text>
            <Text color="black" size="1rem" weight="normal">
              {message}
            </Text>
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
          {renderType(type, message, headline, children)}
        </StyledToast>
        <ToastViewport position={position} />
      </ToastPrimitive.Provider>
    );
  }
);

Toast.displayName = 'UberUI.Toast';

Toast.toString = () => '.uberui-toast';

export default memo(withDefaults(Toast, defaultProps));
