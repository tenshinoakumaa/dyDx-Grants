<template>
  <nav
    class="flex flex-row justify-between px-16 items-center py-4"
    v-if="this.width >= 1280"
  >
    <div>
      <router-link to="/"
        ><img class="cursor:pointer" src="../icons/dydx-logo.png" alt="logo"
      /></router-link>
    </div>
    <ul
      class="flex flex-row justify-between space-x-8 text-gray-300 cursor-pointer nav-list items-center"
    >
      <li class="hover:text-gray-50">
        <router-link to="/discover-initiatives"
          >Discover initiatives</router-link
        >
      </li>
      <li class="hover:text-gray-50">
        <router-link to="/funded-grants">Funded grants</router-link>
      </li>
      <li class="hover:text-gray-50">
        <router-link to="/program-expenses">Program expenses</router-link>
      </li>
      <li class="hover:text-gray-50">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="hover:text-gray-50">
        <router-link to="/FAQ">FAQ</router-link>
      </li>
      <li class="text-white">
        <router-link to="/apply-for-grant">
          <button
            class="bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-6 rounded-md hover:from-purple-700 hover:to-blue-700"
          >
            Apply for grant
          </button>
        </router-link>
      </li>
    </ul>
  </nav>

  <nav v-else class="flex flex-row items-center justify-around sm:justify-between px-16 py-4">
    <div v-if="this.width >= 468">
      <router-link to="/"
        ><img class="cursor:pointer" src="../icons/dydx-logo.png" alt="logo"
      /></router-link>
    </div>

    <div class="flex flex-row items-center space-x-16">
      <router-link to="apply-for-grant">
        <button
          class="bg-gradient-to-r text-white from-purple-500 to-blue-500 py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700"
        >
          Apply for grant
        </button>
      </router-link>
      <div class="flex flex-col space-y-1 cursor-pointer">
        <div
          class="flex flex-col space-y-1 cursor-pointer"
          @click="droppedDown = !droppedDown"
        >
          <img src="../svg/burget-line.svg" class="w-6" alt="" />
          <img src="../svg/burget-line.svg" class="w-6" alt="" />
          <img src="../svg/burget-line.svg" class="w-6" alt="" />
        </div>
      </div>
    </div>
  </nav>

  <ul
    class="flex flex-col justify-center items-center text-center space-y-8 text-gray-300 cursor-pointer nav-list"
    :class="{ show: droppedDown, hide: !droppedDown }"
  >
    <li class="hover:text-gray-50">
      <router-link to="/discover-initiatives">Discover initiatives</router-link>
    </li>
    <li class="hover:text-gray-50">
      <router-link to="/funded-grants">Funded grants</router-link>
    </li>
    <li class="hover:text-gray-50">
      <router-link to="program-expenses">Program expenses</router-link>
    </li>
    <li class="hover:text-gray-50">
      <router-link to="blog">Blog</router-link>
    </li>
    <li class="hover:text-gray-50"><router-link to="FAQ">FAQ</router-link></li>
  </ul>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

.nav-list {
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.show {
  max-height: 500px;
  transition: max-height 0.5s ease;
  overflow: hidden;
  opacity: 1;
}

.hide {
  max-height: 0;
  transition: max-height 0.5s ease;
  overflow: hidden;
  opacity: 1;
}
</style>

<script>
import { Dropdown } from "flowbite";

export default {
  data() {
    return {
      width: window.innerWidth,
      droppedDown: false,
    };
  },
};
</script>
