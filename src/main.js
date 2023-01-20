import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import router from '@/router/'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App)
  .use(createPinia())
  .use(vuetify)
  .use(router)
  .component('Datepicker', Datepicker)
  .mount('#app')
  
