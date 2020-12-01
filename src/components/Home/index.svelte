<script>
  import style from './style.css'

  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
  import Header from '~/components/Header/index.svelte'
  import Content from '~/components/Content/index.svelte'
  import Wrapper from '~/components/Wrapper/index.svelte'
  import Main from '~/components/Main/index.svelte'
  import Container from '~/components/Container/index.svelte'
  import Box from '~/components/Box/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']}></div>
      <Container>
        <h2 class={style['cult-time-title']}>
          Horário dos cultos
        </h2>
        <div class={style['cult-time']}>
          <Box style={style['cult-time-box']}>
            <span class={style['cult-time-day']}>
              Sábado
            </span>
            <span class={style['cult-time-description']}>
              <time>
                9:30
              </time>
            </span>
          </Box>
          <Box style={style['cult-time-box']}>
            <span class={style['cult-time-day']}>
              Domingo
            </span>
            <span class={style['cult-time-description']}>
              <time>
                18:00
              </time>
            </span>
          </Box>
          <Box style={style['cult-time-box']}>
            <span class={style['cult-time-day']}>
              Quarta
            </span>
            <span class={style['cult-time-description']}>
              <time>
                19:00
              </time>
            </span>
          </Box>
        </div>
      </Container>
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
