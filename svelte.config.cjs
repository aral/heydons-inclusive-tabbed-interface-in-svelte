const static = require('@sveltejs/adapter-static')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static(),

		// This is where the demo is deployed to on https://ar.al
		paths: {
      base: '/demo/svelte-inclusive-tabbed-interface/'
    }
	}
}
