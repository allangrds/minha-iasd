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

  import InformativoIcon from '~/assets/images/home-informativo.svg'
  import PrayIcon from '~/assets/images/home-pray.svg'
  import LocationIcon from '~/assets/images/home-location.svg'
  import LiveIcon from '~/assets/images/home-live.svg'

  import config from '~/config'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']}></div>
      <Container>
        <section class={styles['card-list']}>
          {#if config.youtube_live_embed_code}
            <BoxInfo
              title="Culto ao vivo"
              description="Veja nosso culto direto da sua casa"
              icon={{
                element: LiveIcon,
                alt: 'Um antena com sinal e uma placa escrito "live"'
              }}
              link={{
                type: 'internal',
                url: '/ao-vivo',
                text: 'ver mais',
              }}
            />
          {/if}
          {#if config.face_to_face_workship_register_url}
            <BoxInfo
              title="Culto presencial"
              description="Preencha nosso formulário de inscrição e venha nos visitar"
              icon={{
                element: LocationIcon,
                alt: 'Um símbolo informando que aqui é o local, referência a onde está alguma coisa'
              }}
              link={{
                type: 'external',
                url: config.face_to_face_workship_register_url,
                text: 'ver mais',
              }}
            />
          {/if}
          {#if config.informative_active}
            <BoxInfo
              title="Informativo"
              description="Fique por dentro do que está acontecendo na igreja"
              icon={{
                element: InformativoIcon,
                alt: 'Uma folha de papel com várias linhas escritas'
              }}
              link={{
                type: 'internal',
                url: '/boletim/cadastro',
                text: 'ver mais',
              }}
            />
          {/if}
          <BoxInfo
            title="Dízimos e ofertas"
            description="Saiba como devolver seu dízimo e oferta"
            icon={{
              element: PrayIcon,
              alt: 'Duas mãos abertas, tendo no meio uma cruz'
            }}
            link={{
              type: 'internal',
              url: '/dizimos-e-ofertas',
              text: 'ver mais',
            }}
          />
        </section>
        <Title text="Horário dos cultos" style={styles.title}/>
        <section class={styles['card-list']}>
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
