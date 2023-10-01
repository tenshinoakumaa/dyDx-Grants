<template>
  <div class="flex flex-col max-w-xl text-center space-y-4 mx-auto mb-20">
    <span class="text-white text-4xl"> Frequently asked questions </span>
    <span class="text-gray-400 text-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
      risus, consectetur ut bibendum non, gravida non libero.
    </span>
  </div>

  <v-expansion-panels
    variant="accordion"
    class="max-w-3xl mx-auto mb-20 accord"
  >
    <v-expansion-panel
      class="main-div text-white py-4"
      title="How do I apply?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="Can I apply as a U.S. based person/company?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="How will I be compensated?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="What type of project will qualify for a Grant?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="What is the application timeline? When can I expect to hear back?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="How can I increase my chances of getting funded?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>

    <v-expansion-panel
      class="main-div text-white py-4"
      title="How often do you approve new Rounds of funding?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ></v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.main-div {
  background: #1c1c28;
}

.accord {
  border-left: 4px solid #6966ff;
}
</style>
