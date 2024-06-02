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
        display: flex;
        align-items: center;
        height: auto;
        width: fit-content;
        gap: 13px;
      }

      button {
        margin: 0;
        aspect-ratio: 1;
        height: 24px;
        width: 24px;
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
        height: 8px;
        width: 8px;
      }
    `,
  ];

  static properties = {
    minimize: { type: Function },
    maximize: { type: Function },
    close: { type: Function },
  };

  constructor() {
    super();
    this.minimize = () => {};
    this.maximize = () => {};
    this.close = () => {};
  }

  render() {
    return html`
      <div class="container">
        <button class="minimize" @click=${this.minimize}>
          ${IconMinimizeWin}
        </button>
        <button
          class=${`maximize ${this.isMaximized ? "restore" : ""}`}
          @click=${this.maximize}
        >
          ${!this.isMaximized ? IconMaximizeWin : IconMaximizeRestoreWin}
        </button>
        <button class="close" @click=${this.close}>${IconCloseWin}</button>
      </div>
    `;
  }
}
