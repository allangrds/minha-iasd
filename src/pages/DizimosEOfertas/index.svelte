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

  import DadosBancarios from './DadosBancarios.svelte'
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
          <BoxInfo
            title="Dados bancários"
          >
            <p>
              <b>Banco</b>: Bradesco(237)
            </p>

            <p>
              <b>Agência</b>: 3396-0
            </p>

            <p>
              <b>Conta</b>: 838010-4
            </p>

            <p>
              <b>CNPJ</b>: 55.233.019/0012-22
            </p>
          </BoxInfo>
        </div>
        <Text>
          Quando você ofertar ou dizimar fazendo um depósito ou transferência, mande uma mensagem para <b>Edgard Jordão</b> identificando os valores.
        </Text>
        <Text>
          <b>E-mail</b>: jordaoiasd@gmail.com
        </Text>
        <Text>
          <b>Whatsapp</b>: https://wa.me/5511994746983
        </Text>
      </Container>
      <Footer />
    </Main>
  </Content>
  <RightSidebarLogo />
</Wrapper>
