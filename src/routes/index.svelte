<script>
  import { onMount } from 'svelte'

  onMount(() => {
  // Get relevant elements and collections
  const tabbed = document.querySelector('.tabbed');
  const tablist = tabbed.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = tabbed.querySelectorAll('[id^="section"]');

  // The tab switching function
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }

  // Add the tablist role to the first <ul> in the .tabbed container
  tablist.setAttribute('role', 'tablist');

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Initially activate the first tab and reveal the first tab panel
  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})
</script>

<div class="tabbed">
  <ul>
    <li>
      <a href="#section1">Section 1</a>
    </li>
    <li>
      <a href="#section2">Section 2</a>
    </li>
    <li>
       <a href="#section3">Section 3</a>
    </li>
     <li>
       <a href="#section4">Section 4</a>
    </li>
  </ul>
  <section id="section1">
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
    <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
  </section>
  <section id="section3">
    <h2>Section 3</h2>
    <p>Phasellus ac tristique orci. Nulla maximus <a href="">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.</p>
  </section>
  <section id="section4">
    <h2>Section 4</h2>
    <p>Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. </p>
  </section>
</div>

<style>
  :global(body) {
  max-width: 40rem;
  padding: 0 1rem;
  font-size: 125%;
  line-height: 1.5;
  margin: 1.5rem auto;
  font-family: Arial, sans-serif;
}

:global(*) {
  color: inherit;
  margin: 0;
}

:global([role="tablist"]) {
  padding: 0;
}

:global([role="tablist"] li), :global([role="tablist"] a) {
  display: inline-block;
}

:global([role="tablist"] a) {
  text-decoration: none;
  padding: 0.5rem 1em;
}

:global([role="tablist"] [aria-selected]) {
  border: 2px solid;
  background: #fff;
  border-bottom: 0;
  position: relative;
  top: 2px;
}

:global([role="tabpanel"]) {
  border: 2px solid;
  padding: 1.5rem;
}

:global([role="tabpanel"] * + *) {
  margin-top: 0.75rem;
}

:global(*:focus) {
  outline: none;
  box-shadow: inset 0 0 0 4px lightBlue;
}

@media (max-width: 550px) {
  :global([role="tablist"] li), :global([role="tablist"] a) {
    display: block;
    position: static;
  }

  :global([role="tablist"] a) {
    border: 2px solid #222 !important;
  }

  :global([role="tablist"] li + li a) {
    border-top: 0 !important;
  }

  :global([role="tablist"] [aria-selected]) {
    position: static;
  }

  :global([role="tablist"] [aria-selected]::after) {
    content: '\0020⬅';
  }

  :global([role="tabpanel"]) {
    border-top: 0;
  }
}
</style>
