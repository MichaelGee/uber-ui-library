import React, {useMemo, ReactNode} from 'react';
import {CSS} from 'stitches/stitches.config';
import {useDOMRef} from 'utils/dom';
import {TextTransforms, LetterSpacing} from 'utils/props-types';
import {ReactRef} from 'utils/refs';
import {StyledText, TextVariantsProps} from './text.styles';

type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface Props {
  tag: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  color?: string;
  size?: string | number;
  margin?: string | number;
  mb?: string | number;
  mt?: string | number;
  ml?: string | number;
  mr?: string | number;
  transform?: TextTransforms;
  letterSpacing?: LetterSpacing;
  css?: CSS;
  as?: As;
  href?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type TextChildProps = Props & NativeAttrs & TextVariantsProps;

export const TextChild = React.forwardRef((props: TextChildProps, ref: ReactRef<HTMLElement>) => {
  const {
    children,
    tag,
    color,
    transform,
    letterSpacing,
    margin: marginProp,
    mt: marginTopProps,
    mb: marginBottomProps,
    ml: marginLeftProps,
    mr: marginRightProps,
    size,
    css,
    href,
    ...otherProps
  } = props;

  const domRef = useDOMRef(ref);

  const fontSize = useMemo<string | undefined>(() => {
    if (!size) return 'inherit';
    if (typeof size === 'number') return `${size}px`;
    return size;
  }, [size]);

  const margin = useMemo<string | undefined>(() => {
    if (typeof marginProp === 'number') return `${marginProp}px`;
    return marginProp;
  }, [marginProp]);

  const marginTop = useMemo<string | undefined>(() => {
    if (typeof marginTopProps === 'number') return `${marginTopProps}px`;
    return marginTopProps;
  }, [marginTopProps]);

  const marginBottom = useMemo<string | undefined>(() => {
    if (typeof marginBottomProps === 'number') return `${marginBottomProps}px`;
    return marginBottomProps;
  }, [marginBottomProps]);

  const marginLeft = useMemo<string | undefined>(() => {
    if (typeof marginLeftProps === 'number') return `${marginLeftProps}px`;
    return marginLeftProps;
  }, [marginLeftProps]);

  const marginRight = useMemo<string | undefined>(() => {
    if (typeof marginRightProps === 'number') return `${marginLeftProps}px`;
    return marginRightProps;
  }, [marginRightProps]);

  return (
    <StyledText
      ref={domRef}
      as={tag}
      href={href}
      css={{
        color,
        fontSize: size ? fontSize : '',
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        letterSpacing,
        tt: transform,
        ...(css as any),
      }}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
});

const MemoTextChild = React.memo(TextChild);

export default MemoTextChild;
