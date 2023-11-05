<template>
  <first-section></first-section>
  <second-section></second-section>
  <the-slider></the-slider>
  <third-section></third-section>
  <the-accordion></the-accordion>
  <fourth-section></fourth-section>
</template>

<script>
import FirstSection from "./MainPage/FirstSection.vue";
import SecondSection from "./MainPage/SecondSection.vue";
import TheSlider from "./MainPage/TheSlider.vue";
import ThirdSection from "./MainPage/ThirdSection.vue";
import TheAccordion from './MainPage/TheAccordion.vue';
import FourthSection from "./MainPage/FourthSection.vue";

export default {
  components: {
    FirstSection,
    SecondSection,
    TheSlider,
    ThirdSection,
    TheAccordion,
    FourthSection,
  },
};
</script>
