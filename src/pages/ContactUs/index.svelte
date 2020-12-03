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
  import Input from '~/components/Input/index.svelte'
  import Textarea from '~/components/Textarea/index.svelte'
  import Button from '~/components/Button/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={style['header-img']} />
      <Container>
        <Title text="fale conosco" />
        <div class={style['contact-methods']}>
          <BoxInfo
            title="WhatsApp"
            description="(11) 2292-1229"
          />
          <BoxInfo
            title="E-mail"
            description="iasdbelem.comunicacao@gmail.com"
          />
        </div>
        <form
          class={style.form}
          action="https://formspree.io/f/xpzojeqg"
          method="POST"
        >
          <Input
            name="name"
            label="Seu nome"
            placeholder="digite seu nome"
            required={true}
          />
          <Input
            name="email"
            label="Seu e-mail"
            placeholder="digite seu e-mail"
            type="email"
          />
          <Input
            name="text"
            label="Seu telefone"
            placeholder="digite seu telefone"
            type="telephone"
          />
          <div class={style.comment}>
            <Textarea
              name="comment"
              label="Seu comentário"
              placeholder="digite seu comentário"
            />
          </div>
          <Button text="enviar mensagem" />
        </form>
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
