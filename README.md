<picture>
  <img alt="Window Controls" src="https://github.com/vinlemon/window-controls/raw/main/assets/badge.png">
</picture>

[![Preview](https://img.shields.io/badge/Preview-window--controls.vinlemon.com-blue)](https://window-controls.vinlemon.com/)
[![](https://img.shields.io/npm/v/@vinlemon/window-controls.svg?logo=npm)](https://www.npmjs.com/package/@vinlemon/window-controls)

## Introduction

For a preview, visit: [window-controls.vinlemon.com](https://window-controls.vinlemon.com/)

Built using the [lit](https://lit.dev/) library, these components are available:

- `WindowControls`: Displays window controls for all operating systems.
- `MacOsControls`, `WindowsControls`, `GnomeControls`: Display window controls for their respective operating systems.

This web component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

This project takes inspiration from [tauri-controls](https://github.com/agmmnn/tauri-controls).

### Installation

```bash
npm i @vinlemon/window-controls
```

### Quick Usage

```html
<script type="module">
  import '@vinlemon/window-controls/window-controls.js';
</script>

<window-controls></window-controls>
```

### Example with Tauri 2

```js
import "@vinlemon/window-controls/window-controls.js";
import { Window } from "@tauri-apps/api/window";
import { platform } from "@tauri-apps/plugin-os";

const windowControls = document.createElement("window-controls");

const appWindow = new Window("main");

platform.then((currentPlatform) => {
	window.document.body.appendChild(windowControls);
	windowControls.os = currentPlatform;
	windowControls.minimize = appWindow.minimize;
	windowControls.maximize = appWindow.toggleMaximize;
	windowControls.close = appWindow.close;
});

appWindow.listen("tauri://focus", () => {
	if (windowControls) {
		windowControls.inactive = false;
	}
});

appWindow.listen("tauri://blur", () => {
	if (windowControls) {
		windowControls.inactive = true;
	}
});
```

## Options

### `WindowControls`:
- **os**: Specifies the operating system. Accepts `"macos"`, `"windows"`, or `"linux"`.
- **inactive**: Boolean to indicate if the window is inactive.
- **minimize**: Function to minimize the window.
- **maximize**: Function to maximize the window.
- **close**: Function to close the window.

### `MacOsControls`:
- **inactive**: Boolean to indicate if the window is inactive.
- **minimize**: Function to minimize the window.
- **maximize**: Function to maximize the window.
- **close**: Function to close the window.

### `WindowsControls`:
- **minimize**: Function to minimize the window.
- **maximize**: Function to maximize the window.
- **close**: Function to close the window.

### `GnomeControls`:
- **minimize**: Function to minimize the window.
- **maximize**: Function to maximize the window.
- **close**: Function to close the window.

## License

MIT
