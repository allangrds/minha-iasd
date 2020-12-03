<script>
  import Box from '~/components/Box/index.svelte'
  import styles from './style.css'

  export let title = ''
  export let description = ''
  export let style
</script>

<Box style={style}>
  <span class={styles.title}>
    { title }
  </span>
  <span class={styles.description}>
    { description }
  </span>
</Box>
