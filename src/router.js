import Vue from 'vue';
import Router from 'vue-router';
const Main = () => import(/* webpackChunkName: "main" */ './views/Main.vue');
const CalcView = () => import(/* webpackChunkName: "calc" */ './views/CalcView.vue');
const Comments = () => import(/* webpackChunkName: "comments" */ './views/Comments.vue');

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/calc',
    name: 'Calc',
    component: CalcView,
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments,
  },
];

export default new Router({
  routes,
});
