<template>
  <div class="content-dark-trial-wrapper">
    <div class="content-dark__ball"></div>
    <div class="content-dark-trial">
      <div class="content-dark__rocket"></div>
      <div class="content-dark-trial__header" :class="{ 'no-time': !time }">
        <div class="content-dark-trial__price">
          <div class="content-dark-trial__title font-extrabold">3-day trial for $0.99</div>
          <div class="content-dark-trial__discount">
            <div class="content-dark-trial__discount_then font-semibold" v-if="time">Then $9.99</div>
            <div class="content-dark-trial__discount_week font-semibold" v-if="time">$39.99/week</div>
            <div class="content-dark-trial__price_week font-semibold" v-else>Then $39.99/week</div>
          </div>
        </div>
        <div class="content-dark-trial__timer" v-if="+time">
          <ProgressTimer :initialTime="initialTime" :time="time" @changeTime="changeTime" />
        </div>
      </div>
      <div class="content-dark-trial__list">
        <TrialListDark />
      </div>
      <div class="content-dark-trial__footer">
        <TrialFooterDark />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const initialTime: Ref<number> = ref(180); // 3 хвилини в секундах
const time: Ref<number> = ref(180);

const changeTime = (newTime: number) => {
  time.value = newTime;
  localStorage['time'] = time.value;
};

onMounted((): void => {
  if (localStorage['time']) {
    time.value = localStorage['time'];
    initialTime.value = localStorage['time'];
  }
});
</script>
<style lang="scss">
.content-dark {
  &__rocket {
    background-image: url('@/assets/icons/rocket.svg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 4;
    width: 270px;
    height: 270px;
    position: absolute;
    top: 50%;
    transform: translateY(-65%);
    right: -150px;
  }
  &__ball {
    background-image: url('@/assets/icons/ball.svg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    width: 86px;
    height: 86px;
    position: absolute;
    top: 0;
    left: -40px;
    top: 20px;
    z-index: 1;
    transform: translateY(-65%);
  }
  &-trial {
    backdrop-filter: blur(5px);
    background-color: $black-color-medium;
    max-width: 475px;
    z-index: 3;
    position: relative;
    padding: 34px 24px;
    border-radius: 24px;
    font-size: 24px;
    border: 3px solid $light-color-strong-m;
    &-wrapper {
      position: relative;
    }
    &__title {
      color: $dark-page-primary-light;
    }
    &__list {
      margin-top: 24px;
    }
    &__footer {
      &_sub {
        margin-top: 24px;
        display: inline-block;
        font-size: 12px;
        color: $black-color-regular;
        line-height: 120%;
        text-align: center;
      }
    }
    &__price {
      &_week {
        font-size: 16px;
        margin-top: 8px;
        color: #fff;
      }
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__discount {
      &_then {
        color: #fff;
        font-size: 20px;
      }
      &_week {
        color: $light-color-strong;
        font-size: 16px;
        text-decoration: line-through;
        text-decoration-color: revert;
      }
    }
  }
}

.secure {
  border: 1px solid $black-color-light-m;
  width: 100%;
  color: $light-page-green-light;
  gap: 8px;
}

@media screen and (max-width: 700px) {
  .content-dark {
    &-trial {
      margin: 0 10px;
      background-color: $black-color-dark;
      border: none;
      width: 100%;
      &__list {
        display: none;
      }
      &-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      &__footer {
        display: none;
      }
      &__header {
        &.no-time {
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
}
</style>
