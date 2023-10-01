import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {createRouter, createWebHistory} from 'vue-router';


import MainPage from './components/MainPage.vue';
import DiscoverInitiatives from './components/DiscoverInitiatives.vue';

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
    }
  ]

});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
