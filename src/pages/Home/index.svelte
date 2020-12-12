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
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']}></div>
      <Container>
        <section class={styles['card-list']}>
          {#if process.env.YOUTUBE_LIVE_EMBED_CODE}
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
          {#if process.env.FACE_TO_FACE_WORKSHIP_REGISTER_URL}
            <BoxInfo
              title="Culto presencial"
              description="Preencha nosso formulário de inscrição e venha nos visitar"
              icon={{
                element: LocationIcon,
                alt: 'Um símbolo informando que aqui é o local, referência a onde está alguma coisa'
              }}
              link={{
                type: 'external',
                url: process.env.FACE_TO_FACE_WORKSHIP_REGISTER_URL,
                text: 'ver mais',
              }}
            />
          {/if}
          {#if process.env.INFORMATIVE_ACTIVE}
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
            description={process.env.CULT_SATURDAY_TIME}
          />
          <BoxInfo
            title="Domingo"
            description={process.env.CULT_SUNDAY_TIME}
          />
          <BoxInfo
            title="Quarta"
            description={process.env.CULT_WEDNESDAY_TIME}
          />
        </section>
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
