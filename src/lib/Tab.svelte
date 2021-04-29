<script>
  import { onMount, getContext } from 'svelte'

  export let link
  let tab
  let tabLink
  let tabIndex

  // Set initial roles (as rendered server-side) to empty strings,
  // which are inapplicable according to:
  // https://act-rules.github.io/rules/674b10#inapplicable-example-3
  let tabRole = ''
  let tabLinkRole = ''

  // Get the current tab index. We will be have the next one.
  const lastTabIndex = getContext('lastTabIndex')

  onMount(() => {
    // Progressively-enhance the roles.
    tabRole = 'presentation'
    tabLinkRole = 'tab'

    // Set our own tab index.
    tabIndex = ++$lastTabIndex
  })

  function tabClick () {
    // TODO: This tab has been clicked.
  }
</script>

<li bind:this={tab} role={tabRole}>
  <a
    id={`tab${tabIndex}`}
    href={`#${link}`}
    bind:this={tabLink}
    on:click|preventDefault={tabClick}
    role={tabLinkRole}
  >
    <slot></slot>
  </a>
</li>
