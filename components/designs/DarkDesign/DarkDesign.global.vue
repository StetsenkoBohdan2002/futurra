<template>
  <div class="dark-page">
    <div class="dark-page__bg"></div>
    <div class="container">
      <HeaderDark />
      <ContentDark />
    </div>
    <PaymentModalDark @closeModal="closeModal" v-if="modalStatus" />
  </div>
</template>
<script setup lang="ts">
const initStore = useInitStore();
const modalStatus = computed((): boolean => initStore.getModalStatus);
const closeModal = (): void => {
  initStore.setModalStatus(false);
};

useHead({
  title: 'Dark Design',
  meta: [
    { name: 'description', content: 'Web page with dark design.' },
    {
      name: 'keywords',
      content:
        'PlanetLearn, online learning, educational platform, dark mode, e-learning, digital education, online courses, webinars, interactive learning',
    },
  ],
});
</script>
<style lang="scss">
.primary-dark {
  color: $dark-page-primary;
}

.primary-dark-light {
  color: $dark-page-primary-light;
}
.dark-page {
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
    background-image: url('@/assets/images/bg_planets_dark.png');
    background-repeat: no-repeat;
    background-position: 30% 0;
    background-size: cover;
    z-index: 0;
  }
}

@media screen and (max-width: 700px) {
  .dark-page {
    padding: 29px 16px;
  }
}
</style>
