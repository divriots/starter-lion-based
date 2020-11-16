import { css } from "@lion/core";
import {
  paletteProductNormalBase,
  paletteProductNormalHover,
  paletteProductNormalActive,
  paletteCloudNormalBase,
  paletteCloudNormalHover,
  paletteCloudNormalActive,
  paletteRedNormalBase,
  paletteRedNormalHover,
  paletteRedNormalActive,
} from "~/colors";

// Primary
export const backgroundPrimaryBase = css`
  ${paletteProductNormalBase}
`;
export const backgroundPrimaryHover = css`
  ${paletteProductNormalHover}
`;
export const backgroundPrimaryActive = css`
  ${paletteProductNormalActive}
`;

// Secondary
export const backgroundSecondaryBase = css`
  ${paletteCloudNormalBase}
`;
export const backgroundSecondaryHover = css`
  ${paletteCloudNormalHover}
`;
export const backgroundSecondaryActive = css`
  ${paletteCloudNormalActive}
`;

// Critical
export const backgroundCriticalBase = css`
  ${paletteRedNormalBase}
`;
export const backgroundCriticalHover = css`
  ${paletteRedNormalHover}
`;
export const backgroundCriticalActive = css`
  ${paletteRedNormalActive}
`;
