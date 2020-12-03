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
        <Title text="ao vivo" />
        <iframe
          title="Transmissão ao vivo da igreja"
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/fZ6TY0qVakc"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen />
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
