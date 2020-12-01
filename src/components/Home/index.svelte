<script>
  import style from './style.css'

  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
  import Header from '~/components/Header/index.svelte'
  import Content from '~/components/Content/index.svelte'
  import Wrapper from '~/components/Wrapper/index.svelte'
  import Main from '~/components/Main/index.svelte'
  import Container from '~/components/Container/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']}></div>
      <Container>
        <p>asdasdasdasdasdasdsa</p>
      </Container>
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
