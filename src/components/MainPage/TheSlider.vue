<template>
  <div class="con">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div
          class="text-left card py-4 px-4 rounded-xl flex flex-col text-gray-400"
        >
          <div class="space-y-4 flex flex-col mb-28">
            <span class="card-mini-text"> Crowdfund </span>
            <span class="text-white text-xl font-bold">
              Funding rates page</span
            >

            <span class="card-mini-text">
              Funding amount: $5,000 - $6,000
            </span>
            <span class="text-white text-lg">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </span>
          </div>

          <div class="relative w-32 h-12">
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-0"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-4"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          class="text-left card py-4 px-4 rounded-xl flex flex-col text-gray-400"
        >
          <div class="space-y-4 flex flex-col mb-28">
            <span class="card-mini-text"> Crowdfund </span>
            <span class="text-white text-xl font-bold">
              Funding rates page</span
            >

            <span class="card-mini-text">
              Funding amount: $5,000 - $6,000
            </span>
            <span class="text-white text-lg">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </span>
          </div>

          <div class="relative w-32 h-12">
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-0"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-4"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          class="text-left card py-4 px-4 rounded-xl flex flex-col text-gray-400"
        >
          <div class="space-y-4 flex flex-col mb-28">
            <span class="card-mini-text"> Crowdfund </span>
            <span class="text-white text-xl font-bold">
              Funding rates page</span
            >

            <span class="card-mini-text">
              Funding amount: $5,000 - $6,000
            </span>
            <span class="text-white text-lg">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </span>
          </div>

          <div class="relative w-32 h-12">
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-0"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-4"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          class="text-left card py-4 px-4 rounded-xl flex flex-col text-gray-400"
        >
          <div class="space-y-4 flex flex-col mb-28">
            <span class="card-mini-text"> Crowdfund </span>
            <span class="text-white text-xl font-bold">
              Funding rates page</span
            >

            <span class="card-mini-text">
              Funding amount: $5,000 - $6,000
            </span>
            <span class="text-white text-lg">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </span>
          </div>

          <div class="relative w-32 h-12">
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-0"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-4"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          class="text-left card py-4 px-4 rounded-xl flex flex-col text-gray-400"
        >
          <div class="space-y-4 flex flex-col mb-28">
            <span class="card-mini-text"> Crowdfund </span>
            <span class="text-white text-xl font-bold">
              Funding rates page</span
            >

            <span class="card-mini-text">
              Funding amount: $5,000 - $6,000
            </span>
            <span class="text-white text-lg">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </span>
          </div>

          <div class="relative w-32 h-12">
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-0"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
            <div
              class="rounded-full overflow-hidden h-10 w-10 absolute top-0 left-4"
            >
              <img
                src="../../svg/mini-ava-1.svg"
                alt="Изображение 1"
                class="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

.con {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  margin-bottom: 10rem;
  padding: 0;
  position: relative;
  height: 100%;
}

.card {
  background: #393953;
}
.card-mini-text {
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  max-width: 400px;
  margin-bottom: 3rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
}



</style>
