import Vue from 'vue';
import axios from 'axios';
import router from './router';

import App from './App.vue';

import './plugins/avue.js';
import './plugins/element';

Vue.config.productionTip = false;

const http = axios.create({ baseURL: process.env.VUE_APP_API_BASE_URL });

Vue.prototype.$http = http;
Vue.prototype.$httpajax = http;

new Vue({ router, render: h => h(App) }).$mount('#app');
