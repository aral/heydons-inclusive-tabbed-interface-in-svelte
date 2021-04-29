<script>
  import { onMount, setContext } from 'svelte'
  import { writable } from 'svelte/store'

  const lastTabIndex = writable(-1)
  const lastTabPanelIndex = writable(-1)

  setContext('lastTabIndex', lastTabIndex)
  setContext('lastTabPanelIndex', lastTabPanelIndex)

  onMount(() => {
  })

</script>

<div class='tabbed'>
  <slot></slot>
</div>
