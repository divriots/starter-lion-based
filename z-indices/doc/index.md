```js script
import { html } from "lit-html";
import tokens from "../dist/tokens-definitions.js";
import ZIndexSwatch from "@divriots/base-swatch/dist/ZIndexSwatch.js";
customElements.define("z-index-swatch", ZIndexSwatch);
```

# Z-Index

```js story
export const story = () =>
  html`<z-index-swatch .tokens=${tokens}></z-index-swatch>`;
```
