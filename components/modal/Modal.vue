<template>
  <div class="modal">
    <div class="modal-wrapper">
      <slot />
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss">

.modal {
  height: 100%;
  position: absolute;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  &-wrapper {
    margin: 0 20px;
    padding: 24px 16px;
    border-radius: 12px;
    min-width: 330px;
    min-height: 200px;
  }
}
.light-page .modal {
  background-color: $black-color-light-m;
  &-wrapper {
    background-color: #fff;
    box-shadow: 0 0 0 6px $black-color-thin;
  }
}
.dark-page .modal {
  background-color: $black-color-dark;
  &-wrapper {
    background-color: $dark-modal;
  }
}
</style>
