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
  import BoxInfo from '~/components/BoxInfo/index.svelte'

  import InformativoIcon from '~/assets/images/home-informativo.svg'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']}></div>
      <Container>
        <section class={style.featured}>
          <BoxInfo
            title="Informativo"
            description="Veja a programação de nossa igreja para hoje"
            icon={InformativoIcon}
            iconDescription="Uma folha de papel com várias linhas escritas"
            linkText="ver mais"
            linkUrl="/boletim/cadastro"
          />
        </section>
        <Title text="Horário dos cultos" />
        <section class={style['cult-time']}>
          <BoxInfo
            title="Sábado"
            description="9:30"
          />
          <BoxInfo
            title="Domingo"
            description="18:00"
          />
          <BoxInfo
            title="Quarta"
            description="19:00"
          />
        </section>
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
