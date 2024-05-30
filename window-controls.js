import { GnomeControls } from "./src/GnomeControls.js";
import { MacOsControls } from "./src/MacOsControls.js";
import { WindowControls } from "./src/WindowControls.js";
import { WindowsControls } from "./src/WindowsControls.js";

window.customElements.define("window-controls", WindowControls);
window.customElements.define("windows-controls", WindowsControls);
window.customElements.define("macos-controls", MacOsControls);
window.customElements.define("gnome-controls", GnomeControls);
