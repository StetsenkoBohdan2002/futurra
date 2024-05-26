<template>
  <footer class="trial__footer">
    <button class="button secure font-semibold">
      <img src="@/assets/icons/lock.svg" alt="Lock" /> <span>Safe & secure payment</span>
    </button>
    <span class="trial__footer_sub"
      >$0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
      automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and
      Subscription Terms .</span
    >
  </footer>
</template>
<script setup></script>
<style lang="scss">
.trial {
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
}

.secure {
  border: 1px solid $black-color-light-m;
  width: 100%;
  color: $light-page-green-light;
  gap: 8px;
  background-color: #fff;
}
</style>
