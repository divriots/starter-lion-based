```js script
import { html } from "lit-html";
import shadows from "../dist/tokens-definitions.js";
import { ShadowSwatch } from "@divriots/base-swatch";
customElements.define("shadow-swatch", ShadowSwatch);
```

# Shadows

```html story
<shadow-swatch .tokens="${shadows}"></shadow-swatch>
```
