<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { APISettings } from '../api/config';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const data = reactive({
  name: '',
  email: '',
  password: '',
});

const router = useRouter();

const submit = async () => {
  //Send data to back end

  await fetch(APISettings.baseURL + 'user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // to get the cookie
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err.message);
  await authStore.isAuth();
  if (authStore.getAuth) await router.push('/');
};
</script>
<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Register your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <RouterLink
            to="/login"
            class="font-medium text-cyan-600 hover:text-cyan-500"
          >
            Login to your account</RouterLink
          >
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="name"
              autocomplete="name"
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
              placeholder="name"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="data.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="data.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
