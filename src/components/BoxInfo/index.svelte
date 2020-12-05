<script>
  import { Link } from 'svelte-routing'
  import Box from '~/components/Box/index.svelte'

  import styles from './style.css'

  export let title = ''
  export let description = ''
  export let icon
  export let iconDescription = ''
  export let linkText = ''
  export let linkUrl = ''
  export let style
</script>

<Box style={style}>
  {#if icon}
    <div class={styles['image-wrapper']}>
      <img
        src={icon}
        alt={iconDescription}
      />
    </div>
  {/if}
  <span class={styles.title}>
    { title }
  </span>
  <span class={styles.description}>
    { description }
  </span>
  {#if linkText}
    <div class={styles['link-wrapper']}>
      <Link to={linkUrl}>
        { linkText }
      </Link>
    </div>
  {/if}
</Box>
