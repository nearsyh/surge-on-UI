import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/config",
    },
    {
      path: "/config",
      component: App,
      props: true,
    },
    {
      path: "/config/:id",
      component: App,
      props: true,
    }
  ]
})

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
}).$mount('#app')
