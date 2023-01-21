import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    counter: 0,
    darkMode: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getDarkMode: (state) => state.darkMode,
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});
