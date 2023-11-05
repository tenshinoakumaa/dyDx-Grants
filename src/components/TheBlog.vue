<template>
  <div class="max-w-3xl mx-auto text-center text-white mt-28 mb-28">
    <div class="text-6xl mb-28">Blog</div>
    <ul
      class="primary_font firstTypeText mb-28 flex items-center space-y-6 lg:space-y-0 flex-col lg:flex-row text-gray-300 text-sm mx-auto lg:justify-between max-w-6xl px-16"
    >
      <li class="cursor-pointer hover:white active" @click="addActiveClass">
        Latest
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Funding round
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Spotlight
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        News & Update
      </li>
    </ul>

    <div class="grid grid-cols-2">
      <div
        class="px-8 mb-8"
        v-for="item in filteredBlogs"
        :key="item.firstText"
      >
        <div style="background: #393953" class="rounded-xl max-w-2xl lg:w-full">
          <img src="../img/image-block-1.png" alt="" />
          <div class="py-6 px-8 text-left flex flex-col justify-center">
            <div class="flex flex-col space-y-2 mb-20">
              <span class="box_text text-gray-200"> {{ item.category }} </span>
              <span class="text-white font-bold text-2xl">
                {{ item.firstText }}
              </span>
            </div>
            <div>
              <span class="box_text text-gray-200"> {{ item.date }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentType: "Latest",
      blogs: [
        {
          category: "Funding round",
          firstText: "Round 9 of approvals",
          date: "January 1, 2022",
        },
        {
          category: "Spotlight",
          firstText: "Round 8 of approvals",
          date: "January 1, 2022",
        },
        {
          category: "Spotlight",
          firstText: "Round 7 of approvals",
          date: "January 1, 2022",
        },
        {
          category: "News & Update",
          firstText: "Round 6 of approvals",
          date: "January 1, 2022",
        },
        {
          category: "Funding round",
          firstText: "Round 5 of approvals",
          date: "January 1, 2022",
        },
      ],
    };
  },
  computed: {
    filteredBlogs() {
      return this.currentType == "Latest"
        ? this.blogs
        : this.blogs.filter((item) => item.category.trim() == this.currentType);
    },
  },
  methods: {
    addActiveClass(event) {
      let ul = event.target.parentNode.querySelectorAll("li");
      for (let i = 0; i < ul.length; i++) {
        ul[i].classList.remove("active");
      }
      event.target.classList.add("active");
      this.currentType = event.target.textContent.trim();
      console.log(this.currentType);
    },
  },
};
</script>

<style scoped>
.active {
  background: #393953;
  padding: 15px 15px;
  border-radius: 10px;
}
</style>
