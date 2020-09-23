import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

Vue.use(Toast);

import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';


extend('required', {
  ...required,
  message: 'This field is required'
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
