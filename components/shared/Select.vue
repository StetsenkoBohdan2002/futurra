<template>
  <div class="custom-select">
    <div class="custom-select-main" :class="{ opened: openList, selected: model.id }" @click="openList = true">
      <div class="custom-select-label">{{ label }}</div>
      <div class="custom-select-value">
        <div class="custom-select-value__default">
          <span v-if="!model">Select</span>
          <span v-else>{{ model.title }}</span>
        </div>
        <div class="custom-select-value__caret"></div>
      </div>
    </div>
    <div class="custom-select-list" v-if="openList" v-click-outside="() => (openList = false)">
      <div
        class="custom-select-list__item"
        :class="{ selected: model && option.id === model.id }"
        @click="selectItem(option)"
        :key="option.id"
        v-for="option in options"
      >
        {{ option.title }}
        <div class="custom-select-list__item_check" v-if="model && option.id === model.id" alt="Selected"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const model: Ref<any> = defineModel();
const props = defineProps(['options', 'label']);
const selected = ref(null);
const openList = ref(false);

const selectItem = (option: any) => {
  openList.value = false;
  model.value = option;
};
</script>
<style lang="scss">
.custom-select {
  height: 46px;
  width: 115px;
  position: relative;
  &-main {
    position: relative;
  }
  &-label {
    position: absolute;
    top: -7px;
    font-size: 12px;
    font-weight: bold;
    padding: 1px 6px;
    left: 12.15px;
    line-height: 12px;
    border-radius: 30px;
  }
  &-value {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 12px;
    &__caret {
      width: 18px;
      height: 18px;
    }
  }
  &-main {
    height: 100%;
    border-radius: 8px;
    padding: 15.5px 12px 15.5px 16px;
    &.opened {
      border-radius: 8px 8px 0 0;
    }
    &.selected {
    }
  }
  &-list {
    position: absolute;
    top: 46px;
    max-height: 300px;
    overflow: auto;
    border: 1px solid $light-field-border-light;
    width: 100%;
    &__item {
      padding: 8.5px 16px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      line-height: 12px;
      font-size: 12px;
      &_check {
        display: flex;
        justify-content: flex-end;
        width: 16px;
        height: 16px;
      }
      &.selected > .custom-select-list__item_check {
        background-repeat: no-repeat;
      }
      &:hover {
        .custom-select-list__item_check {
          background-repeat: no-repeat;
        }
      }
      &.default {
        font-size: 12px;
        padding: 8.5px 16px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.light-page .custom-select {
  &-label {
    background-color: white;
  }
  &-value {
    color: $light-page-field-color;
    &__caret {
      background: url('@/assets/icons/caret-down.svg') center center no-repeat;
    }
  }

  &-main {
    border: 1px solid $light-field-border-light;
    background-color: #fff;
    &.opened {
      border-color: $light-page-green;
    }
    &.selected {
      border-color: $light-page-green;
    }
  }
  &-list {
    border: 1px solid $light-field-border-light;
    border-top: none;
    background-color: #fff;
    &__item {
      border-top: 1px solid $light-field-border-light;
      color: $light-page-field-color;
      &_check {
        display: flex;
        justify-content: flex-end;
        width: 16px;
        height: 16px;
      }
      &.selected > .custom-select-list__item_check {
        background: url('@/assets/icons/check-dark.svg') center center no-repeat;
      }
      &:hover {
        background-color: $light-page-green;
        color: #fff;
        .custom-select-list__item_check {
          background: url('@/assets/icons/check-white.svg') center center no-repeat;
        }
      }
      &.default {
        color: $light-page-field-color;
        &:hover {
          background-color: $light-page-green;
          color: #fff;
        }
      }
    }
  }
}
.dark-page .custom-select {
  &-label {
    background-color: $dark-field-bg;
    color: #fff;
  }
  &-value {
    color: #fff;
    background-color: $dark-field-bg;
    &__caret {
      background: url('@/assets/icons/caret-down-light.svg') center center no-repeat;
    }
  }

  &-main {
    border: 1px solid transparent;
    background-color: $dark-field-bg;
    &.opened {
      border-color: $light-color-medium;
    }
    &.selected {
      border-color: $dark-field-border;
    }
  }
  &-list {
    border: 1px solid $light-color-regular;
    border-top: none;
    &__item {
      border-top: 1px solid $light-color-medium;
      color: #fff;
      background-color: $dark-field-bg;
      &_check {
        display: flex;
        justify-content: flex-end;
        width: 16px;
        height: 16px;
      }
      &.selected > .custom-select-list__item_check {
        background: url('@/assets/icons/check-white.svg') center center no-repeat;
      }
      &:hover {
        background-color: $dark-page-color-hover;
        color: #fff;
        .custom-select-list__item_check {
          background: url('@/assets/icons/check-white.svg') center center no-repeat;
        }
      }
      &.default {
        color: $light-page-field-color;
        &:hover {
          background-color: $dark-page-color-hover;
          color: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .custom-select {
    width: 100px;
  }
}
</style>
