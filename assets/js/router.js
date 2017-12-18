import Vue from 'vue'
import Router from 'vue-router'
import welcome from './components/welcome.vue'
import homepage from './components/homepage.vue'

Vue.use(Router)

export default new Router({
  routes:[
    { path: '/homepage', name: 'homepage', component: homepage },
    { path: '/', name: 'welcome', component: welcome }
  ]
});