import {styled, keyframes, VariantProps} from 'stitches/stitches.config';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const StyledButton = styled('button', {
  border: 'none',
  fs: '1rem',
  fWeight: '$medium',
  lh: '1.25rem',
  us: 'none',
  cursor: 'pointer',
  variants: {
    auto: {
      true: {
        width: 'auto',
        minWidth: 'min-content',
      },
    },
    circle: {
      true: {
        width: 'auto',
        minWidth: 'min-content !important',
        br: '50%',
      },
    },
    disabled: {
      true: {
        background: '$gray100',
        color: '$gray500',
        cursor: 'not-allowed',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        color: 'transparent',
        pe: 'none',
        p: 'relative',
        dflex: 'center',
        '&::after': {
          content: '',
          border: '2px solid $white',
          br: '$rounded',
          position: 'absolute',
          borderRightColor: '$blue100',
          animation: `${rotate} 1s ease infinite`,
          h: '1.2em',
          w: '1.2em',
        },
      },
    },
    pill: {
      true: {
        br: '$radii$pill',
      },
    },
    square: {
      true: {
        width: 'auto',
        minWidth: 'min-content !important',
        br: '0.375rem',
      },
    },

    variant: {
      primary: {
        background: '$primary',
        color: '$white',
        br: '$radii$base',
        '&:hover': {
          background: '$gray600',
        },
      },
      secondary: {
        background: '$gray200',
        color: '$primary',
        br: '$radii$base',
        '&:hover': {
          background: '$gray700',
        },
      },
      tertiary: {
        background: '$white',
        color: '$primary',
        br: '$radii$base',
        '&:hover': {
          background: '$gray200',
        },
      },
    },
    size: {
      xs: {
        padding: '0.375rem 0.8rem',
        fs: '0.75rem',
        width: 'auto',
        minWidth: '3.2rem',
      },
      sm: {
        padding: '0.625rem 0.75rem',
        fs: '0.875rem',
        width: 'auto',
        minWidth: '16rem',
      },
      md: {
        padding: '0.875rem 1rem',
        fs: '1rem',
        width: 'auto',
        minWidth: '16rem',
      },
      lg: {
        padding: '1rem 1.25rem',
        fs: '1.125rem',
        width: 'auto',
        minWidth: '21.4375rem',
      },
    },
  },
  compoundVariants: [
    //for primary, if it is disabled, then the hover is not allowed
    {
      variant: 'primary',
      disabled: true,
      css: {
        '&:hover': {
          background: '$gray100',
        },
      },
    },
    {
      variant: 'secondary',
      disabled: true,
      css: {
        background: '$gray100',
        color: '$gray500',
        '&:hover': {
          background: '$gray100',
        },
      },
    },
    {
      variant: 'tertiary',
      disabled: true,
      css: {
        background: '$white',
        color: '$gray500',
        '&:hover': {
          background: '$white',
        },
      },
    },
    {
      size: 'xs',
      square: true,
      css: {
        padding: '0.375rem 0.6rem',
      },
    },
    {
      size: 'xs',
      circle: true,
      css: {
        padding: '0.375rem 0.6rem !important',
      },
    },
    {
      size: 'sm',
      circle: true,
      css: {
        padding: '0.63rem 0.75rem !important',
      },
    },
    {
      size: 'md',
      circle: true,
      css: {
        padding: '0.880rem 0.98rem !important',
      },
    },
    {
      size: 'lg',
      circle: true,
      css: {
        padding: '1.25rem 1.26rem !important',
      },
    },
  ],
});

export type ButtonVariantsProps = VariantProps<typeof StyledButton>;
