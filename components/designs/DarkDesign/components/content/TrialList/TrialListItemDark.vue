<template>
  <div class="trial-list-dark__item">
    <div class="trial-list-dark__img" />
    <slot/>
  </div>
</template>
<script setup></script>
<style lang="scss">
.trial-list-dark {
  &__img {
    width: 24px;
    height: 24px;
    background: url('@/assets/icons/dot_dark.svg') center center/cover no-repeat;
  }
  &__item {
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 18.5px;
    color: #fff;
    &:first-child,
    &:nth-child(4) {
      color: $dark-page-primary-light;
    }
  }
}

@media screen and (max-width: 700px) {
  .trial-list-dark {
    &__item {
      color: #fff;
      &:first-child,
      &:nth-child(4) {
        color: #fff;
      }
    }
  }
}
</style>
