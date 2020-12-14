import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blank from '../views/Blank.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Blank',
    component: Blank
  },
  {
    path: '/workspace/:id',
    name: 'WorkSpace',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
