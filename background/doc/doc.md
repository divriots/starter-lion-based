---
title: Background Tokens
---

```js script
import { html } from "lit-html";
import { backgrounds } from "../src/index.js";
import { ColorSwatch } from "@divriots/base-swatch";
customElements.define("color-swatch", ColorSwatch);
```

## Backgrounds

- [Buttons](./buttons.md.html)
- [Badge](./badge.md.html)

### Other

```html story
<color-swatch .tokens=${backgrounds.filter((c) => c.attributes.item !== "button" && c.attributes.item !== "button-link" && c.attributes.item !== "badge")}>
</color-swatch>
```
