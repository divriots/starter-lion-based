```js script
import { html } from "lit-html";
import tokens from "../dist/tokens-definitions.js";
import { OpacitySwatch } from "@divriots/base-swatch";
customElements.define("opacity-swatch", OpacitySwatch);
```

# Opacity

```html story
<opacity-swatch .tokens="${tokens}"></opacity-swatch>
```
