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

  import config from '~/config'
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
            description={config.church_telephone}
          />
          {#if config.church_email}
            <BoxInfo
              title="E-mail"
              description={config.church_email}
            />
          {/if}
        </div>
        <form
          class={styles.form}
          action="https://formspree.io/f/{config.contact_form_formspree_id}"
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
