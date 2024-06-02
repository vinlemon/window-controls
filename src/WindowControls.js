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
    controls: { type: Object },
  };

  constructor() {
    super();
  }

  updated(changedProperties) {
    if (changedProperties.has("controls")) {
      this._propagateControls();
    }
  }

  _propagateControls() {
    const child = this.shadowRoot.querySelector(`${this.os}-controls`);
    if (child) {
      Object.assign(child, this.controls);
    }
  }

  _getControlsTemplate() {
    switch (this.os) {
      case "macos":
        return html`<macos-controls></macos-controls>`;
      case "windows":
        return html`<windows-controls></windows-controls>`;
      case "linux":
        return html`<gnome-controls></gnome-controls>`;
      default:
        return null;
    }
  }

  render() {
    return this._getControlsTemplate();
  }
}
