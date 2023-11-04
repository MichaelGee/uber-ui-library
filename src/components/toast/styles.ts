import {styled, keyframes} from 'stitches/stitches.config';
import * as ToastPrimitive from '@radix-ui/react-toast';

const VIEWPORT_PADDING = 20;

const hide = keyframes({
  '0%': {opacity: 1},
  '100%': {opacity: 0},
});

const slideIn = keyframes({
  from: {
    transform: `translateY(calc(50% + ${VIEWPORT_PADDING}px))`,
  },
  to: {transform: 'translateY(0)'},
});

const swipeOut = keyframes({
  from: {transform: 'translateY(var(--radix-toast-swipe-end-x))'},
  to: {transform: `translateY(calc(50% + ${VIEWPORT_PADDING}px))`},
});

const swipeInRight = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {transform: 'translateX(0)'},
});

const swipeOutRight = keyframes({
  from: {transform: 'translateX(var(--radix-toast-swipe-end-x))'},
  to: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`},
});

const swipeInLeft = keyframes({
  from: {
    transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))`,
  },
  to: {transform: 'translateX(0)'},
});

const swipeOutLeft = keyframes({
  from: {transform: 'translateX(0)'},
  to: {transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))`},
});

export const StyledToast = styled(ToastPrimitive.Root, {
  background: 'white',
  borderRadius: '0.75rem',
  boxShadow: '0px 16px 48px 0px rgba(0, 0, 0, 0.22)',
  padding: '1rem',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  alignItems: 'start',
  width: '21.4rem',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
  variants: {
    type: {
      error: {
        background: '$red200',
        color: 'white',
      },
      warning: {
        background: '$yellow100',
      },
      success: {
        background: '$green100',
      },
      info: {
        background: '$blue100',
      },
    },
    position: {
      topRight: {
        //swipe
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOutRight} 100ms ease-out`,
        },
        '&[data-state="open"]': {
          animation: `${swipeInRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${hide} 100ms ease-in`,
        },
      },
      topLeft: {
        '@media (prefers-reduced-motion: no-preference)': {
          '&[data-state="open"]': {
            animation: `${swipeInLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-swipe="move"]': {
            transform: 'translateX(var(--radix-toast-swipe-move-x))',
          },
          '&[data-swipe="cancel"]': {
            transform: 'translateX(0)',
            transition: 'transform 200ms ease-out',
          },
          '&[data-swipe="end"]': {
            animation: `${swipeOutLeft} 100ms ease-out`,
          },
        },
      },
      top: {},
      bottom: {},
    },
  },
});

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '100px',
  right: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 'fit-content',
  maxWidth: '100vw',
  margin: '0 auto',
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  variants: {
    position: {
      bottom: {
        bottom: '100px',
      },
      top: {
        top: '0px',
        bottom: 'auto',
      },
      topLeft: {
        right: 'unset !important',
        top: '0px !important',
        left: '0px !important',
        bottom: 'unset !important',
      },
      topRight: {
        right: '0px !important',
        top: '0px !important',
        left: 'unset !important',
        bottom: 'unset !important',
      },
    },
  },
});
