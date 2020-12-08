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
  import BoxInfo from '~/components/BoxInfo/index.svelte'

  import config from '~/config'
</script>

<Wrapper>
  <Content>
    <Header />
    <Main>
      <div class={styles['header-img']} />
      <Container>
        <Title text="Dízimos e ofertas" />
        <div class={styles['card-list']}>
          <BoxInfo
            title="Por aplicativo"
            description="Você pode dizimar e ofertar utilizando o aplicativo oficial da nossa igreja, o 7me."
            link={{
              type: 'external',
              text: 'ver mais',
              url: 'https://apps.adventistas.org/pt/7me/desk/'
            }}
          />

          {#if config.tithe_bank_name}
            <BoxInfo
              title="Dados bancários"
            >
              <p>
                <b>Banco</b>: {config.tithe_bank_name}
              </p>

              <p>
                <b>Agência</b>: {config.tithe_bank_agency}
              </p>

              <p>
                <b>Conta</b>: {config.tithe_bank_account}
              </p>

              <p>
                <b>CNPJ</b>: {config.tithe_bank_document_number}
              </p>
            </BoxInfo>
          {/if}
        </div>
        {#if config.tithe_email || config.tithe_whatsapp}
          <Text>
            Quando você ofertar ou dizimar fazendo um depósito ou transferência, mande uma mensagem para <b>Edgard Jordão</b> identificando os valores.
          </Text>
        {/if}
        {#if config.tithe_email}
          <Text>
            <b>E-mail</b>: jordaoiasd@gmail.com
          </Text>
        {/if}
        {#if config.tithe_whatsapp}
          <Text>
            <b>Whatsapp</b>: {config.tithe_whatsapp}
          </Text>
        {/if}
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
