<script>
  import { getContext, onMount } from 'svelte'
  const lastTabPanelIndex = getContext('lastTabPanelIndex')
  const activeTabIndex = getContext('activeTabIndex')
  const focusedTabPanelIndex = getContext('focusedTabPanelIndex')

  let section

  // The id is rendered on the server.
  let index = ++$lastTabPanelIndex
  let id = `section${index}`

  // We keep track of the mounted state so that the full
  // DOM is rendered on the server-side and progressively-enhanced
  // only if JavaScript is available on the client.
  let mounted = false

  onMount(() => {
    mounted = true
  })

  $: if ($focusedTabPanelIndex === index) {
    section.focus()
    console.log('focus is on tab panel', index)
  }
</script>

<section {id} hidden={mounted && ($activeTabIndex !== index)} bind:this={section}>
  <slot></slot>
</section>
