import { createRouter, createWebHistory } from 'vue-router';

import CountryPage from '~/pages/country';
import HomePage from '~/pages/home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/country/:code/:name',
    name: 'Country',
    component: CountryPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };
