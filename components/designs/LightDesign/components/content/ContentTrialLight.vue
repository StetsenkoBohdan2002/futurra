<template>
  <div class="content-light-trial">
    <div class="content-light__asteroid"></div>
    <div class="content-light-trial__header" :class="{ 'no-time': !time }">
      <div class="content-light-trial__price">
        <div class="content-light-trial__title font-extrabold">
          3-day trial for
          <span class="primary">$0.99</span>
        </div>
        <div class="content-light-trial__discount">
          <div class="content-light-trial__discount_then font-semibold" v-if="time">Then $9.99</div>
          <div class="content-light-trial__discount_week font-semibold" v-if="time">$39.99/week</div>
          <div class="content-light-trial__price_week font-semibold" v-else>Then $39.99/week</div>
        </div>
      </div>
      <div class="content-light-trial__timer" v-if="+time">
        <ProgressTimer :initialTime="initialTime" :time="time" @changeTime="changeTime" />
      </div>
    </div>
    <div class="content-light-trial__list">
      <TrialListLight />
    </div>
    <div class="content-light-trial__footer">
      <TrialFooterLight />
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
.content-light {
  &__asteroid {
    background-image: url('@/assets/icons/asteroid.svg');
    background-repeat: no-repeat;
    width: 202px;
    height: 80px;
    position: absolute;
    top: -56px;
    right: 19px;
  }
  &-trial {
    background-color: #ffffff;
    box-shadow: 0 4px 4px $black-color-thin;
    max-width: 475px;
    position: relative;
    padding: 24px;
    border-radius: 24px;
    font-size: 24px;
    border: 1px solid #cdcdcd;
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
      }
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__discount {
      &_then {
        color: #000;
        font-size: 20px;
      }
      &_week {
        opacity: 0.4;
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
  .content-light {
    &-info{
      &__content{
        gap: 16px;
      }
    }
    &-trial {
      width: 100%;
      &__list {
        display: none;
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
