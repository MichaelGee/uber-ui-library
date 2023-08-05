import {styled, keyframes, VariantProps} from 'stitches/stitches.config';
import * as Switch from '@radix-ui/react-switch';

export const StyledSwitchRoot = styled(Switch.Root, {
  all: 'unset',
  backgroundColor: '$gray200',
  width: '3.25rem',
  height: '2rem',
  position: 'relative',
  borderRadius: '$radii$pill',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': {backgroundColor: '$primary'},
  //disabled
  '&[data-state="disabled"]': {
    backgroundColor: '$gray200',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray200',
        '&[data-state="checked"]': {backgroundColor: '$gray200'},
      },
    },
  },
});

export const StyledSwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: '1.75rem',
  height: '1.75rem',
  backgroundColor: '$white',
  borderRadius: '$radii$pill',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {transform: 'translateX(21px)', backgroundColor: '$white'},
  //disabled
  '&[data-state="disabled"]': {
    backgroundColor: '$gray500',
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray500',
        '&[data-state="checked"]': {transform: 'translateX(21px)', backgroundColor: '$gray500'},
      },
    },
  },
});
