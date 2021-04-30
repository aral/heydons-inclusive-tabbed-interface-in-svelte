<script>
  import '$lib/index.css'
  import { TabbedInterface, TabList, Tab, TabPanel } from '$lib/TabbedInterface'
</script>

<TabbedInterface>
  <TabList>
    <Tab>Section 1</Tab>
    <Tab>Section 2</Tab>
    <Tab>Section 3</Tab>
    <Tab>Section 4</Tab>
  </TabList>

  <TabPanel>
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
  </TabPanel>

  <TabPanel>
    <h2>Section 2</h2>
    <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
  </TabPanel>

  <TabPanel>
    <h2>Section 3</h2>
    <p>Phasellus ac tristique orci. Nulla maximus <a href="">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.</p>
  </TabPanel>

  <TabPanel>
    <h2>Section 4</h2>
    <p>Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. </p>
  </TabPanel>
</TabbedInterface>
