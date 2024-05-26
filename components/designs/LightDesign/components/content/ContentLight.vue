<template>
  <div class="content-light">
    <ContentInfoLight />
    <ContentTrialLight />
  </div>
</template>
<script setup></script>
<style lang="scss">
.content-light {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-top: 65px;
}

@media screen and (max-width: 700px) {
  .content-light {
    padding-top: 24px;
    align-items: center;
    flex-direction: column-reverse;
    &__asteroid {
      display: none;
    }
    &-trial {
      &__title {
        font-size: 18px;
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .content-light {
    align-items: flex-start;
  }
}
</style>
