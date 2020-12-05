<script>
  import { Link } from 'svelte-routing'

  import styles from './style.css'
</script>


<header class={styles.header}>
  <div class={styles.container}>
    <div>
      <h1 class={styles['church-name']}>
        Igreja Adventista do Sétimo Dia
      </h1>
      <h2 class={styles['church-name-sub']}>
        Belém
      </h2>
    </div>
    <div class={styles['mobile-navigation']}>
      <div class={styles.menu}>
        <label
          class={styles.icon}
          for="toggle"
        >
          &#9776;
        </label>
        <input
          class={styles.input}
          type="checkbox"
          id="toggle"
        />
        <span class={styles.text}>
          Menu
        </span>
        <nav class={styles.navigation}>
          <ul class={styles['institutional-list']}>
            <li class={styles.item}>
              <a
                class={styles.link}
                href="https://www.adventistas.org/pt/institucional/"
                target="_blank"
                rel="noreferrer"
              >
                institucional
              </a>
            </li>
            <li class={styles.item}>
              <a
                class={styles.link}
                href="https://noticias.adventistas.org/pt/"
                target="_blank"
                rel="noreferrer"
              >
                notícias
              </a>
            </li>
            <li class={styles.item}>
              <a
                class={styles.link}
                href="https://videos.adventistas.org/pt/"
                target="_blank"
                rel="noreferrer"
              >
                vídeos
              </a>
            </li>
          </ul>
          <ul class={styles['site-list']}>
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
      </div>
    </div>
    <div class={styles['desktop-navigation']}>
      <nav class={styles['institutional-navigation']}>
        <ul class={styles.list}>
          <li class={styles.item}>
            <a
              class={styles.link}
              href="https://www.adventistas.org/pt/institucional/"
              target="_blank"
              rel="noreferrer"
            >
              institucional
            </a>
          </li>
          <li class={styles.item}>
            <a
              class={styles.link}
              href="https://noticias.adventistas.org/pt/"
              target="_blank"
              rel="noreferrer"
            >
              notícias
            </a>
          </li>
          <li class={styles.item}>
            <a
              class={styles.link}
              href="https://videos.adventistas.org/pt/"
              target="_blank"
              rel="noreferrer"
            >
              vídeos
            </a>
          </li>
        </ul>
      </nav>
      <nav class={styles['site-navigation']}>
        <ul class={styles['list']}>
          <li class={styles['item']}>
            <Link to="/" class={styles.link}>
              Início
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/ao-vivo" class={styles.link}>
              Ao vivo
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/onde-estamos" class={styles.link}>
              Onde estamos
            </Link>
          </li>
          <li class={styles.item}>
            <Link to="/fale-conosco" class={styles.link}>
              Fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
