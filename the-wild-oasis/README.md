# VsCode extensions recommendation

- `vscode-styled-components` for highlighting css syntax
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

# Vite Env needs to be started with VITE

`import.meta.env.VITE_SUPABASE_KEY`

https://github.com/vitejs/vite/discussions/15064
https://vitejs.dev/guide/env-and-mode

# Installing react query and react-query-devtools

- `npm i --save tanstack/react-query@5`
- `npm i --save tanstack/react-query-devtools@5`
- Object and Array as query Key will work because Query Keys are hashed. [See more](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys)
- For Array query key, the order of the array matters. But order of Object properties are not matter.

# Installing Toast (Notification)

- https://react-hot-toast.com/
- `npm install react-hot-toast`

# Installing React Hook Form

- React Hook Form help converting form states into data without setting states for each input elements
- It also helps validation of input easier.
- `npm i react-hook-form@7`

# Supabase docs:

- [Insert and other queries](https://supabase.com/docs/reference/javascript/insert)
- [Uploading a file to bucket](https://supabase.com/docs/reference/javascript/storage-from-upload)

# - Compound component pattern, placing component outside of React Component tree

- [createPortal](https://react.dev/reference/react-dom/createPortal)
- [cloneElement](https://react.dev/reference/react/cloneElement)

# Handle Clicking outside of component

- See useClickOutside() hook implementation
- Handle click outside relies on useRef() and [Event Capturing Phase](https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/)
