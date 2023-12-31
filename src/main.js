import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from './App.vue'
import router from './router'
import filters from './filters'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
// vuetify

const app = createApp(App)

app.use(createPinia())
app.use(createMetaManager())
app.use(router)
app.use(vuetify)

app.config.globalProperties.$filters = filters

app.mount('#app')
