import type * as Stitches from '@stitches/react';

export const defaultTokens = {
  fonts: {
    uber: "'Uber Move Text', sans-serif",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  radii: {
    xs: '5px',
    sm: '9px',
    md: '12px',
    base: '8px',
    lg: '14px',
    xl: '18px',
    squared: '33%',
    rounded: '50%',
    pill: '9999px',
  },
  space: {
    0: '0rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    px: '1px',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    13: '2.25rem',
    14: '2.5rem',
    15: '2.75rem',
    16: '3rem',
    17: '3.5rem',
    18: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  transitions: {
    default: 'all 250ms ease-in-out',
    button:
      'background 0.25s  0s, color 0.25s ease 0s, border-color 0.65s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
  },
  shadows: {
    input: '0px 3px 6px rgba(170, 149, 245, 0.05)',
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px',
  },
};
export const defaultColors = {
  primary: '#000000',
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F3F3F3',
  gray200: '#E8E8E8',
  gray300: '#4B4B4B',
  gray400: '#5E5E5E',
  gray500: '#A6A6A6',
  gray600: '#333333',
  gray700: '#D5D5D5',
  red100: '#DE1135',
  red200: '#DE1135',
  green100: '#0E8345',
  blue100: '#266EF1',
  blue200: '#EFF4FE',
  yellow100: '#F6BC2F',
};

export const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  motion: '(prefers-reduced-motion)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
};

export const defaultUtils = {
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({alignItems: value}),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({alignSelf: value}),
  backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value,
  }),
  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
    backdropFilter: value,
  }),
  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    background: value,
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({boxShadow: value}),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value,
  }),
  bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({borderWidth: value}),
  d: (value: Stitches.PropertyValue<'display'>) => ({display: value}),
  dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value,
  }),
  events: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value,
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({flexBasis: value}),
  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({flexGrow: value}),
  fs: (value: Stitches.PropertyValue<'fontSize'>) => ({fontSize: value}),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({flexWrap: value}),
  fWeight: (value: Stitches.PropertyValue<'fontWeight'>) => ({
    fontWeight: value,
  }),
  h: (value: Stitches.PropertyValue<'height'>) => ({height: value}),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({lineHeight: value}),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  m: (value: Stitches.PropertyValue<'margin'>) => ({margin: value}),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({maxHeight: value}),
  maxSize: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value,
  }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({maxWidth: value}),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  mh: (value: Stitches.PropertyValue<'maxHeight'>) => ({maxHeight: value}),
  minSize: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value,
  }),
  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({minWidth: value}),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({marginLeft: value}),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({marginRight: value}),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({marginTop: value}),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  ov: (value: Stitches.PropertyValue<'overflow'>) => ({overflow: value}),
  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({overflowX: value}),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({overflowY: value}),
  p: (value: Stitches.PropertyValue<'padding'>) => ({padding: value}),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({paddingLeft: value}),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({paddingTop: value}),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  scale: (value: Stitches.PropertyValue<'scale'>) => ({
    transform: `scale(${value})`,
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
  sizeMax: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value,
  }),
  sizeMin: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value,
  }),
  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({textAlign: value}),
  tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
    textDecorationLine: value,
  }),
  textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::selection': {WebkitTextFillColor: '$colors$text'},
  }),
  to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
    textOverflow: value,
  }),
  tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
    textTransform: value,
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({width: value}),
};

export default {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
  },
  media: defaultMedia,
  utils: defaultUtils,
};
