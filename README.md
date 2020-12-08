# Minhas IASD

**Minha IASD** é o projeto para que você tenha o site de sua igreja de forma fácil.

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Executando o projeto](#executando-o-projeto)
- [Páginas do projeto](#páginas-do-projeto)
- [Parâmetros](#parâmetros)
- [Como contribuir](#como-contribuir)

## Requisitos

- Node 12.18.2
- NPM 6.14.5

## Instalação

Execute o comando abaixo no terminal:
```bash
npm install
```

## Executando o projeto

Execute o comando abaixo no terminal:
```bash
npm start
```

## Páginas do projeto

- Home
  - Links para culto ao vivo, culto presencial, informativo e dízimos e ofertas
  - Horário dos cultos
- Culto ao vivo
  - Transmissão via Youtube
- Onde estamos
  - Endereço e google maps
- Fale conosco
  - Whatsapp e telefone
  - Formulário ed contato
- Informativo pelo Whatsapp
  - Texto com número do whatsapp para recebê-lo
- Dízimos e ofertas
  - Informações bancárias da igreja

## Parâmetros
Parâmetros presentes no arquivo `src/config.json` para dinamizar informações do site.

- `youtube_live_embed_code`: Código para colocar o embed do Youtube no site.
- `youtube_channel`: ID do canal no Youtube.
- `facebook_page`: ID da página do Facebook.
- `instagram_profile`: ID do perfil do Instagram.
- `face_to_face_workship_register_url`: URL para cadastro do culto presencial.
- `church_address`: Endereço da igreja.
- `church_telephone`: Telefone de contato da igreja.
- `church_email`: E-mail de contato da igreja.
- `contact_form_formspree_id`: ID do serviço Formspree para receber os dados do formulário e enviar o email.
- `church_google_maps_place_id`: ID do Google Maps para mostrar o lugar.
- `church_google_maps_api_key`: API key do Google Maps.
- `church_name`: Nome da igreja.
- `tithe_bank_name`: Nome do banco(e código) para o depósito dos dízimos e ofertas.
- `tithe_bank_agency`: Agência para o depósito dos dízimos e ofertas.
- `tithe_bank_account`: Número da conta para o depósito dos dízimos e ofertas.
- `tithe_bank_document_number`: CNPJ da igreja para o depósito dos dízimos e ofertas.
- `tithe_email`: Email para enviar comprovante do dízimo ou oferta.
- `tithe_whatsapp`: Whatsapp para enviar comprovante do dízimo ou oferta.
- `informative_active`: Será mostrado a caixa para se cadastrar no informativo pelo Whatsapp? Se sim, `true`, se não, `false`.
- `informative_whatsapp`: Telefone do Whatsapp para enviar a mensagem e começar a receber o informativo.
- `cult_saturday_time`: Horário do culto de sábado.
- `cult_sunday_time`: Horário do culto de quarta.
- `cult_wednesday_time`: Horário do culto de domingo.

Para mudar a imagem que fica no meio das páginas, substitua a imagem `src/assets/images/home_background.jpeg`.


## Como contribuir

1. Crie um fork deste projeto.
1. Faça suas mudanças e crie os testes.
1. Crie um pull request com uma boa descrição do que está sendo feito.
