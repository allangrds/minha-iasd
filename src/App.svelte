<script>
  import { Router, Route } from 'svelte-routing'
  import Home from '~/pages/Home/index.svelte'
  // import Live from './pages/Live/index.svelte'

  export let url = ''
</script>


<Router url="{url}">
  <Route path="/">
    <Home />
  </Route>
  <!-- <Route path="/ao-vivo">
    <Live />
  </Route> -->
 </Router>
