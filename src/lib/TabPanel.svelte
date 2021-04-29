<script>
  import { getContext, onMount } from 'svelte'
  const lastTabPanelIndex = getContext('lastTabPanelIndex')
  let id

  onMount(() => {
    id = `section${++$lastTabPanelIndex}`
  })
</script>

<section {id}>
  <slot></slot>
</section>
