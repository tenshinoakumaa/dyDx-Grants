<template>
  <the-nav></the-nav>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNav from './components/TheNav.vue'
import MainPage from './components/MainPage.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNav,
    MainPage,
    TheFooter,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
body::before,
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: repeat;
}

body{
  background: #1C1C28;
}
body::before {
  background-image: url('./img/fon-2.png');
  z-index: -1;
}

body::after {
  background-image: url('./img/fon.png');
  z-index: -2; 
}

</style>
