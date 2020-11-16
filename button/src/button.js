import { css } from "@lion/core";
import { LionButton } from "@lion/button";

import {
  backgroundPrimaryBase,
  backgroundSecondaryBase,
  backgroundCriticalBase,
} from "./button-vars";
import { borderRadiusNormal } from "~/radii";

const customStyle = css`
  :host {
    background: ${backgroundPrimaryBase};
    color: white;
    border-radius: ${borderRadiusNormal};
  }

  :host([type="secondary"]) {
    background: ${backgroundSecondaryBase};
    color: #252A31;
  }

  :host([type="critical"]) {
    background: ${backgroundCriticalBase};
  }
`;

class OrbitButton extends LionButton {
  static get styles() {
    return [LionButton.getStyles(), customStyle];
  }
}

export { OrbitButton };
