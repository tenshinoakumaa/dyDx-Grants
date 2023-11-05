<template>
  <div
    class="max-w-6xl footerDiv bg-gradient-to-r from-purple-500 to-blue-500 mx-auto py-10 px-8 mb-28 rounded-xl"
  >
    <div
      class="flex flex-col justify-center items-center space-y-10 text-white text-center"
    >
      <span class="text-gray-200"> Have a project in mind? </span>
      <span class="text-5xl"> Let’s create something awesome. </span>

      <router-link to="apply-for-grant"
        ><button class="bg-white rounded-md">
          <div
            class="flex flex-row hover:bg-gray-200 rounded-md space-x-2 py-2 px-4"
          >
            <span class="div-text"> Apply for grant </span>
            <img src="../../svg/right-arrow-blue.svg" alt="" />
          </div></button
      ></router-link>
    </div>
  </div>
  <div
    class="py-8 px-16 flex flex-row justify-between max-w-6xl mx-auto items-center"
  >
    <ul class="flex flex-row space-x-12 text-gray-300 items-center">
      <li class="hover:text-white">
        <router-link to="/"
          ><img src="../icons/footer-logo.png" alt=""
        /></router-link>
      </li>
      <li class="hover:text-white" v-if="this.width >= 1280">
        <router-link to="/discover-initiatives"
          >Discover initiatives</router-link
        >
      </li>
      <li class="hover:text-white" v-if="this.width >= 1280">
        <router-link to="/funded-grants">Funded grants</router-link>
      </li>
      <li class="hover:text-white" v-if="this.width >= 1280">
        <router-link to="program-expenses">Program expenses</router-link>
      </li>
      <li class="hover:text-white" v-if="this.width >= 1280">
        <router-link to="blog">Blog</router-link>
      </li>
      <li class="hover:text-white" v-if="this.width >= 1280">
        <router-link to="FAQ">FAQ</router-link>
      </li>
    </ul>

    <div class="flex flex-row space-x-8">
      <a href="https://twitter.com/?lang=ru">
        <img src="../svg/twitter.svg" alt="" />
      </a>
      <a href="https://discord.com/">
        <img src="../svg/discord.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
img {
  cursor: pointer;
}
</style>

<script>
import TheBanner from "./TheBanner.vue";

export default {
  data() {
    return {
      width: window.innerWidth,
    };
  },
  components: [TheBanner],
};
</script>
