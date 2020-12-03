<script>
  import style from './style.css'

  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
  import Header from '~/components/Header/index.svelte'
  import Content from '~/components/Content/index.svelte'
  import Wrapper from '~/components/Wrapper/index.svelte'
  import Main from '~/components/Main/index.svelte'
  import Container from '~/components/Container/index.svelte'
  import Footer from '~/components/Footer/index.svelte'
  import Title from '~/components/Title/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']} />
      <Container>
        <Title text="onde estamos" />
        <iframe
          title="localização da igreja"
          width="100%"
          height="450"
          frameborder="0"
          style="border: 0;"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLYBZnStZzpQR75ZTAM1cIIo&key=AIzaSyCiZR35QJgK6Tsid94ZOo-TuKwDlH55Nds"
          allowfullscreen />
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
