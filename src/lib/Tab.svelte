<script>
  import { onMount, getContext } from 'svelte'

  let tab
  let link
  let isActiveTab

  // Set initial roles (as rendered server-side) to empty strings,
  // which are inapplicable according to:
  // https://act-rules.github.io/rules/674b10#inapplicable-example-3
  let tabRole = ''
  let linkRole = undefined

  // Get the current tab index. We will be have the next one.
  const lastTabIndex = getContext('lastTabIndex')

  // Get the initial active tab index.
  const activeTabIndex = getContext('activeTabIndex')

  // Set our own tab index and ensure the id
  // is calculated and rendered on the server so
  // regular links work by default even if not
  // progressively-enhanced.
  let index = ++$lastTabIndex
  let id = `tab${index}`

  onMount(() => {
    // Progressively-enhance the roles.
    tabRole = 'presentation'
    linkRole = 'tab'
  })

  // Reactively set whether we’re the active tab or not.
  $: isActiveTab = index === $activeTabIndex

  function tabClick () {
    if (index !== $activeTabIndex) {
      $activeTabIndex = index
      tab.focus()
    }
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
  >
    <slot></slot>
  </a>
</li>
