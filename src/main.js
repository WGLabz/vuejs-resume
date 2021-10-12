import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from "./store";
import router from './routes.js'
import VueMeta from 'vue-meta'

// Imports fot Ant Components
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Firebase and Axios
import { initializeApp } from "firebase/app";
import http from './http';

Vue.use(Antd);
Vue.use(VueMeta)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

http.getFBConfig().then((res) => {
  initializeApp(res.data);
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
