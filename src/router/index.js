import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Like from '@/components/Like';
import Manage from '@/components/Manage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
    },
    {
      path: '/',
      name: 'Like',
      component: Like,
    },
    {
      path: '/',
      name: 'manage',
      component: Manage,
    },
  ],
});
