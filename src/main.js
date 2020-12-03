import App from '~/App.svelte'

const app = new App({
  target: document.body,
  props: {
    appName: 'Svelte Template with Parcel.js',
  },
})

window.app = app

export default app
