<template>
  <div class="trial-list">
    <TrialListItemLight>
      <span> Exclusive access to <span class="primary font-bold">350+</span> learning programs </span>
    </TrialListItemLight>
    <TrialListItemLight> <span>Personalized course plan</span> </TrialListItemLight>
    <TrialListItemLight> <span>Comfy learning schedule made by you</span> </TrialListItemLight>
    <TrialListItemLight>
      <span><span class="primary font-bold">24/7</span> tutor support in a secure chat</span>
    </TrialListItemLight>
    <TrialListItemLight> <span>Lifetime access to materials</span> </TrialListItemLight>
  </div>
</template>
<script setup></script>
<style lang="scss">
.trial-list {
  &__img {
    width: 24px;
    height: 24px;
  }
  &__item {
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 18.5px;
  }
}

.light-page .trial-list {
  &__img {
    background: url('@/assets/icons/dot.svg') center center/cover no-repeat;
  }
}
</style>
