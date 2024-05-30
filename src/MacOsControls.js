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
      }

      .container {
        display: flex;
        gap: 0.5rem;
        padding: 0 0.75rem;
        color: var(--color);
      }

      .container.inactive button {
        background-color: var(--background-inactive) !important;
      }

      .container button * {
        display: none;
      }

      .container:hover button:not([disabled]) * {
        display: block;
      }

      button {
        aspect-ratio: 1;
        height: 0.75rem;
        width: 0.75rem;
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
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = "Hey there";
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class=${`container ${this.isInactive ? "inactive" : ""}`}>
        <button
          class="minimize"
          disabled=${this.isInactive}
          @click=${this.__increment}
        >
          ${IconCloseMac}
        </button>
        <button
          class="maximize"
          disabled=${this.isInactive}
          @click=${this.__increment}
        >
          ${IconMinMac}
        </button>
        <button
          class="close"
          disabled=${this.isInactive}
          @click=${this.__increment}
        >
          ${IconFullMac}
        </button>
      </div>
    `;
  }
}
