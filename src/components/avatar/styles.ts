import {styled} from 'stitches/stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
  backgroundColor: '$primary',
  variants: {
    size: {
      headingMedium: {
        fontSize: '28px',
        lineHeight: '36px',
        height: '64px',
        width: '64px',
      },
      headingXSmall: {
        fontSize: '20px',
        lineHeight: '28px',
        height: '48px',
        width: '48px',
      },
      labelMedium: {
        fontSize: '16px',
        lineHeight: '20px',
        height: '36px',
        width: '36px',
      },
      labelXSmall: {
        fontSize: '12px',
        lineHeight: '16px',
        height: '28px',
        width: '28px',
      },
    },
  },
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary',
  color: '$white',
  fontWeight: 500,
});

export const Flex = styled('div', {
  dflex: 'center',
});

export const User = styled('div', {
  dflex: 'center',
  height: '3rem',
  fs: '1.124rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  color: '$primary',
});
