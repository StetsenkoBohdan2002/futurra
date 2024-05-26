<template>
  <div class="progress-timer" :class="{ danger: time <= 10 && time > 0 }">
    <div class="progress-timer__bg" :style="{ 'animation-duration': initialTime + 's' }"></div>
    <span class="progress-timer__value font-semibold"> {{ formattedTime }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['initialTime', 'time', 'timer']);
const emit = defineEmits(['changeTime']);
const updatedTransform: Ref<string> = ref('');
let timer: Ref<ReturnType<typeof setTimeout> | undefined> = ref(undefined);

const startTimer = (): void => {
  timer.value = setInterval(() => {
    if (props.time > 0) {
      emit('changeTime', props.time - 1);
    } else {
      clearInterval(timer.value);
    }
  }, 1000);
};

onMounted((): void => {
  const width: number = document.body.offsetWidth < 700 ? 110 : 160;
  if (localStorage['time']) {
    updatedTransform.value = -(100 - (((width / 180) * +localStorage['time']) / width) * 100) + 'px';
  }
});

const formattedTime = computed((): string => {
  const minutes: string = String(Math.floor(props.time / 60)).padStart(2, '0');
  const seconds: string = String(props.time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
});

onMounted((): void => {
  startTimer();
});
onUnmounted((): void => {
  clearInterval(timer.value);
});
</script>
<style lang="scss">
.progress-timer {
  width: 160px;
  background-color: #000;
  border-radius: 12px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &.danger {
    transition: all 0.3s ease-in-out;
    border: 2px solid $page-error;
    box-shadow: 0 0 6px rgba($page-error, 0.8);
  }
  &__bg {
    animation-name: progressTime;
    animation-timing-function: linear;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    z-index: 0;
    border-radius: 12px;
  }
  &__value {
    position: relative;
    z-index: 1;
    font-size: 24px;
    color: #fff;
  }
}

.light-page .progress-timer {
  &__bg {
    background-color: $light-page-green;
  }
}
.dark-page .progress-timer {
  &__bg {
    background-color: $dark-page-primary;
  }
}

@keyframes progressTime {
  0% {
    width: 160px;
    transform: translateX(v-bind(updatedTransform));
  }
  99% {
    width: 160px;
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(-100%);
    width: 0px;
  }
}

@keyframes progressTimeMobile {
  0% {
    width: 110px;
    transform: translateX(v-bind(updatedTransform));
  }
  99% {
    width: 110px;
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(-100%);
    width: 0px;
  }
}

@media screen and (max-width: 700px) {
  .progress-timer {
    width: 110px;
    &__bg {
      animation-name: progressTimeMobile;
    }
  }
}
</style>
