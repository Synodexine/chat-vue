import Vue from 'vue';
import App from './App.vue';
import { store } from './store';
import { router } from './router';

Vue.config.productionTip = false;
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

document.title = "Chat";