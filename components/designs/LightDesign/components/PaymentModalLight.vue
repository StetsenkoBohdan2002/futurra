<template>
  <Modal>
    <div class="light-payment-modal">
      <div class="light-payment-modal__title font-extrabold text-center">Payment method</div>
      <button class="button paypal">
        <img src="@/assets/icons/paypal.svg" alt="PayPal" />
        <span>Buy Now</span>
      </button>
      <button class="button google-pay">
        <img src="@/assets/icons/googlepay.svg" alt="Google Pay" />
        <span>Pay</span>
      </button>
      <div class="divider">
        <div></div>
        <span class="font-semibold">OR</span>
        <div></div>
      </div>
      <fieldset class="light-payment-modal__group">
        <Input
          :max="19"
          :icon="true"
          :card="true"
          :help="'Invalid number'"
          :state="validateCard"
          v-model="card"
          :label="'Card number'"
          :placeholder="'••••  ••••  ••••  ••••'"
        >
          <template #icon>
            <img src="@/assets/icons/mastercard.svg" alt="Matercard" />
          </template>
        </Input>
      </fieldset>
      <fieldset class="flex gap-x-2.5 flex-wrap gap-y-4">
        <Select v-model="month" :label="'Month'" :options="monthList" />
        <Select v-model="year" :label="'Year'" :options="yearList" />
        <Input
          :state="validateCvv"
          :max="3"
          :icon="false"
          :card="true"
          :size="'sm'"
          v-model="cvv"
          :label="'CVV'"
          :placeholder="'•••'"
        />
      </fieldset>
      <button :disabled="validateForm" :class="{ disabled: validateForm }" class="button submit">Submit</button>
      <button class="button close font-semibold" @click="closeModal">Close</button>
    </div>
  </Modal>
</template>
<script setup lang="ts">
const card: Ref<string> = ref('');
const cvv: Ref<string> = ref('');
const month: Ref<any> = ref('');
const year: Ref<any> = ref('');

const cardRegex: RegExp = /^\d{16}$/;
const cvvRegex: RegExp = /^\d{3}$/;

const validateCard = (value: string) => {
  return cardRegex.test(value);
};
const validateCvv = (value: string) => {
  return cvvRegex.test(value);
};

const emits = defineEmits(['closeModal']);

const closeModal = (): void => {
  emits('closeModal');
};
const monthList = ref([
  { id: 1, title: 'January' },
  { id: 2, title: 'February' },
  { id: 3, title: 'March' },
  { id: 4, title: 'April' },
  { id: 5, title: 'May' },
  { id: 6, title: 'June' },
  { id: 7, title: 'July' },
  { id: 8, title: 'August' },
  { id: 9, title: 'September' },
  { id: 10, title: 'October' },
  { id: 11, title: 'November' },
  { id: 12, title: 'December' },
]);

const yearList = ref([
  { id: 1, title: '2011' },
  { id: 2, title: '2012' },
  { id: 3, title: '2013' },
  { id: 4, title: '2014' },
  { id: 5, title: '2015' },
  { id: 6, title: '2016' },
  { id: 7, title: '2017' },
  { id: 8, title: '2018' },
  { id: 9, title: '2019' },
  { id: 10, title: '2020' },
  { id: 11, title: '2021' },
  { id: 12, title: '2022' },
  { id: 13, title: '2023' },
  { id: 14, title: '2024' },
]);

const validateForm = computed((): boolean => {
  return !(cardRegex.test(card.value) && cvvRegex.test(cvv.value) && month.value && year.value);
});
</script>
<style lang="scss">
.light-payment-modal {
  &__title {
    font-size: 21px;
    margin-bottom: 24px;
  }
  &__group {
    margin-bottom: 30px;
  }
}

.paypal {
  background-color: #fec538;
  width: 100%;
  gap: 10px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 16px;
  &:hover {
    background-color: $light-page-paypal-hover;
  }
}
.google-pay {
  background-color: #fff;
  width: 100%;
  gap: 6px;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid $light-field-border-thin;
  &:hover {
    background-color: #000000;
    border-color: transparent;
    color: #fff;
  }
}

.light-payment-modal .divider {
  margin: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: 45%;
    height: 2px;
    border-radius: 1px;
    background-color: $black-color-light;
  }
  & > span {
    color: $black-color-medium;
    font-size: 12px;
  }
}
.light-payment-modal .disabled {
  background-color: $light-button-disabled;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
  width: 100%;
}
.light-payment-modal .submit:not(.disabled) {
  background-color: #000;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
  width: 100%;
  &:hover {
    background-color: $light-page-green;
  }
}

.light-payment-modal .close {
  width: 100%;
  margin-top: 12px;
  color: $black-color-medium;
}
</style>
