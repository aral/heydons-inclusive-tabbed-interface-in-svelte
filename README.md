# Heydon’s Inclusive Tabbed Interface in Svelte

[Live demo](https://ar.al/demo/svelte-inclusive-tabbed-interface/)

This is a step-by-step study in converting [Heydon Pickering](https://heydonworks.com/)’s progressively-enhanced [inclusive tabbed interface example](https://inclusive-components.design/tabbed-interfaces/) (from his excellent [Inclusive Components](https://inclusive-components.design/)) to [Svelte](https://svelte.dev).

The project is built using [SvelteKit](https://kit.svelte.dev).

## Steps

Each state of the conversion is captured in a tag:

  - [Step 1](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/step1/src/routes/index.svelte): __Copy and paste.__ The code is formatted as a Svelte component. `:global()` attributes are added to the styles.

      Why are we doing everything in `onMount()`? For two reasons: one because we are using SSR and the code currently uses browser-only features. And two, because we want to maintain the progressive enhancement aspect. We don’t want, for example, to set ARIA roles that would be misleading or hide content on initial load on the server-side render if, say, the person has JavaScript disabled in their browser.

  - [Step 2](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/tree/step2/src/lib): __DOM away with you.__ The DOM structure is split up into separate Svelte components, named according to ARIA role (TabList, Tab, TabPanel, etc.). It is still progressively enhanced and the behaviour is still controlled by the DOM-based global script.

  - [Step 3](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte): __Context is everything.__ The code is split up and encapsulated within the various constituent components. To communicate, the components use the [component context](https://svelte.dev/docs#setContext) and [reactive stores](https://svelte.dev/docs#svelte_store).

      [The index](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/main/src/routes/index.svelte) now only contains the component declaration and content.

      The model is defined in the top-level [TabbedInterface component](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/main/src/lib/TabbedInterface/TabbedInterface.svelte) and added to the component’s context as a store.

      Normally, I would keep controller logic in parent components and have child components communicate with their parents using events. However, [you can’t currently do that if you use component composition with slots](https://github.com/sveltejs/sapper/issues/731) so most of the logic is implemented in the [Tab](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/main/src/lib/TabbedInterface/Tab.svelte) component.

      Basically, we’re using reactive dependency injection of sorts to create a two-way communication system. You could do this via other means (e.g., having child components register themselves with their parents, etc., but those are just workarounds for the same limitations in Svelte and would likely end up far more verbose to implement). Given we can’t use events, this is probably the simplest thing that could possibly work in this instance.

      (That said, I’m still very new to Svelte so if there’s a better way of doing this, I’m all ears. [Start a discussion.](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/discussions))

      _The component is now fully functional in the demo but not ready to be published as a standalone component yet. I’m waiting for [this issue](https://github.com/sveltejs/svelte/issues/6264) to be resolved with [this pull request](https://github.com/sveltejs/svelte/pull/6223) before I do that so we can have properly-scoped styles._

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

__License:__ [ISC](LICENSE)
