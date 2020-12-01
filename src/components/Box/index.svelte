<script>
  import styles from './style.css'

  export let style
</script>

<div class={`${styles.box} ${style}`}>
  <slot></slot>
</div>
