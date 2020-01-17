import Vue from 'vue'
import axios from 'axios'
import router from './router'

import App from './App.vue'

import './plugins/avue.js'
import './plugins/element'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
