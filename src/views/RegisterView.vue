<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { APISettings } from '../api/config';
import { useAuthStore } from '../stores/auth';
import { useToast } from 'bootstrap-vue-3';

const toast = useToast();
const authStore = useAuthStore();
const data = reactive({
  name: '',
  email: '',
  password: '',
  toastMsg: '',
  toastVarient: 'danger',
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
    .then((response) => {
      data.toastMsg = response.message;
    })
    .then(() => {
      toast?.show(
        { title: 'Error', body: data.toastMsg },
        {
          pos: 'top-center',
          variant: data.toastVarient,
          append: false,
          // delay: 1200,
        },
      );
    })
    .catch((err) => err.message);
  await authStore.isAuth();
  if (authStore.getAuth) await router.push('/');
};
</script>

<template>
  <b-container :toast="{ root: true }" fluid="sm" position="position-fixed">
  </b-container>
  <div class="container blackContainer" style="border-radius: 15px">
    <form @submit.prevent="submit">
      <h1 class="textBox">Register new Account</h1>
      <h6
        style="
          color: #ffffff;
          font-weight: 300;
          font-size: 16px;
          text-align: center;
          padding-bottom: 2rem;
        "
      >
        Already have an account?
        <RouterLink
          style="color: #ffffff; font-weight: 500; text-decoration: none"
          to="/Login"
        >
          Login</RouterLink
        >
      </h6>

      <div class="inputContainer">
        <input
          v-model="data.name"
          class="inputField"
          placeholder="Name"
          required
        />

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

        <button class="submitBtn" type="submit">Register Account</button>
      </div>
    </form>
  </div>
</template>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
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
}
</style>
