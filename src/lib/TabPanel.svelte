<script>
  import { getContext, onMount } from 'svelte'
  const lastTabPanelIndex = getContext('lastTabPanelIndex')
  const activeTabIndex = getContext('activeTabIndex')

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
</script>

<section {id} hidden={mounted && ($activeTabIndex !== index)}>
  <slot></slot>
</section>
