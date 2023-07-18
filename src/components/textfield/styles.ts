import {styled, VariantProps} from 'stitches/stitches.config';

export const StyledInputMainContainer = styled('div', {
  width: 'auto',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  boxSizing: 'border-box',
  WebkitBoxAlign: 'center',
  variants: {
    small: {
      true: {
        width: 'unset',
      },
    },
  },
});

export const StyledTextField = styled('input', {
  boxSizing: 'border-box',
  background: '$gray200',

  borderRadius: '$base',
  border: '3px solid transparent',

  lineHeight: '1.25rem',
  fontWeight: '$light',
  color: '$primary',
  width: 'auto',
  minWidth: '21.4375rem',
  letterSpacing: '0.6px',
  '&::placeholder': {
    color: '$gray400',
    fontWeight: '$light',
  },
  '&:focus': {
    outline: 'none',
    border: '3px solid $blue100',
    transition: '$default',
    background: '$white',
  },
  '&:disabled': {
    bg: '$gray100',
    userSelect: 'none',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '&:active': {
    outline: 'none',
    border: '3px solid $primary100',
    transition: '$default',
    background: '$white',
  },
  variants: {
    disabled: {
      true: {
        bg: '$gray100',
        userSelect: 'none',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
    error: {
      true: {
        border: '3px solid $red100',
      },
    },
    success: {
      true: {
        border: '3px solid $green100',
      },
    },
    isReadOnly: {
      true: {
        bg: '$white',
        border: '2px solid $gray200',
        '&:focus': {
          border: '2px solid $gray200',
        },
      },
    },
    size: {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
      },
      md: {
        padding: '0.75rem 1rem',
        fontSize: '1rem',
      },
      lg: {
        padding: '0.875rem 1rem',
        fontSize: '1.125rem',
      },
    },
  },

  compoundVariants: [
    //if disabled, make placeholder gray500 and disable focus
    {
      disabled: true,
      css: {
        '&::placeholder': {
          color: '$gray500',
        },
        '&:focus': {
          border: '3px solid transparent',
        },
      },
    },
    //if error and focused, make border red100
    {
      error: true,
      css: {
        '&:focus': {
          border: '3px solid $red100',
        },
      },
    },
  ],
  //   defaultVariants
  defaultVariants: {
    size: 'sm',
  },
});

export const StyledInputLabel = styled('p', {
  fWeight: '$medium',
  color: '$primary',
  lineHeight: '1rem',
  userSelect: 'none',
  marginBottom: '0.5rem',
  d: 'flex',
  variants: {
    size: {
      sm: {
        fs: '0.875rem',
      },
      md: {
        fs: '1rem',
      },
      lg: {
        fs: '1.125rem',
      },
    },
  },
});

export const StyledHelperTextContainer = styled('div', {
  position: 'absolute',
  opacity: 0,
  variants: {
    withValue: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const StyledHelperText = styled('p', {
  margin: '0.5rem 0 0 0',
  fontSize: '0.875rem',
  fontWeight: '$light',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  variants: {
    error: {
      true: {
        color: '$red100',
      },
    },
  },
});

export const StyledClearButton = styled('button', {
  position: 'absolute',
  right: '0',
  margin: 0,
  d: 'inline-flex',
  ai: 'center',
  border: 'none',
  bg: 'transparent',
  width: 'auto',
  height: 'auto',
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'color 250ms ease 0s, transform 250ms ease 0s, opacity 250ms ease 0s',
  visibility: 'hidden',
  opacity: 0,

  variants: {
    size: {
      sm: {
        transform: 'translateX(-60%) translateY(80%)',
      },
      md: {
        transform: 'translateX(-60%) translateY(70%)',
      },
      lg: {
        transform: 'translateX(-60%) translateY(60%)',
      },
    },
    visible: {
      true: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
});

export const ErrorStateContainer = styled('div', {
  boxSizing: 'border-box',
  position: 'absolute',
  right: '0',
  margin: 0,
  d: 'inline-flex',
  transition: 'color 250ms ease 0s, transform 250ms ease 0s, opacity 250ms ease 0s',
  visibility: 'hidden',
  opacity: 0,
  variants: {
    size: {
      sm: {
        transform: 'translateX(-60%) translateY(80%)',
      },
      md: {
        transform: 'translateX(-60%) translateY(70%)',
      },
      lg: {
        transform: 'translateX(-60%) translateY(60%)',
      },
    },
    visible: {
      true: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
});

export type TextFieldVariants = VariantProps<typeof StyledTextField>;
