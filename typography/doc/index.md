```js script
import { html } from "lit-html";
import typography from "../dist/tokens-definitions.js";
import {
  FontFamilySwatch,
  FontSizeSwatch,
  FontWeightSwatch,
  LineHeightSwatch,
  LetterSpacingSwatch,
} from "@divriots/base-swatch";
customElements.define("font-family-swatch", FontFamilySwatch);
customElements.define("font-size-swatch", FontSizeSwatch);
customElements.define("font-weight-swatch", FontWeightSwatch);
customElements.define("line-height-swatch", LineHeightSwatch);
customElements.define("letter-spacing-swatch", LetterSpacingSwatch);
```

# Typography

# Font Family

```html story
<font-family-swatch
  .tokens=${typography.filter((t) => t.attributes.type === "family")}>
</font-family-swatch>
```

## Font Sizes

```html story
<font-size-swatch
  .tokens=${typography.filter((t) => t.attributes.type === "size")}>
</font-size-swatch>
```

## Font weight

```html story
<font-weight-swatch
  .tokens=${typography.filter((t) => t.attributes.type === "weight")}>
</font-weight-swatch>
```

## Letter spacing

```html story
<letter-spacing-swatch
.tokens=${typography.filter((t) => t.attributes.category === "tracking")}>
</letter-spacing-swatch>
```

## Line Height

```html story
<line-height-swatch .tokens=${typography.filter((t) => t.attributes.category === "lineHeight")}></line-height-swatch>
```
