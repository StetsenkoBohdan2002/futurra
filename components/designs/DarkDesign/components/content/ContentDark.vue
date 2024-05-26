<template>
  <div class="content-dark">
    <ContentInfoDark />
    <ContentTrialDark />
  </div>
</template>
<script setup></script>
<style lang="scss">
.content-dark {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-top: 65px;
}

@media screen and (max-width: 700px) {
  .content-dark {
    padding-top: 24px;
    align-items: center;
    flex-direction: column-reverse;
    &__rocket {
      display: none;
    }
    &__ball {
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
  .content-dark {
    align-items: flex-start;
  }
}
</style>
