# Notes for the tutorial

We would normally have used events here but events do not work with slots in Svelte, so something like the following will not work (although it would be nice if it did):

```html
<script>
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
    {id}
    href={`#section${index}`}
    tabindex={isActiveTab ? undefined : -1}
    ariaselected={isActiveTab}
    role={linkRole}
    bind:this={link}
    on:click|preventDefault={tabClick}
    on:keydown={keyHandler}
  >
    <slot></slot>
  </a>
</li>
```
