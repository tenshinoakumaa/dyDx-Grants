<template>
  <div class="max-w-6xl mx-auto py-28">
    <div class="secondTypeText text-white mb-28">Funded Grants</div>
    <div>
      <ul
        class="firstTypeText mb-8 flex items-center space-y-6 lg:space-y-0 flex-col lg:flex-row text-gray-300 text-sm mx-auto lg:justify-between max-w-6xl px-16"
      >
        <li class="cursor-pointer hover:white active" @click="addActiveClass">
          All
        </li>
        <li class="cursor-pointer hover:white" @click="addActiveClass">
          Technical/Tool Development
        </li>
        <li class="cursor-pointer hover:white" @click="addActiveClass">
          Governance
        </li>
        <li class="cursor-pointer hover:white" @click="addActiveClass">
          Growth/Marketing
        </li>
        <li class="cursor-pointer hover:white" @click="addActiveClass">
          Analytics
        </li>
        <li class="cursor-pointer hover:white" @click="addActiveClass">
          Third Party Provider
        </li>
      </ul>
    </div>
    <div
      class="px-16 mb-28 flex flex-row items-center space-x-8 justify-center"
    >
      <div>
        <v-switch
          v-model="onlyCompleted"
          color="primary"
          hide-details
        ></v-switch>
      </div>
      <div class="firstTypeText text-white" @click="this.onlyCompleted=!this.onlyCompleted">Show only completed</div>
    </div>
    <div class="grid grid-cols-3 mx-auto px-16" id="cards">
      <div v-for="item in filteredFundedGrants" :key="item.firstText">
        <div
          class="own-bg rounded-xl px-4 py-4 mr-4 mb-4 flex flex-col justify-between"
        >
          <div class="flex flex-col space-y-8 text-left mb-28">
            <span class="firstTypeTextFontFamily h-12 text-gray-400">{{
              item.category
            }}</span>
            <span class="firstTypeTextFontFamily h-12 text-white">{{
              item.firstText
            }}</span>
            <span class="firstTypeTextFontFamily text-gray-400 h-12"
              >Funding amount : {{ item.amount }}</span
            >
            <span class="firstTypeTextFontFamily text-white h-12">{{
              item.secondText
            }}</span>
          </div>

          <div v-if="item.isCompleted === false">
            <img src="../svg/mini-ava-2.svg" alt="" class="rounded-full" />
          </div>
          <div v-else class="flex flex-row justify-between">
            <img src="../svg/mini-ava-2.svg" alt="" class="rounded-full" />
            <span class="Completed px-2 py-2 rounded-xl text-white"
              >Completed
            </span>
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
      currentType: "All",
      onlyCompleted: false,
      fundedGrants: [
        {
          category: "Growth/Marketing",
          firstText: "ETHGlobal event sponsorship",
          amount: "$5,000 - $6,000",
          secondText:
            "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...",
          isCompleted: false,
        },
        {
          category: "Technical/Tool Development",
          firstText: "Japanese content website",
          amount: "$5,000 - $6,000",
          secondText:
            "Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...",
          isCompleted: true,
        },
        {
          category: "Analytics",
          firstText: "Lorem ipsum",
          amount: "$5,800 - $6,800",
          secondText:
            "At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this",
          isCompleted: false,
        },
        {
          category: "Third Party Provider",
          firstText: "Hedgie educational content",
          amount: "$5,000 - $6,000",
          secondText:
            "They are mathematically consistent in the sense that no one rule would ever violate another.",
          isCompleted: true,
        },
        {
          category: "Governance",
          firstText: "Lorem ipsum",
          amount: "$3660 - 5000$",
          secondText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
          isCompleted: false,
        },
        {
          category: "Analytics",
          firstText: "Lorem ipsum",
          amount: "$4660 - 6500$",
          secondText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
          isCompleted: false,
        },
      ],
    };
  },
  computed: {
    filteredFundedGrants() {
      return (this.currentType == "All")
        ? (this.onlyCompleted ? this.fundedGrants.filter((item) => item.isCompleted===true) : this.fundedGrants)
        : (this.onlyCompleted 
            ? this.fundedGrants.filter((item) => item.category === this.currentType && item.isCompleted===true) 
            : this.fundedGrants.filter((item) => item.category === this.currentType)
            );
    },
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
.Completed {
  background: #16b57f;
}
.own-bg {
  background: #393953;
}

.active {
  background: #393953;
  padding: 15px 15px;
  border-radius: 10px;
}

.firstTypeText {
  font-family: Space Mono;
  font-size: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.firstTypeTextFontFamily {
  font-family: Space Mono;
}
.secondTypeText {
  font-family: Circular Std;
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.022em;
  text-align: center;
}
</style>
