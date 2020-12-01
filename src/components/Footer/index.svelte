<script>
  import style from './style.css'

  import FacebookIcon from '~/assets/images/facebook.svg'
  import InstagramIcon from '~/assets/images/instagram.svg'
  import YoutubeIcon from '~/assets/images/youtube.svg'
  import IasdLogoIcon from '~/assets/images/iasd-logo-oficial.svg'
</script>

<footer class={style.footer}>
  <div class={style.container}>
    <section class={style.asd}>
      <img class={style['iasd-logo']} src={IasdLogoIcon} alt="Igreja Adventista do Sétimo Dia" />
      <nav>
        <ul>
          <li class={style.item}>
            <a href="#" class={style.link}>
              início
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              ao vivo
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              onde estamos
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              fale conosco
            </a>
          </li>
        </ul>
      </nav>
    </section>
    <section class={style['social-media']}>
      <a href="https://pt-br.facebook.com/IASDBelemSP/" target="_blank">
        <img src={FacebookIcon} alt="Facebook">
      </a>
      <a href="https://www.instagram.com/iasdbelemsp/" target="_blank">
        <img src={InstagramIcon} alt="Instagram">
      </a>
      <a href="https://www.youtube.com/channel/UC0RqFUeh2gCIkpNCkyPSBig" target="_blank">
        <img src={YoutubeIcon} alt="Youtube">
      </a>
    </section>
  </div>
</footer>
