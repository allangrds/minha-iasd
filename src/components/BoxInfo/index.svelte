<script>
  import { Link } from 'svelte-routing'
  import Box from '~/components/Box/index.svelte'

  import styles from './style.css'

  export let title = ''
  export let description = ''
  export let icon
  export let link
  export let style

  const descriptionLongStyle = (link && link.text) && styles['description-long']
</script>

<Box style={style}>
  {#if icon && icon.element}
    <div class={styles['image-wrapper']}>
      <img
        src={icon.element}
        alt={icon.alt}
      />
    </div>
  {/if}
  <span class={styles.title}>
    { title }
  </span>
  <span class="{styles.description} {descriptionLongStyle}">
    { description }
  </span>
  {#if link && link.text}
    <div class={styles['link-wrapper']}>
      {#if link.type === 'internal'}
        <Link to={link.url}>
          { link.text }
        </Link>
      {:else}
        <a href={link.url} target="_blank" rel="noreferrer">
          { link.text }
        </a>
      {/if}
    </div>
  {/if}
</Box>
