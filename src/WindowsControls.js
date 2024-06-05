import { LitElement, css, html } from "lit";
import {
  IconCloseWin,
  IconMaximizeRestoreWin,
  IconMaximizeWin,
  IconMinimizeWin,
} from "./shared/icons";
import { buttonStyles } from "./shared/styles";

export class WindowsControls extends LitElement {
  static styles = [
    buttonStyles,
    css`
      :host {
        --background-color: rgba(0, 0, 0, 0.9);
        --color: rgba(0, 0, 0, 0.9);
        --hover-background-color: rgba(0, 0, 0, 0.05);
        --active-background-color: rgba(0, 0, 0, 0.03);
        --close-hover-background-color: #c42b1c;
        --close-hover-color: white;
        --close-active-background-color: rgba(196, 43, 28, 0.9);
        display: flex;
        height: 32px;
      }

      @media screen and (prefers-color-scheme: dark) {
        :host {
          --color: white;
          --hover-background-color: rgba(255, 255, 255, 0.06);
          --active-background-color: rgba(255, 255, 255, 0.04);
        }
      }

      button {
        width: 46px;
        cursor: default;
        border-radius: 0;
        background-color: transparent;
        color: var(--color);
      }

      button:hover {
        background-color: var(--hover-background-color);
      }

      button:active {
        background-color: var(--active-background-color);
      }

      button.maximize:active {
        background-color: var(--active-background-color);
      }

      button.close:hover {
        background-color: var(--close-hover-background-color);
        color: var(--close-hover-color);
      }

      button.close:active {
        background-color: var(--close-active-background-color);
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
      <button class="minimize" @click=${this.minimize}>
        ${IconMinimizeWin}
      </button>
      <button class="maximize" @click=${this.maximize}>
        ${!this.isMaximized ? IconMaximizeWin : IconMaximizeRestoreWin}
      </button>
      <button class="close" @click=${this.close}>${IconCloseWin}</button>
    `;
  }
}
