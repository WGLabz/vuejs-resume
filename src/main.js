import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from "./store";
import router from './routes.js'
import VueMeta from 'vue-meta'

// Imports fot Ant Components
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
//End

Vue.use(VueMeta)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
