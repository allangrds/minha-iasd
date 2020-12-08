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
  import Text from '~/components/Text/index.svelte'

  import config from '~/config'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']} />
      <Container>
        <Title text="Boletim pelo Whatsapp" />
        <Text>
          Fique <b>informado</b> de tudo que acontece em <b>nossa igreja</b>!
        </Text>
        <Text>
          <b>Envie</b> um "oi" pelo seu <b>Whatsapp</b> para o número <b>{config.informative_whatsapp}</b>, e comece a receber nosso boletim.
        </Text>
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
