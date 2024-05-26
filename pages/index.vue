<template>
  <div class="page">
    <div class="page-wrapper">
      <ClientOnly>
        <component :is="currentPage" />
      </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="ts">
const lightDesign = resolveComponent('LightDesign');
const darkDesign = resolveComponent('DarkDesign');

let currentPage: any = ref(null);
const router = useRouter();
const route = useRoute();
onMounted((): void => {
  const currentVar = route.query.abtest as string | undefined;
  switch (currentVar) {
    case 'var1':
      currentPage = lightDesign;
      break;
    case 'var2':
      currentPage = darkDesign;
      break;
  }
});
</script>
<style lang="scss">
.page {
  height: 100vh;
  overflow-y: auto;
  &-wrapper {
    width: 100%;
  }
}
</style>
