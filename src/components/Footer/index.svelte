<script>
  import { Link } from 'svelte-routing'

  import styles from './style.css'

  import FacebookIcon from '~/assets/images/facebook.svg'
  import InstagramIcon from '~/assets/images/instagram.svg'
  import YoutubeIcon from '~/assets/images/youtube.svg'
  import IasdLogoIcon from '~/assets/images/iasd-logo-oficial.svg'

  import config from '~/config'
</script>

<footer class={styles.footer}>
  <div class={styles.container}>
    <section class={styles.church}>
      <img class={styles['iasd-logo']} src={IasdLogoIcon} alt="Igreja Adventista do Sétimo Dia" />
      <nav>
        <ul>
          <li class={styles.item}>
            <Link to="/" class={styles.link}>
              início
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/ao-vivo" class={styles.link}>
              ao vivo
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/onde-estamos" class={styles.link}>
              onde estamos
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/fale-conosco" class={styles.link}>
              fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </section>
    <section class={styles['social-media']}>
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
