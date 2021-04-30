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

<style>
  [role="tablist"] {
    padding: 0;
  }

  [role="tablist"] li, [role="tablist"] a {
    display: inline-block;
  }

  [role="tablist"] a {
    text-decoration: none;
    padding: 0.5rem 1em;
  }

  [role="tablist"] [aria-selected] {
    border: 2px solid;
    background: #fff;
    border-bottom: 0;
    position: relative;
    top: 2px;
  }
</style>
