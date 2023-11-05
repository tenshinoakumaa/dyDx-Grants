import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {createPinia} from 'pinia'
import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './components/MainPage.vue';
import DiscoverInitiatives from './components/DiscoverInitiatives.vue';
import FundedGrants from './components/FundedGrants.vue';
import ProgramExpenses from './components/ProgramExpenses.vue';
import TheBlog from './components/TheBlog.vue';
import TheFAQ from './components/TheFAQ.vue';
import ApplyPage from './components/ApplyPage.vue';


loadFonts()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',  
      component: MainPage,
    },
    {
      path: '/discover-initiatives',
      component: DiscoverInitiatives
    },
    {
      path: '/funded-grants',
      component: FundedGrants,
    },
    {
      path: '/program-expenses',
      component: ProgramExpenses,
    },
    {
      path: '/blog',
      component: TheBlog,
    },
    {
      path: '/FAQ',
      component: TheFAQ,
    },
    {
      path: '/apply-for-grant',
      component: ApplyPage,
    }
  ]

});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(createPinia());
app.mount('#app');
