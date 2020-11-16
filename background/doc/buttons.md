---
title: Button background Tokens
---

```js script
import { html } from "lit-html";
import subitem from "~/filters";
import { backgrounds } from "../src/index.js";
import { ColorSwatch } from "@divriots/base-swatch";
customElements.define("color-swatch", ColorSwatch);
const tokens = backgrounds.filter((c) => c.attributes.item === "button");
const isPrimary = (c) => c.attributes.subitem === "primary";
const isSecondary = (c) => c.attributes.subitem === "secondary";
const isWhite = (c) => c.attributes.subitem === "white";
const isBordered = (c) => c.attributes.subitem === "bordered";

const isGoogle = (c) => c.attributes.subitem === "google";
const isFacebook = (c) => c.attributes.subitem === "facebook";
const isSocial = (c) => isFacebook(c) || isGoogle(c);

const isInfo = (c) => c.attributes.subitem === "info";
const isSuccess = (c) => c.attributes.subitem === "success";
const isWarning = (c) => c.attributes.subitem === "warning";
const isCritical = (c) => c.attributes.subitem === "critical";
const isSupport = (c) =>
  isInfo(c) || isSuccess(c) || isWarning(c) || isCritical(c);
```

## Buttons

### Primary

```html story
<color-swatch .tokens="${tokens.filter(isPrimary)}"> </color-swatch>
```

### Secondary

```html story
<color-swatch .tokens="${tokens.filter(isSecondary)}"> </color-swatch>
```

### White

```html story
<color-swatch .tokens="${tokens.filter(isWhite)}"> </color-swatch>
```

### White

```html story
<color-swatch .tokens="${tokens.filter(isWhite)}"> </color-swatch>
```

### Support

### Info

```html story
<color-swatch .tokens="${tokens.filter(isInfo)}"> </color-swatch>
```

### Success

```html story
<color-swatch .tokens="${tokens.filter(isSuccess)}"> </color-swatch>
```

### Warning

```html story
<color-swatch .tokens="${tokens.filter(isWarning)}"> </color-swatch>
```

### Critical

```html story
<color-swatch .tokens="${tokens.filter(isCritical)}"> </color-swatch>
```

### Social

### google

```html story
<color-swatch .tokens="${tokens.filter(isGoogle)}"> </color-swatch>
```

### Facebook

```html story
<color-swatch .tokens="${tokens.filter(isFacebook)}"> </color-swatch>
```
