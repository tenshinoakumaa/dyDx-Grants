<template>
  <div class="pb-28">
    <div class="flex flex-col max-w-3xl mx-auto text-center space-y-6">
      <span class="text-white text-4xl font-bold">What’s new?</span>
      <span class="text-gray-400"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
        risus, consectetur ut bibendum non, gravida non libero.</span
      >

      <div
        class="flex flex-row justify-center items-center mx-auto cursor-pointer bg-gradient-to-r from-sky-200 to-blue-400 space-x-2 items-center hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 text-transparent bg-clip-text"
      >
        <span class="mr-2"> Read more on our blog </span
        ><img src="../../svg/right_arrow.svg" alt="" />
      </div>
      <div class="h-24"></div>

      <div class="flex flex-row space-x-12">
        <div style="background: #393953" class="rounded-xl max-w-2xl w-full">
          <img src="../../img/image-block-1.png" alt="" />
          <div class="py-6 px-8 text-left flex flex-col justify-center">
            <div class="flex flex-col space-y-2 mb-20">
              <span class="box_text text-gray-200"> Funding round </span>
              <span class="text-white font-bold text-2xl">
                Round 9 of approvals
              </span>
            </div>
            <div>
              <span class="box_text text-gray-200"> January 1, 2022 </span>
            </div>
          </div>
        </div>

        <div style="background: #393953" class="rounded-xl max-w-2xl w-full">
          <img src="../../img/image-block-2.png" alt="" />
          <div class="py-6 px-8 text-left flex flex-col justify-center">
            <div class="flex flex-col space-y-2 mb-20">
              <span class="box_text text-gray-200"> Funding round </span>
              <span class="text-white font-bold text-2xl">
                Round 8 of approvals
              </span>
            </div>
            <div>
              <span class="box_text text-gray-200"> January 1, 2022 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box_text {
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
</style>
