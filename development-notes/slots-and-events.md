# Slots and events in Svelte (can’t currently be used together)

We would normally have used events in the [Tab component](https://github.com/aral/heydons-inclusive-tabbed-interface-in-svelte/blob/main/src/lib/TabbedInterface/Tab.svelte) and implemented controller logic in the top-level parent but [events do not work with slots in Svelte](https://github.com/sveltejs/sapper/issues/731), so something like the following will not work (although it would be nice if it did):

```html
<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  // …

  function keyHandler(event) {
    let preventDefault = true
    switch (event.which) {
      case 37 /* left arrow */:
        dispatch('focusLeft', index)
      break
      case 39 /* right arrow */:
        dispatch('focusRight', index)
      break
      case 40 /* down arrow */:
        dispatch('focusDown', index)
      break
      default:
        preventDefault = false
    }
    if (preventDefault) event.preventDefault()
  }
</script>

<li bind:this={tab} role={tabRole}>
  <a
    …
    on:keydown={keyHandler}
  >
    <slot></slot>
  </a>
</li>
```
