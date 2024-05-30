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
      }

      @media screen and (prefers-color-scheme: dark) {
        :host {
          --color: white;
          --hover-background-color: rgba(255, 255, 255, 0.06);
          --active-background-color: rgba(255, 255, 255, 0.04);
        }
      }

      .container {
        display: flex;
        height: 2rem;
      }

      button {
        max-height: 2rem;
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

      button.close {
        max-height: 2rem;
        width: 46px;
        cursor: default;
        border-radius: 0;
        background-color: transparent;
        color: var(--color);
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
        <button class="maximize" @click=${this.__increment}>
          ${!this.isMaximized ? IconMaximizeWin : IconMaximizeRestoreWin}
        </button>
        <button class="close" @click=${this.__increment}>
          ${IconCloseWin}
        </button>
      </div>
    `;
  }
}
