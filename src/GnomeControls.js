import { LitElement, css, html } from "lit";
import {
  IconCloseWin,
  IconMaximizeRestoreWin,
  IconMaximizeWin,
  IconMinimizeWin,
} from "./shared/icons";
import { buttonStyles } from "./shared/styles";

export class GnomeControls extends LitElement {
  static styles = [
    buttonStyles,
    css`
      :host {
        --background-color: #dadada;
        --color: #3d3d3d;
        --hover-background-color: #d1d1d1;
        --active-background-color: #bfbfbf;
      }

      @media screen and (prefers-color-scheme: dark) {
        :host {
          --background-color: #373737;
          --color: white;
          --hover-background-color: #424242;
          --active-background-color: #565656;
        }
      }

      .container {
        margin-right: 10px;
        height: auto;
        display: flex;
        align-items: center;
        gap: 13px;
      }

      button {
        margin: 0;
        aspect-ratio: 1;
        height: 1.5rem;
        width: 1.5rem;
        cursor: default;
        border-radius: 50%;
        background-color: var(--background-color);
        padding: 0;
        color: var(--color);
      }

      button:hover {
        background-color: var(--hover-background-color);
      }

      button:active {
        background-color: var(--active-background-color);
      }

      button svg {
        height: 9px;
        width: 9px;
      }

      button.close svg,
      button.maximize:not(.restore) svg {
        height: 0.5rem;
        width: 0.5rem;
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
      <div class="container">
        <button class="minimize" @click=${this.__increment}>
          ${IconMinimizeWin}
        </button>
        <button
          class=${`maximize ${this.isMaximized ? "restore" : ""}`}
          @click=${this.__increment}
        >
          ${!this.isMaximized ? IconMaximizeWin : IconMaximizeRestoreWin}
        </button>
        <button class="close" @click=${this.__increment}>
          ${IconCloseWin}
        </button>
      </div>
    `;
  }
}
