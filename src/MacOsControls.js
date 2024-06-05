import { LitElement, css, html } from "lit";
import { IconCloseMac, IconFullMac, IconMinMac } from "./shared/icons";
import { buttonStyles } from "./shared/styles";

export class MacOsControls extends LitElement {
  static styles = [
    buttonStyles,
    css`
      :host {
        --background-color: #ffffff;
        --color: black;
        --hover-background-color: rgba(0, 0, 0, 0.12);
        --active-background-color: rgba(0, 0, 0, 0.6);
        --background-inactive: #dddddd24;
        --close-bg: #ff544d;
        --close-active-bg: #bf403a;
        --minimize-bg: #ffbd2e;
        --minimize-active-bg: #bf9122;
        --maximize-bg: #28c93f;
        --maximize-active-bg: #1e9930;
        display: flex;
        width: fit-content;
        gap: 8px;
        padding: 1.6px;
        color: var(--color);
      }

      :host([inactive]) button {
        background-color: var(--background-inactive) !important;
      }

      button * {
        display: none;
      }

      :host(:hover) button:not([disabled]) * {
        display: block;
      }

      button {
        aspect-ratio: 1;
        height: 12px;
        width: 12px;
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid var(--hover-background-color);
        text-align: center;
        color: var(--active-background-color);
      }

      button:hover {
        color: var(--active-background-color);
      }

      button:active {
        color: var(--active-background-color);
      }

      button.close {
        background-color: var(--close-bg);
      }

      button.close:hover {
        background-color: var(--close-bg);
      }

      button.close:active {
        background-color: var(--close-active-bg);
      }

      button.minimize {
        background-color: var(--minimize-bg);
      }

      button.minimize:hover {
        background-color: var(--minimize-bg);
      }

      button.minimize:active {
        background-color: var(--minimize-active-bg);
      }

      button.maximize {
        background-color: var(--maximize-bg);
      }

      button.maximize:hover {
        background-color: var(--maximize-bg);
      }

      button.maximize:active {
        background-color: var(--maximize-active-bg);
      }
    `,
  ];

  static properties = {
    inactive: { type: Boolean, reflect: true },
    minimize: { type: Function },
    maximize: { type: Function },
    close: { type: Function },
  };

  constructor() {
    super();
    this.inactive = false;
    this.minimize = () => {};
    this.maximize = () => {};
    this.close = () => {};
  }

  render() {
    return html`
      <button class="close" @click=${this.close}>${IconCloseMac}</button>
      <button class="minimize" @click=${this.minimize}>${IconMinMac}</button>
      <button class="maximize" @click=${this.maximize}>${IconFullMac}</button>
    `;
  }
}
