declare module '@vinlemon/window-controls' {
  import { LitElement } from 'lit';

  export class WindowControls extends LitElement {
    os: 'macos' | 'windows' | 'linux';
    inactive: boolean;
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }

  export class MacOsControls extends LitElement {
    inactive: boolean;
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }

  export class WindowsControls extends LitElement {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }

  export class GnomeControls extends LitElement {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }
}