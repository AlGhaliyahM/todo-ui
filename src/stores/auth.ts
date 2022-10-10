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
    async isAuth() {
      await fetch(APISettings.baseURL + 'user/', {
        headers: APISettings.headers,
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => (this.authenticated = data))
        .catch(() => (this.authenticated = false));
    },
  },
});
