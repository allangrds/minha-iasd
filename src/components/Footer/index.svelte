<script>
  import { Link } from 'svelte-routing'

  import styles from './style.css'

  import FacebookIcon from '~/assets/images/facebook.svg'
  import InstagramIcon from '~/assets/images/instagram.svg'
  import YoutubeIcon from '~/assets/images/youtube.svg'
  import IasdLogoIcon from '~/assets/images/iasd-logo-oficial.svg'
</script>

<footer class={styles.footer}>
  <div class={styles.container}>
    <section class={styles.church}>
      <img class={styles['iasd-logo']} src={IasdLogoIcon} alt="Igreja Adventista do Sétimo Dia" />
      <nav>
        <ul>
          <li class={styles.item}>
            <Link to="/">
              início
            </Link>
          </li>
          {#if process.env.YOUTUBE_LIVE_EMBED_CODE}
            <li class={styles.item}>
              <Link to="/ao-vivo">
                ao vivo
              </Link>
            </li>
          {/if}
          <li class={styles.item}>
            <Link to="/onde-estamos">
              onde estamos
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/fale-conosco">
              fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </section>
    <section class={styles['social-media']}>
      {#if process.env.FACEBOOK_PAGE}
        <a href="https://pt-br.facebook.com/{process.env.FACEBOOK_PAGE}/" target="_blank" rel="noreferrer" class={styles.link}>
          <img src={FacebookIcon} alt="Facebook">
        </a>
      {/if}

      {#if process.env.INSTAGRAM_PROFILE}
        <a href="https://www.instagram.com/{process.env.INSTAGRAM_PROFILE}/" target="_blank" rel="noreferrer" class={styles.link}>
          <img src={InstagramIcon} alt="Instagram">
        </a>
      {/if}

      {#if process.env.YOUTUBE_CHANNEL}
        <a href="https://www.youtube.com/channel/{process.env.YOUTUBE_CHANNEL}" target="_blank" rel="noreferrer" class={styles.link}>
          <img src={YoutubeIcon} alt="Youtube">
        </a>
      {/if}
    </section>
  </div>
</footer>
