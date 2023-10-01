<template>
  <nav class="flex flex-row justify-between px-16 items-center py-4 mb-28">
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
      <li class="hover:text-gray-50">Funded grants</li>
      <li class="hover:text-gray-50">Program expenses</li>
      <li class="hover:text-gray-50">Blog</li>
      <li class="hover:text-gray-50">FAQ</li>
      <li class="text-white">
        <button
          class="bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-6 rounded-md hover:from-purple-700 hover:to-blue-700"
        >
          Apply for grant
        </button>
      </li>
    </ul>
  </nav>
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
</style>
