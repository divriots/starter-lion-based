import { html } from "lit-html";
import "./index.js";

export default {
  parameters: {
    layout: "centered",
  },
};

export const primary = () => html`<lion-button>Primary</lion-button>`;

export const secondary = () =>
  html`<lion-button variant="secondary">Secondary</lion-button>`;
