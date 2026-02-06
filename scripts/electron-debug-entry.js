#!/usr/bin/env node
/**
 * Electron debug entrypoint:
 * loads debug hook, then starts the normal main bundle.
 */
require("./debug-main-hook");
require("../src/.vite/build/main.js");
