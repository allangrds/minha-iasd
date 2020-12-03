<script>
  import { Link } from 'svelte-routing'

  import style from './style.css'
</script>


<header class={style.header}>
  <div class={style.container}>
    <div>
      <h1 class={style['church-name']}>
        Igreja Adventista do Sétimo Dia
      </h1>
      <h2 class={style['church-name-sub']}>
        Belém
      </h2>
    </div>
    <div class={style['mobile-navigation']}>
      <div class={style.menu}>
        <label
          class={style.icon}
          for="toggle"
        >
          &#9776;
        </label>
        <input
          class={style.input}
          type="checkbox"
          id="toggle"
        />
        <span class={style.text}>
          Menu
        </span>
        <nav class={style.navigation}>
          <ul class={style['institutional-list']}>
            <li class={style.item}>
              <a
                class={style.link}
                href="https://www.adventistas.org/pt/institucional/"
                target="_blank"
              >
                institucional
              </a>
            </li>
            <li class={style.item}>
              <a
                class={style.link}
                href="https://noticias.adventistas.org/pt/"
                target="_blank"
              >
                notícias
              </a>
            </li>
            <li class={style.item}>
              <a
                class={style.link}
                href="https://videos.adventistas.org/pt/"
                target="_blank"
              >
                vídeos
              </a>
            </li>
          </ul>
          <ul class={style['site-list']}>
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
      </div>
    </div>
    <div class={style['desktop-navigation']}>
      <nav class={style['institutional-navigation']}>
        <ul class={style.list}>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://www.adventistas.org/pt/institucional/"
              target="_blank"
            >
              institucional
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://noticias.adventistas.org/pt/"
              target="_blank"
            >
              notícias
            </a>
          </li>
          <li class={style.item}>
            <a
              class={style.link}
              href="https://videos.adventistas.org/pt/"
              target="_blank"
            >
              vídeos
            </a>
          </li>
        </ul>
      </nav>
      <nav class={style['site-navigation']}>
        <ul class={style['list']}>
          <li class={style['item']}>
            <Link to="/" class={style.link}>
              Início
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/ao-vivo" class={style.link}>
              Ao vivo
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/onde-estamos" class={style.link}>
              Onde estamos
            </Link>
          </li>
          <li class={style.item}>
            <Link to="/fale-conosco" class={style.link}>
              Fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
