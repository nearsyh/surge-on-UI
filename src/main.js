import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/config",
    },
    {
      path: "/config/:id",
      component: App,
      props: true,
    }
  ]
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
