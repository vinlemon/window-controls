import { LitElement, css, html } from "lit";

export class WindowControls extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    macos-controls {
      position: absolute;
      top: var(--window-controls-macos-top, 20px);
      left: var(--window-controls-macos-left, 11.2px);
      transform: translateY(-50%);
    }
    gnome-controls {
      position: absolute;
      top: var(--window-controls-gnome-top, 20px);
      right: var(--window-controls-gnome-right, 8px);
      transform: translateY(-50%);
    }
    windows-controls {
      position: absolute;
      top: 0;
      right: 0;
      height: var(--window-controls-windows-height, 40px);
    }
  `;

  static properties = {
    os: { type: "macos" | "windows" | "linux" },
    inactive: { type: Boolean },
    minimize: { type: Boolean },
    maximize: { type: Boolean },
    close: { type: Boolean },
  };

  constructor() {
    super();
  }

  _getControlsTemplate() {
    switch (this.os) {
      case "macos":
        return html`<macos-controls
          .inactive=${this.inactive}
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></macos-controls>`;
      case "windows":
        return html`<windows-controls
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></windows-controls>`;
      case "linux":
        return html`<gnome-controls
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></gnome-controls>`;
      default:
        return null;
    }
  }

  render() {
    return this._getControlsTemplate();
  }
}
