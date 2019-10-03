/***
 * Front-end router
 * Позволяет реализовать SPA, без перезагрузки
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageNotFoundPage from '../components/PageNotFoundPage.vue';

// Подключаем VUE компоненты
const OverviewPage = () =>
  import('../components/OverviewPage.vue');
const PersonPage = () =>
  import('../components/PersonPage.vue');
const DebtPage = () =>
  import('../components/DebtPage.vue');
const PortfolioPage = () =>
  import('../components/PortfolioPage.vue');
const PaymentPage = () =>
      import('../components/PaymentPage.vue');

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
    // Страница Должников
    path: '/persons',
    component: PersonPage,
  }, {
    // Страница зодолженностей
    path: '/debts',
    component: DebtPage,
  }, {
    // Страница портфелей
    path: '/portfolio',
    component: PortfolioPage,
  }, {
    // Страница платежей
    path: '/payment',
    component: PaymentPage,
  }, {
    // Страница не найдена
    path: '*',
    component: PageNotFoundPage,
  }]
})