<template>
  <div class="light-page">
    <div class="light-page__bg"></div>
    <div class="container">
      <HeaderLight />
      <ContentLight />
    </div>
    <PaymentModalLight @closeModal="closeModal" v-if="modalStatus" />
  </div>
</template>
<script setup lang="ts">
const initStore = useInitStore();
const modalStatus = computed((): boolean => initStore.getModalStatus);
const closeModal = (): void => {
  initStore.setModalStatus(false);
};

useHead({
  title: 'Light Design',
  meta: [
    { name: 'description', content: 'Web page with light design.' },
    {
      name: 'keywords',
      content:
        'PlanetLearn, online learning, educational platform, light mode, e-learning, digital education, online courses, webinars, interactive learning',
    },
  ],
});
</script>
<style lang="scss">
.light-page .primary {
  color: $light-page-primary;
}
.light-page {
  position: relative;
  min-height: 100vh;
  padding: 8px 0;
  &__bg {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: url('@/assets/images/bg_planets.png');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: 0;
  }
}

@media screen and (max-width: 700px) {
  .light-page {
    padding: 20px;
  }
}
</style>
