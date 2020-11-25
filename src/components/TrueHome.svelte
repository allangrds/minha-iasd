<script>
  import RightSidebarLogo from '~/components/RightSidebarLogo/index.svelte'
</script>

<style>
  .wrapper {
    height: 100vh;
    display: grid;
    grid-template-columns: calc(100vw/7 * 6 - 0.01px) calc(100vw/7 * 1 - 0.01px);
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    padding: 30px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .church-name {
    max-width: 20ch;
    font-family: "AdventSans";
    font-weight: 300;
    font-size: 1.7em;
    line-height: 40px;
    color: var(--primary);
  }

  .church-name-sub {
    font-family: "NotoSans";
    font-size: 1em;
    color: var(--primary);
    text-transform: uppercase;
    margin-top: 16px;
  }

  .desktop-navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }

  .mobile-navigation {
    display: none;
    margin-top: 50px;
    width: 100%;
    position: relative;
  }

  .mobile-navigation .icon {
    cursor: pointer;
    font-size: 1.5em;
    color: #717171;
  }

  .mobile-navigation .input {
    display: none;
  }

  .mobile-navigation .text {
    font-family: "NotoSans";
    text-transform: uppercase;
    color: #717171;
    margin-left: 7px;
  }

  .mobile-navigation .navigation {
    background-color: #fff;
    width: 100%;
    display: none;
    position: absolute;
    left: 0;
    top: 30px;
  }

  @media only screen and (max-width: 727px) {
    .desktop-navigation {
      display: none;
    }

    .mobile-navigation {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mobile-navigation .menu {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .mobile-navigation .navigation {
      padding-top: 30px;
    }

    .mobile-navigation .navigation .site-list {
      margin-top: 30px;
    }

    .mobile-navigation .navigation .institutional-list .item,
    .mobile-navigation .navigation .site-list .item {
      text-align: center;
      margin-bottom: 10px;
    }

    .mobile-navigation .navigation .institutional-list .link,
    .mobile-navigation .navigation .site-list .link {
      font-family: "NotoSans";
      color: #717171;
      text-transform: lowercase;
    }

    .mobile-navigation .input:checked ~ .navigation {
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      display: block;
    }
  }

  @media only screen and (max-width: 1097px) {
    .container {
      flex-direction: column;
    }

    .church-name {
      max-width: 100%;
    }

    .church-name-sub {
      text-align: center;
    }

    .desktop-navigation {
      align-items: center;
      margin-top: 50px;
    }

    .list {
      justify-content: center !important;
    }
  }

  .institutional-navigation {
    margin-bottom: 15px;
  }

  .institutional-navigation .item {
    display: inline;

    margin-left: 20px;
  }

  .institutional-navigation .link {
    font-family: "NotoSans";
    color: #717171;
    text-transform: lowercase;
  }

  .institutional-navigation,
  .site-navigation {
    width: 100%;
  }

  .site-navigation .item {
    display: inline;

    margin-left: 20px;
  }

  .site-navigation .link {
    font-family: "NotoSerif";
    color: var(--primary);
    text-transform: capitalize;
    font-size: 1.2em;
  }

  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

</style>

<div class="wrapper">
  <div>
    <header class="header">
      <div class="container">
        <div>
          <h1 class="church-name">
            Igreja Adventista do Sétimo Dia
          </h1>
          <h2 class="church-name-sub">
            Belém
          </h2>
        </div>
        <div class="mobile-navigation">
          <div class="menu">
            <label
              class="icon"
              for="toggle"
            >
              &#9776;
            </label>
            <input
              class="input"
              type="checkbox"
              id="toggle"
            />
            <span class="text">
              Menu
            </span>
            <nav class="navigation">
              <ul class="institutional-list">
                <li class="item">
                  <a
                    class="link"
                    href="https://www.adventistas.org/pt/institucional/"
                    target="_blank"
                  >
                    institucional
                  </a>
                </li>
                <li class="item">
                  <a
                    class="link"
                    href="https://noticias.adventistas.org/pt/"
                    target="_blank"
                  >
                    notícias
                  </a>
                </li>
                <li class="item">
                  <a
                    class="link"
                    href="https://videos.adventistas.org/pt/"
                    target="_blank"
                  >
                    vídeos
                  </a>
                </li>
              </ul>
              <ul class="site-list">
                <li class="item">
                  <a
                    class="link"
                    href="#"
                  >
                    início
                  </a>
                </li>
                <li class="item">
                  <a
                    class="link"
                    href="#"
                  >
                    ao vivo
                  </a>
                </li>
                <li class="item">
                  <a
                    class="link"
                    href="#"
                  >
                    onde estamos
                  </a>
                </li>
                <li class="item">
                  <a
                    class="link"
                    href="#"
                  >
                    fale conosco
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="desktop-navigation">
          <nav class="institutional-navigation">
            <ul class="list">
              <li class="item">
                <a
                  class="link"
                  href="https://www.adventistas.org/pt/institucional/"
                  target="_blank"
                >
                  institucional
                </a>
              </li>
              <li class="item">
                <a
                  class="link"
                  href="https://noticias.adventistas.org/pt/"
                  target="_blank"
                >
                  notícias
                </a>
              </li>
              <li class="item">
                <a
                  class="link"
                  href="https://videos.adventistas.org/pt/"
                  target="_blank"
                >
                  vídeos
                </a>
              </li>
            </ul>
          </nav>
          <nav class="site-navigation">
            <ul class="list">
              <li class="item">
                <a href="#" class="link">
                  Início
                </a>
              </li>
              <li class="item">
                <a href="#" class="link">
                  Ao vivo
                </a>
              </li>
              <li class="item">
                <a href="#" class="link">
                  Onde estamos
                </a>
              </li>
              <li class="item">
                <a href="#" class="link">
                  Fale conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    asdasdads
  </div>
  <RightSidebarLogo />
</div>
