<template>
  <div class="max-w-5xl mx-auto text-center mt-28 mb-28">
    <div class="text-white text-5xl mb-28">Program expenses</div>
    <ul
      class="primary_font firstTypeText mb-28 flex items-center space-y-6 lg:space-y-0 flex-col lg:flex-row text-gray-300 text-sm mx-auto lg:justify-between max-w-6xl px-16"
    >
      <li class="cursor-pointer hover:white active" @click="addActiveClass">
        All
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Category1
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Category2
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Category3
      </li>
      <li class="cursor-pointer hover:white" @click="addActiveClass">
        Category4
      </li>
    </ul>
    <div class="flex flex-col space-y-16 primary_font text-white l">
      <div
        v-for="item in filteredExpenses" :key="item.firstText"
        class="w-full mx-auto px-8 flex flex-row py-8 my-bg rounded-xl justify-between"
      >
        <div class="text-left text-sm space-y-8">
          <div class="text-xl">{{ item.firstText }}</div>
          <div class="text-gray-500 text-lg">{{ item.category }}</div>
          <div class="text-lg">
            {{ item.secondText }}
          </div>
        </div>
        <div>
          <div class="flex flex-row space-x-4 items-center">
            <span class="text-xl">{{ item.price }}</span>
            <img src="../svg/link.svg" alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    computed: {
        filteredExpenses(){
            return this.currentType=='All' 
            ? this.expenses 
            : this.expenses.filter(item=>item.category===this.currentType);
        }
    },
  data() {
    return {
      currentType: "All",
      expenses: [
        {
          firstText: "Airtable Yearly Subscription",
          secondText:
            "Airtable is used to build the application form and store all application data.",
          category: "Category3",
          price: '$500.00'
        },
        {
          firstText: "Expense title1",
          secondText:
            "Description1",
          category: "Category1",
          price: '$550.00'
        },
        {
          firstText: "Expense title2",
          secondText:
            "Description2",
          category: "Category3",
          price: '$420.00'
        },
        {
          firstText: "Expense title3",
          secondText:
            "Description3",
          category: "Category2",
          price: '$650.00'
        },
        {
          firstText: "Expense title4",
          secondText:
            "Description4",
          category: "Category4",
          price: '$850.00'
        },
        {
          firstText: "Expense title5",
          secondText:
            "Description5",
          category: "Category2",
          price: '$880.00'
        },
        {
          firstText: "Expense title6",
          secondText:
            "Description6",
          category: "Categor2",
          price: '$810.00'
        },
        {
          firstText: "Expense title7",
          secondText:
            "Description7",
          category: "Category1",
          price: '$660.00'
        },
      ],
    };
  },
  methods: {
    addActiveClass(event) {
      let ul = event.target.parentNode.querySelectorAll("li");
      for (let i = 0; i < ul.length; i++) {
        ul[i].classList.remove("active");
      }
      event.target.classList.add("active");
      this.currentType = event.target.innerHTML.trim();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
.primary_font {
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
}
.active {
  background: #393953;
  padding: 15px 15px;
  border-radius: 10px;
}
.my-bg {
  background: #393953;
}
</style>
