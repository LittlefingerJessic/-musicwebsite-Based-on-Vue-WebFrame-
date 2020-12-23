import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/global/global.css'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://autumnfish.cn'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
