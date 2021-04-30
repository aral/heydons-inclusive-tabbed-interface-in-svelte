<script>
  import { onMount } from 'svelte'

  let tabList

  onMount(() => {
    // We are doing this here instead of in the DOM
    // as the component is progressively-enhanced.
    tabList.setAttribute('role', 'tablist')
  })
</script>

<ul bind:this={tabList}>
  <slot></slot>
</ul>
