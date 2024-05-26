<template>
  <div class="trial-list-light__item">
    <div class="trial-list-light__img" />
    <slot />
  </div>
</template>
<script setup></script>
<style lang="scss">
.trial-list-light {
  &__img {
    width: 24px;
    height: 24px;
    background: url('@/assets/icons/dot.svg') center center/cover no-repeat;
  }
  &__item {
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 18.5px;
  }
}
</style>
