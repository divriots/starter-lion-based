export const baseFonts = {
  sans:
    'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: "inherit",
  monospace: baseFonts.mono,
};

export const fontSizes = {
  xxs: "0.875rem",
  xs: "1rem",
  s: "1.25rem",
  m: "1.5rem",
  l: "1.875rem",
  xl: "2.25rem",
  xxl: "3rem",
  xxxl: "4rem",
  xxxxl: "4.5rem",
};

export const baseFontWeights = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

const baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
};

export default {
  font: {
    weight: fontWeights,
    family: fonts,
    size: fontSizes,
  },
  tracking: letterSpacings,
  lineHeight: lineHeights,
};
