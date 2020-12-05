<script>
  import { Link } from 'svelte-routing'

  import style from './style.css'

  import FacebookIcon from '~/assets/images/facebook.svg'
  import InstagramIcon from '~/assets/images/instagram.svg'
  import YoutubeIcon from '~/assets/images/youtube.svg'
  import IasdLogoIcon from '~/assets/images/iasd-logo-oficial.svg'

  import config from '~/config'
</script>

<footer class={style.footer}>
  <div class={style.container}>
    <section class={style.church}>
      <img class={style['iasd-logo']} src={IasdLogoIcon} alt="Igreja Adventista do Sétimo Dia" />
      <nav>
        <ul>
          <li class={style.item}>
            <Link to="/" class={style.link}>
              início
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/ao-vivo" class={style.link}>
              ao vivo
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/onde-estamos" class={style.link}>
              onde estamos
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/fale-conosco" class={style.link}>
              fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </section>
    <section class={style['social-media']}>
      <a href="https://pt-br.facebook.com/{config.facebook_page}/" target="_blank" rel="noreferrer">
        <img src={FacebookIcon} alt="Facebook">
      </a>
      <a href="https://www.instagram.com/{config.instagram_profile}/" target="_blank" rel="noreferrer">
        <img src={InstagramIcon} alt="Instagram">
      </a>
    <a href="https://www.youtube.com/channel/{config.youtube_channel}" target="_blank" rel="noreferrer">
        <img src={YoutubeIcon} alt="Youtube">
      </a>
    </section>
  </div>
</footer>
