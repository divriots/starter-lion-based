import { css } from "@lion/core";
import { LionButton } from "@lion/button";
import { color } from "~/colors";

const customStyle = css`
  :host {
    background: ${color.primary};
    color: white;
  }

  :host([variant="secondary"]) {
    background: ${color.secondary};
  }
`;

export class Button extends LionButton {
  static get styles() {
    return [LionButton.getStyles(), customStyle];
  }
}
