<script>
  import { Router, Route } from 'svelte-routing'
  import Home from '~/pages/Home/index.svelte'
  import Live from './pages/Live/index.svelte'
  import WhereWeAre from './pages/WhereWeAre/index.svelte'
  import ContactUs from './pages/ContactUs/index.svelte'

  export let url = ''
</script>


<Router url="{url}">
  <Route path="/">
    <Home />
  </Route>
  <Route path="/ao-vivo">
    <Live />
  </Route>
  <Route path="/onde-estamos">
    <WhereWeAre />
  </Route>
  <Route path="/fale-conosco">
    <ContactUs />
  </Route>
 </Router>
