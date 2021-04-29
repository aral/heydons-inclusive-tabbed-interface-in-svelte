# Heydon’s Accessible Tabs in Svelte

This is a step-by-step study in converting [Heydon Pickering](https://heydonworks.com/)’s [accessible tabbed interface example](https://inclusive-components.design/tabbed-interfaces/) (from his excellent [Inclusive Components](https://inclusive-components.design/)) to [Svelte](https://svelte.dev).

The project is built using [SvelteKit](https://kit.svelte.dev).

## Steps

Each state of the conversion is captured in a tag:

  - [Step 1](https://github.com/aral/heydons-accessible-tabs-in-svelte/tree/step1): __Copy and paste.__ The code is formatted as a Svelte component. `:global()` attributes are added to the styles.

  - [Step 2](https://github.com/aral/heydons-accessible-tabs-in-svelte/tree/step2): __DOM away with you.__ The DOM structure is split up into separate Svelte components, named according to ARIA role (TabList, Tab, TabPanel, etc.). It is still progressively enhanced and the behaviour is still controlled by the DOM-based global script.

  - Step 3 (WIP): __Context is everything.__ The code is split up and encapsulated within the various constituent components. To communicate, the components use the context and reactive stores.

## Developing

Once you’ve installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
