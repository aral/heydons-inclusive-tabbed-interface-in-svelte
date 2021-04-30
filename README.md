# Heydon’s Inclusive Tabbed Interface in Svelte

This is a step-by-step study in converting [Heydon Pickering](https://heydonworks.com/)’s [inclusive tabbed interface example](https://inclusive-components.design/tabbed-interfaces/) (from his excellent [Inclusive Components](https://inclusive-components.design/)) to [Svelte](https://svelte.dev).

The project is built using [SvelteKit](https://kit.svelte.dev).

## Steps

Each state of the conversion is captured in a tag:

  - [Step 1](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/step1/src/routes/index.svelte): __Copy and paste.__ The code is formatted as a Svelte component. `:global()` attributes are added to the styles.

      Why are we doing everything in `onMount()`? For two reasons: one because we are using SSR and the code currently uses browser-only features. And two, because we want to maintain the progressive enhancement aspect. We don’t want, for example, to set ARIA roles that would be misleading or hide content on initial load on the server-side render if, say, the person has JavaScript disabled in their browser.

  - [Step 2](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/tree/step2/src/lib): __DOM away with you.__ The DOM structure is split up into separate Svelte components, named according to ARIA role (TabList, Tab, TabPanel, etc.). It is still progressively enhanced and the behaviour is still controlled by the DOM-based global script.

  - [Step 3](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte): __Context is everything.__ The code is split up and encapsulated within the various constituent components. To communicate, the components use the context and reactive stores.

      The component is now fully functional in the demo but not ready to be published as a standalone component yet. I’m waiting for [this issue](https://github.com/sveltejs/svelte/issues/6264) to be resolved with [this pull request](https://github.com/sveltejs/svelte/pull/6223) before I do that so we can have properly-scoped styles.

## To run the demo

1. Install the dependencies

    ```shell
    npm install
    ```

2. Run SvelteKit

    ```shell
    npm run dev
    ```

3. Hit _http://localhost:3000_ in your browser.

## Copyright and License

  - __Original code:__ Copyright ⓒ 2017-present Heydon Pickering
  - __Svelte port:__ Copyright ⓒ 2021-present Aral Balkan

__License:__ TBA (probably ISC… just chatting to Heydon about it now).
