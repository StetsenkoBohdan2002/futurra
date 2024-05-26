import { defineStore } from 'pinia';

interface InitStoreState {
  userVar: string | null; 
  modalStatus: boolean;
}

export const useInitStore = defineStore('init', {
  state: (): InitStoreState => ({
    userVar: null,
    modalStatus: false,
  }),
  getters: {
    getUserVar: (state): string | null => {
      return state.userVar;
    },
    getModalStatus: (state): boolean => {
      return state.modalStatus;
    },
  },
  actions: {
    setModalStatus(value: boolean) {
      this.modalStatus = value;
    },
    setUserVar(value: string) {
      let userVar = useCookie('userVar');
      userVar.value = value;
      this.userVar = value;
    },
  },
});
