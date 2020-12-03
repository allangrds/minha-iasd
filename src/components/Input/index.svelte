<script>
  import styles from './style.css'

  export let label = ''
  export let name = ''
  export let placeholder = ''
  export let required = false
  export let type = 'text'
</script>

<fieldset class={styles.fieldset}>
  <label for={`id-${name}`} class={styles.label}>
    { label }
  </label>
  <input
    class={styles.input}
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
  />
</fieldset>
