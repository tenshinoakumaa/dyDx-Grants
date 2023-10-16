<template>
  <div
    class="text-white flex pt-28 flex-col max-w-3xl mx-auto text-center space-y-8 items-center mb-28"
  >
    <span class="text-6xl">Projects built with grants</span>
    <span class="text-xl text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
      risus, consectetur ut bibendum non, gravida non libero.
    </span>
    <ul class="flex flex-row space-x-8 sm:space-x-16 py-4 items-center">
      <li class="cursor-pointer active" @click="addActiveClass">All</li>
      <li class="cursor-pointer" @click="addActiveClass">Open</li>
      <li class="cursor-pointer" @click="addActiveClass">Funded</li>
      <li class="cursor-pointer" @click="addActiveClass">Completed</li>
    </ul>

    <ul class="flex flex-col">
      <li v-for="item in rfps" :key="item.id">
        <div
          v-if="
            item.type == this.currentTypes ||
            this.currentTypes == '' ||
            this.currentTypes == 'All'
          "
          class="text md:flex own-bg flex-row justify-between max-w-2xl py-8 px-8 rounded-xl mb-8"
        >
          <div
            class="flex flex-col space-y-4 sm:text-center mb-4 md:mb-0 md:text-left"
          >
            <span>{{ item.firstText }}</span>
            <span class="text-gray-400">
              {{ item.secondText }}
            </span>
            <span class="text-gray-400">Funding amount: {{ item.fundingAmount }}</span>
          </div>
          <div >
            <div :class="item.type + ' '  + defaultClass">
              {{ item.type }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rfps: [
        {
          id: 1,
          firstText: "Funding Rate Page",
          secondText:
            "Page that provides a live look at all funding rates with popular timeframes in annualized format",
          fundingAmount: "$45,000 - $85,000",
          type: "Funded",
        },
        {
          id: 2,
          firstText: "CLI Trading Tool",
          secondText:
            "Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal",
          fundingAmount: "$25,000 - $40,000",
          type: "Funded",
        },
        {
          id: 3,
          firstText: "New Language SDKs",
          secondText:
            "Replicate existing Python SDK to new programming languages with all the same features",
          fundingAmount: "$25,000 - $40,000",
          type: "Open",
        },
        {
          id: 4,
          firstText: "Liquidation Alert Tool",
          secondText:
            "Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues",
          fundingAmount: "$30,000 - $50,000",
          type: "Completed",
        },
        {
          id: 5,
          firstText: "Lorem ipsum dolor sit",
          secondText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nullarisus, consectetur ut bibendum non, gravida non libero.",
          fundingAmount: "$45,000 - $85,000",
          type: "Funded",
        },
        {
          id: 6,
          firstText: "Lorem ipsum dolor sit",
          secondText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nullarisus, consectetur ut bibendum non, gravida non libero.",
          fundingAmount: "$25,000 - $40,000",
          type: "Funded",
        },
        {
          id: 7,
          firstText: "Lorem ipsum dolor sit",
          secondText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nullarisus, consectetur ut bibendum non, gravida non libero.",
          fundingAmount: "$25,000 - $40,000",
          type: "Open",
        },
        {
          id: 8,
          firstText: "Lorem ipsum dolor sit",
          secondText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nullarisus, consectetur ut bibendum non, gravida non libero.",
          fundingAmount: "$30,000 - $50,000",
          type: "Completed",
        },
      ],
      currentTypes: "",
      defaultClass: "text-white py-2 px-6 rounded-xl",
    };
  },
  methods: {
    addActiveClass(event) {
      let ul = event.target.parentNode.querySelectorAll("li");
      for (let i = 0; i < ul.length; i++) {
        ul[i].classList.remove("active");
      }
      event.target.classList.add("active");
      let text = event.target.innerHTML;
      this.currentTypes = text;
    },
  },
};
</script>

<style scoped>
.text{
  font-family: Circular Std;
  letter-spacing: -0.019em;
}
.own-bg {
  background: #393953;
}

.Funded {
  background: #1c1c28;
}
.Open {
  background: #6966ff;
}
.Completed {
  background: #16b57f;
}

.active {
  background: #393953;
  padding: 15px 15px;
  border-radius: 10px;
}
</style>
