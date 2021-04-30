<script>
  import { onMount, setContext } from 'svelte'
  import { writable } from 'svelte/store'

  const lastTabIndex = writable(-1)
  const lastTabPanelIndex = writable(-1)
  const activeTabIndex = writable(0)
  const focusedTabPanelIndex = writable(-1)

  setContext('lastTabIndex', lastTabIndex)
  setContext('lastTabPanelIndex', lastTabPanelIndex)
  setContext('activeTabIndex', activeTabIndex)
  setContext('focusedTabPanelIndex', focusedTabPanelIndex)
</script>

<div>
  <slot></slot>
</div>

<style>
  :global(*) {
    color: inherit;
    margin: 0;
  }

  :global(*:focus) {
    outline: none;
    box-shadow: inset 0 0 0 4px lightBlue;
  }
</style>
