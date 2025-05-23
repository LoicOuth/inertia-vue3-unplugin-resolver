# @louth/inertia-vue3-unplugin-resolver

[![npm version](https://img.shields.io/npm/v/@louth/inertia-vue3-unplugin-resolver.svg)](https://www.npmjs.com/package/@louth/inertia-vue3-unplugin-resolver)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Custom resolver for Vue 3 projects using Inertia.js, enabling automatic imports of Inertia components and composables.

## Features

- Auto-import Inertia.js components (`<Link>`, `<Head>`, etc.)
- Auto-import Inertia.js composables (`useForm`, `usePage`, etc.)
- Zero configuration needed for supported imports
- Works with [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) and [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

## Installation

```bash
# npm
npm install @louth/inertia-vue3-unplugin-resolver --save-dev

# yarn
yarn add @louth/inertia-vue3-unplugin-resolver -D

# pnpm
pnpm add @louth/inertia-vue3-unplugin-resolver -D
```

## Usage

### Setup with Vite

```js
// vite.config.js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import {
  InertiaVueComponentResolver,
  InertiaVueResolver,
} from "@louth/inertia-vue3-unplugin-resolver"

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [InertiaVueComponentResolver()],
    }),
    AutoImport({
      resolvers: [InertiaVueResolver()],
    }),
  ],
})
```

### Setup with Webpack

```js
// webpack.config.js
const {
  InertiaVueComponentResolver,
  InertiaVueResolver,
} = require("@louth/inertia-vue3-unplugin-resolver")
const Components = require("unplugin-vue-components/webpack")
const AutoImport = require("unplugin-auto-import/webpack")

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [InertiaVueComponentResolver()],
    }),
    AutoImport({
      resolvers: [InertiaVueResolver()],
    }),
  ],
}
```

## Supported Imports

### Components (`InertiaVueComponentResolver`)

The following Inertia.js components can be auto-imported:

- `<Deferred>`
- `<Head>`
- `<Link>`
- `<WhenVisible>`

### Composables (`InertiaVueResolver`)

The following Inertia.js composables can be auto-imported:

- `useForm`
- `usePage`
- `useRemember`
- `usePrefetch`
- `router`

## Requirements

- Vue 3
- Inertia.js v2 (`@inertiajs/vue3`)

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
