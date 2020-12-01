<script>
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
              <a
                class={style.link}
                href="#"
              >
                início
              </a>
            </li>
            <li class={style.item}>
              <a
                class={style.link}
                href="#"
              >
                ao vivo
              </a>
            </li>
            <li class={style.item}>
              <a
                class={style.link}
                href="#"
              >
                onde estamos
              </a>
            </li>
            <li class={style.item}>
              <a
                class={style.link}
                href="#"
              >
                fale conosco
              </a>
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
            <a href="#" class={style.link}>
              Início
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              Ao vivo
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              Onde estamos
            </a>
          </li>
          <li class={style.item}>
            <a href="#" class={style.link}>
              Fale conosco
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
