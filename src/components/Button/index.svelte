<script>
  import styles from './style.css'

  export let text = ''
  export let onClick
</script>

<button class={styles.button} onClick={onClick}>
  { text }
</button>
