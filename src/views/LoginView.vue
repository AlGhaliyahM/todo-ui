<script lang="ts" setup>
import { APISettings } from '../api/config';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import VueBasicAlert from 'vue-basic-alert';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const data = reactive({
  email: '',
  password: '',
});

const router = useRouter();

const submit = async () => {
  //Send data to back end
  await fetch(APISettings.baseURL + 'user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // to get the cookie
    body: JSON.stringify(data),
  }).catch((err) => console.log(err.message));

  await authStore.isAuth();
  if (authStore.getAuth) await router.push('/');
};
</script>

<template>
  <div class="blackContainer">
    <form @submit.prevent="submit">
      <h1 class="textBox">Log in to Your Account</h1>

      <div class="inputContainer">
        <input
          v-model="data.email"
          type="email"
          class="inputField"
          placeholder="Email"
          required
        />

        <input
          v-model="data.password"
          type="password"
          class="inputField"
          placeholder="Password"
          required
        />

        <button class="submitBtn" type="submit">Login to Your Account</button>
      </div>
    </form>
  </div>
</template>

<style>
body {
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
/* 
.form-signin {
  max-width: 330px;
  padding: 15px;
  color: grey;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
} */
</style>
