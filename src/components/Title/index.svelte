<script>
  import styles from './style.css'

  export let text = ''
  export let style
</script>

<header class={styles.header}>
  <h1 class="{styles.title} {style}">
    { text }
  </h1>
</header>
