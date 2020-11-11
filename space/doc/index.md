```js script
import { html } from "lit-html";
import spacing from "../dist/tokens-definitions.js";
import {
  SpacingSwatch,
  StackSwatch,
  InlineSwatch,
  InsetSwatch,
} from "@divriots/base-swatch";
customElements.define("spacing-swatch", SpacingSwatch);
customElements.define("stack-swatch", StackSwatch);
customElements.define("inline-swatch", InlineSwatch);
customElements.define("inset-swatch", InsetSwatch);
```

# Spacing

## Base spacing

```js story
export const base = () =>
  html` <spacing-swatch
    .tokens=${spacing.filter((s) => !s.attributes.item)}
  ></spacing-swatch>`;
```

## Insets spacing

### Inset square

Used to give space to component, container, footer or message.

```js story
export const insets = () =>
  html` <inset-swatch
    .tokens=${spacing.filter((s) => /^inset$/.test(s.attributes.type))}
  ></inset-swatch>`;
```

### Inset squish

Mostly used for textboxes, textareas, and other form elements.

```js story
export const insetSquish = () =>
  html` <inset-swatch
    .tokens=${spacing.filter((s) => /^inset-squish/.test(s.attributes.type))}
  ></inset-swatch>`;
```

### Inset stretch

Mostly used for buttons, cell-like element or list item.

```js story
export const insetStretch = () =>
  html`<inset-swatch
    .tokens=${spacing.filter((s) => /^inset-stretch/.test(s.attributes.type))}
  ></inset-swatch>`;
```

## Stack spacing

Used inside a layout of stacked elements, or scrollable container.

```js story
export const stacks = () =>
  html` <stack-swatch
    .tokens=${spacing.filter((s) => /^stack/.test(s.attributes.type))}
  ></stack-swatch>`;
```

## Inline spacing

Used inside an inline container (breadcrumb for instance)

```js story
export const inlines = () =>
  html`<inline-swatch
    .tokens=${spacing.filter((s) => /^inline/.test(s.attributes.type))}
  ></inline-swatch>`;
```
