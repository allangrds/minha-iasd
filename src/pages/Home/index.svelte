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
  import PrayIcon from '~/assets/images/home-pray.svg'
  import LocationIcon from '~/assets/images/home-location.svg'
  import LiveIcon from '~/assets/images/home-live.svg'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']}></div>
      <Container>
        <section class={style.featured}>
          <BoxInfo
            title="Culto ao vivo"
            description="Veja nosso culto direto de sua casa"
            icon={LiveIcon}
            iconDescription="Uma folha de papel com várias linhas escritas"
            linkText="ver mais"
            linkUrl="/ao-vivo"
          />
          <BoxInfo
            title="Culto presencial"
            description="Preencha nosso formulário de inscrição e venha até nós"
            icon={LocationIcon}
            iconDescription="Uma folha de papel com várias linhas escritas"
            linkText="ver mais"
            linkUrl="/ao-vivo"
          />
          <BoxInfo
            title="Informativo"
            description="A programação de nossa igreja para hoje"
            icon={InformativoIcon}
            iconDescription="Uma folha de papel com várias linhas escritas"
            linkText="ver mais"
            linkUrl="/boletim/cadastro"
          />
          <BoxInfo
            title="Dízimos e ofertas"
            description="Saiba como devolver seu dízimo e oferta"
            icon={PrayIcon}
            iconDescription="Uma folha de papel com várias linhas escritas"
            linkText="ver mais"
            linkUrl="/dizimos-e-ofertas"
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
