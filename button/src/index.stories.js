import { html } from "lit-html";
import "./index.js";

export default {
  parameters: {
    layout: "centered",
  },
};

export const basic_buttons = () => html`<orbit-button>Primary</orbit-button>
  <orbit-button type="secondary">Secondary</orbit-button>
  <orbit-button type="critical">Critical</orbit-button> `;

export const buttons_with_icons = () => html`TODO`;
