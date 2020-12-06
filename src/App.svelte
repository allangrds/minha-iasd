<script>
  import { Router, Route } from 'svelte-routing'
  import Home from '~/pages/Home/index.svelte'
  import Live from './pages/Live/index.svelte'
  import WhereWeAre from './pages/WhereWeAre/index.svelte'
  import ContactUs from './pages/ContactUs/index.svelte'
  import BoletimWhatsapp from './pages/BoletimWhatsapp/index.svelte'
  import DizimosEOfertas from './pages/DizimosEOfertas/index.svelte'

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
  <Route path="/boletim/cadastro">
    <BoletimWhatsapp />
  </Route>
  <Route path="/dizimos-e-ofertas">
    <DizimosEOfertas />
  </Route>
 </Router>
