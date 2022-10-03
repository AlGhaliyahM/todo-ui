import { defineStore } from 'pinia';
import { APISettings } from '../api/config';
//To store the auth state 
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    authenticated: false,
  }),
  getters: {
    getAuth: (state) => state.authenticated,
  },
  actions: {
    // async setAuth() {
    //     this.authenticated=true
    //   },
  },
});
