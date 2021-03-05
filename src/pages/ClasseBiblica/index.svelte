<script>
  import styles from './style.css'

  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
  import BoxInfo from '~/components/BoxInfo/index.svelte'
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
      <div class={styles['header-img']} />
      <Container>
        <Title text="classe bíblica" />
        <div class={styles['card-list']}>
          <BoxInfo
            title="Tema"
            description="Uma Nova Visão para um Novo Tempo"
          />
          <BoxInfo
            title="Onde"
            description="Rua Martim Affonso, 152 - Belenzinho, São Paulo"
          />
          <BoxInfo
            title="Quando"
            description="A partir de 10 de abril, 16h, todos os sábados em diante"
          />
          <BoxInfo
            title="Inscrição"
            description="Clique no botão abaixo para se inscrever em nossa classe bíblica"
            link={{
              type: 'external',
              url: 'https://docs.google.com/forms/d/e/1FAIpQLSdXSUvsFKFJdHkbTHInXXC_RDNfqkb1PG9slWI2HxgvDtysfQ/viewform',
              text: 'ver mais',
            }}
          />
        </div>
        <Title text="Anúncio" style={styles.title}/>
        <iframe
          title="Anúncio da classe bíblica"
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/b7N6AewXv-o"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen />
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
