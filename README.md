# Heydon’s Accessible Tabs in Svelte

This is a step-by-step study in converting [Heydon Pickering](https://heydonworks.com/)’s [accessible tabbed interface example](https://inclusive-components.design/tabbed-interfaces/) (from his excellent [Inclusive Components](https://inclusive-components.design/)) to [Svelte](https://svelte.dev).

The project is built using [SvelteKit](https://kit.svelte.dev).

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
