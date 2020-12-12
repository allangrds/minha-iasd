<script>
  import styles from './style.css'

  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
  import Header from '~/components/Header/index.svelte'
  import Content from '~/components/Content/index.svelte'
  import Wrapper from '~/components/Wrapper/index.svelte'
  import Main from '~/components/Main/index.svelte'
  import Container from '~/components/Container/index.svelte'
  import Footer from '~/components/Footer/index.svelte'
  import Title from '~/components/Title/index.svelte'
  import BoxInfo from '~/components/BoxInfo/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']} />
      <Container>
        <Title text="onde estamos" />
        <div class={styles['card-list']}>
          <BoxInfo
            title="Endereço"
            description={process.env.CHURCH_ADDRESS}
          />
        </div>
        <iframe
          title="localização da igreja"
          width="100%"
          height="450"
          frameborder="0"
          style="border: 0;"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:{process.env.CHURCH_GOOGLE_MAPS_PLACE_ID}&key={process.env.CHURCH_GOOGLE_MAPS_API_KEY}"
          allowfullscreen />
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
