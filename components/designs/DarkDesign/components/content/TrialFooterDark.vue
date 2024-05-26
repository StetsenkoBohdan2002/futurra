<template>
  <footer class="trial-dark__footer">
    <button class="button secure-dark font-semibold">
      <img style="fill: red" src="@/assets/icons/lock-dark.svg" alt="Lock" /> <span>Safe & secure-dark payment</span>
    </button>
    <span class="trial-dark__footer_sub"
      >$0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial-dark period, you
      will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and
      Subscription Terms .</span
    >
  </footer>
</template>
<script setup></script>
<style lang="scss">
.trial-dark {
  &__footer {
    &_sub {
      margin-top: 24px;
      display: inline-block;
      font-size: 12px;
      color: $light-color-strong;
      line-height: 120%;
      text-align: center;
    }
  }
}

.secure-dark {
  border: none;
  width: 100%;
  color: $dark-page-primary-light;
  gap: 8px;
  background-color: $black-color-light-m;
}
</style>
