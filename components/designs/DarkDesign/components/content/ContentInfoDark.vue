<template>
  <div class="content-dark-info">
    <div class="content-dark-info__content">
      <h2 class="content-dark-info__title font-extrabold">
        <span class="primary-dark">Start</span> your learning journey <span class="primary-dark">now</span>
      </h2>
      <h3 class="content-dark-info__desc">Get a <SmartStudyText /> plan to rock self-learning</h3>
    </div>
    <button class="button plan-dark" @click="openModal">Get my plan</button>
    <div class="content-dark-info__list">
      <TrialListDark />
    </div>
    <div class="content-dark-info__footer">
      <TrialFooterDark />
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
.content-dark {
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
      color: #fff;
      font-family: Intro;
      font-size: 48px;
    }
    &__desc {
      color: #fff;
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
.plan-dark {
  margin-top: 32px;
  background-color: #fff;
  color: $dark-page-button-color;
  font-weight: bold;
  width: 273px;
  &:hover {
    background-color: $dark-page-color-hover;
    color: #fff;
  }
}

@media screen and (max-width: 700px) {
  .content-dark {
    &-info {
      background-color: $black-color-dark;
      gap: 16px;
      border-radius: 24px;
      padding: 16px;
      &__footer {
        display: block;
      }
      &__list {
        margin-top: 32px;
        display: block;
      }
      &__title {
        font-size: 32px;
        font-family: 'Proxima Nova';
      }
    }
  }
  .plan-dark {
    width: 100%;
  }
}
</style>
