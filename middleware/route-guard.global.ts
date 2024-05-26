import type { RouteLocationNormalized } from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const initStore = useInitStore();
  const userVar = useCookie<string>('userVar');

  const getRandomVar = (): string => (Math.random() < 0.5 ? 'var1' : 'var2');

  if (to.query.abtest === 'test') {
    if (!userVar.value && !initStore.getUserVar) {
      const randomVar = getRandomVar();
      userVar.value = randomVar;
      initStore.setUserVar(randomVar);
      return navigateTo(`?abtest=${randomVar}`);
    } else if (userVar.value && !initStore.getUserVar) {
      initStore.setUserVar(userVar.value);
      return navigateTo(`?abtest=${userVar.value}`);
    }
  } else if (!userVar.value && !initStore.getUserVar) {
    return navigateTo(`?abtest=test`);
  } else if (userVar.value && !initStore.getUserVar) {
    initStore.setUserVar(userVar.value);
    return navigateTo(`?abtest=${userVar.value}`);
  }
});
