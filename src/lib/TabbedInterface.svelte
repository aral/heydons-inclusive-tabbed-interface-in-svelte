<script>
  import { onMount, setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let selectedIndex = 0

  const lastTabIndex = writable(-1)
  const lastTabPanelIndex = writable(-1)
  const activeTabIndex = writable(selectedIndex)

  setContext('lastTabIndex', lastTabIndex)
  setContext('lastTabPanelIndex', lastTabPanelIndex)
  setContext('activeTabIndex', activeTabIndex)

  $: $activeTabIndex = selectedIndex

  onMount(() => {
  })

</script>

<div class='tabbed'>
  <slot></slot>
</div>
