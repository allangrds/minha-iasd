<script>
  import styles from './style.css'

  export let label = ''
  export let name = ''
  export let placeholder = ''
  export let required = false
</script>

<fieldset class={styles.fieldset}>
  <label for={`id-${name}`} class={styles.label}>
    { label }
  </label>
  <textarea
    class={styles.textarea}
    name={name}
    placeholder={placeholder}
    required={required}
  ></textarea>
</fieldset>
