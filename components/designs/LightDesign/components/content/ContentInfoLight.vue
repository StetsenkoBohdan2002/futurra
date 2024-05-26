<template>
  <div class="content-light-info">
    <div class="content-light-info__content">
      <h2 class="content-light-info__title font-extrabold">Start your learning journey now</h2>
      <h3 class="content-light-info__desc">Get a <PlanetLearnText /> plan to rock self-learning</h3>
    </div>
    <button class="button plan-light" @click="openModal">Get my plan</button>
    <div class="content-light-info__list">
      <TrialListLight />
    </div>
    <div class="content-light-info__footer">
      <TrialFooterLight />
    </div>
  </div>
</template>
<script setup lang="ts">
const initStore = useInitStore();
const openModal = (): void => {
  initStore.setModalStatus(true);
};
</script>
<style lang="scss">
.content-light {
  position: relative;
  &-info {
    max-width: 470px;
    &__list {
      display: none;
    }
    &__footer {
      display: none;
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &__title {
      font-size: 48px;
    }
    &__desc {
      font-size: 24px;
    }
  }
}

.button {
  height: 56px;
  cursor: pointer;
  padding: 16px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 16px;
}
.plan-light {
  margin-top: 32px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  width: 273px;
  &:hover {
    background-color: $light-page-green;
  }
}

@media screen and (max-width: 700px) {
  .content-light {
    &-info {
      gap: 16px;
      &__footer {
        display: block;
      }
      &__list {
        margin-top: 32px;
        display: block;
      }
      &__title {
        font-size: 32px;
      }
    }
  }
  .plan-light {
    width: 100%;
  }
}
</style>
