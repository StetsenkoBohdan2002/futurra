<template>
  <div class="custom-input full" :class="{ small: size === 'sm' }">
    <fieldset class="custom-input-group">
      <label class="custom-input__label">{{ label }}</label>
      <input
        :class="{ invalid: model && !stateValidation, valid: model && stateValidation }"
        :type="'text'"
        @input="updateValue"
        :value="filteredValue"
        :maxlength="max"
        class="custom-input__value"
        :placeholder="placeholder"
      />
      <div class="custom-input__help text-semibold" v-if="help && model && !stateValidation">{{ help }}</div>
      <div v-if="icon" class="custom-input__icon"><slot name="icon" /></div>
    </fieldset>
  </div>
</template>
<script setup lang="ts">
const model: Ref<any> = defineModel();
const savedCardValue: Ref<any> = ref(model.value);
const cardValue: Ref<string> = ref('');
const props = defineProps(['placeholder', 'label', 'card', 'size', 'icon', 'max', 'state', 'help']);

const stateValidation = computed(() => {
  return props.state ? props.state(model.value) : true;
});
const updateValue = (e: Event): void => {
  const { value } = e.target as HTMLInputElement;
  if (props.card) {
    if (!isNaN(Number(value.slice(-1)))) {
      if (!value) {
        model.value = '';
      } else {
        model.value += value.slice(-1);
      }
    } else {
      model.value = model.value.slice(0, -1);
    }

    savedCardValue.value = value;
    savedCardValue.value = value.replace(/ /g, '');
  } else {
    model.value = value;
  }
};

const filteredValue = computed(() => {
  if (props.card) {
    if (/[a-zA-Zа-яА-Я]/g.test(savedCardValue.value)) {
      savedCardValue.value = savedCardValue.value.slice(0, -1);
    } else {
      let transformedValue: string = savedCardValue.value.replace(/[^\s]/g, '•');
      return transformedValue ? transformedValue.match(/.{1,4}/g)?.join(' ') : '';
    }
  } else {
    return model.value;
  }
});
</script>
<style lang="scss">
.custom-input {
  &.full {
    width: 100%;
  }
  &.small {
    width: 115px;
  }
  &-group {
    width: 100%;
    position: relative;
    height: 46px;
  }
  &__help {
    position: absolute;
    right: 50px;
    font-size: 11px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__value {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  &__icon {
    border: 1px solid #f2f4f7;
    border-radius: 4px;
    width: 32px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
  &__label {
    position: absolute;
    top: -8px;
    font-size: 12px;
    border-radius: 30px;
    font-weight: bold;
    padding: 0 5px;
    left: 20px;
  }
}

.light-page .custom-input {
  &__help {
    color: $page-error;
  }

  &__value {
    border: 1px solid $light-field-border-light;
    &.valid {
      border-color: $light-page-green;
    }
    &.invalid {
      border-color: $page-error;
    }
    &:focus-visible {
      outline: none;
    }
  }
  &__label {
    background-color: white;
  }
}

.dark-page .custom-input {
  &__help {
    color: #fff;
  }

  &__value {
    border: 1px solid transparent;
    background-color: $dark-field-bg;
    color: #fff;
    &.valid {
      border-color: $dark-field-border;
    }
    &.invalid {
      border-color: $page-error;
    }
    &:focus-visible {
      outline: none;
    }
  }
  &__label {
    background-color: $dark-field-bg;
    color: #fff;
  }
}

@media screen and (max-width: 700px) {
  .custom-input.small {
    width: 100px;
  }
}
</style>
