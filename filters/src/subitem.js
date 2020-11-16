export const isPrimary = (c) => c.attributes.subitem === "primary";
export const isSecondary = (c) => c.attributes.subitem === "secondary";
export const isWhite = (c) => c.attributes.subitem === "white";
export const isBordered = (c) => c.attributes.subitem === "bordered";

export const isGoogle = (c) => c.attributes.subitem === "google";
export const isFacebook = (c) => c.attributes.subitem === "facebook";
export const isSocial = (c) => isFacebook(c) || isGoogle(c);

export const isInfo = (c) => c.attributes.subitem === "info";
export const isSuccess = (c) => c.attributes.subitem === "success";
export const isWarning = (c) => c.attributes.subitem === "warning";
export const isCritical = (c) => c.attributes.subitem === "critical";
export const isSupport = (c) =>
  isInfo(c) || isSuccess(c) || isWarning(c) || isCritical(c);
