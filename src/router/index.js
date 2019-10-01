/***
 * Front-end router
 * Позволяет реализовать SPA, без перезагрузки
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageNotFoundPage from '../components/PageNotFoundPage.vue';


const OverviewPage = () =>
  import('../components/OverviewPage.vue');
const PersonPage = () =>
  import('../components/PersonPage.vue');
const DebtPage = () =>
  import('../components/DebtPage.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    // Страница должников
    path: '/',
    component: OverviewPage,
  }, {
    // Стрица Должников
    path: '/persons',
    component: PersonPage,
  }, {
    // Стрица зодолженностей
    path: '/debts',
    component: DebtPage,
  }, {
    // Страница не найдена
    path: '*',
    component: PageNotFoundPage,
  }]
})