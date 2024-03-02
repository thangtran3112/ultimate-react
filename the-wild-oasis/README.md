# Eslint Setup

`npm install --save-dev vite-plugin-eslint eslint-config-react-app eslint`

Adding `eslint()` plugin to vite.config.js

```
export default defineConfig({
  plugins: [react(), eslint()],
});
```

# VsCode extensions recommendation

- `vscode-styled-components` for highlighting css syntax
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- Add the following lines to .vscode/settings.json

```
  { "typescript.suggest.paths": false }
  { "javascript.suggest.paths": false }
```

# Vite Env needs to be started with VITE

`import.meta.env.VITE_SUPABASE_KEY`

https://github.com/vitejs/vite/discussions/15064
https://vitejs.dev/guide/env-and-mode

# Installing react query and react-query-devtools

`npm i --save tanstack/react-query@5`
`npm i --save tanstack/react-query-devtools@5`

# Installing Toast (Notification)

- https://react-hot-toast.com/
- `npm install react-hot-toast`
