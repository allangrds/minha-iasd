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
  import Input from '~/components/Input/index.svelte'
  import Textarea from '~/components/Textarea/index.svelte'
  import Button from '~/components/Button/index.svelte'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']} />
      <Container>
        <Title text="fale conosco" />
        <div class={styles['card-list']}>
          <BoxInfo
            title="WhatsApp"
            description={process.env.CHURCH_TELEPHONE}
          />
          {#if process.env.CHURCH_EMAIL}
            <BoxInfo
              title="E-mail"
              description={process.env.CHURCH_EMAIL}
            />
          {/if}
        </div>
        <form
          class={styles.form}
          action="https://formspree.io/f/{process.env.CONTACT_FORM_FORMSPREE_ID}"
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
          <div class={styles.comment}>
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
