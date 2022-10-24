<script lang="ts" setup>
import { APISettings } from '../api/config';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useToast } from 'bootstrap-vue-3';

const toast = useToast();

const authStore = useAuthStore();
const data = reactive({
  email: '',
  password: '',
  toastMsg: [] as string[],
  toastVarient: '',
});

const router = useRouter();

const submit = async () => {
  //Send data to back end
  await fetch(APISettings.baseURL + 'user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // to get the cookie
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status == 401 || res.status == 404) {
        data.toastMsg[0] = 'Error';
        data.toastVarient = 'danger';
      }
      if (res.status == 201) {
        data.toastMsg[0] = 'success';
        data.toastVarient = 'success';
      }

      return res.json();
    })
    .then((response) => {
      data.toastMsg[1] = response.message;
    })
    .then(() => {
      toast?.show(
        { title: data.toastMsg[0], body: data.toastMsg[1] },
        {
          pos: 'top-center',
          variant: data.toastVarient,
          append: false,
          delay: 1200,
        },
      );
    })
    .catch((err) => err.message);

  await authStore.isAuth();
  if (authStore.getAuth) await router.push('/');
};
</script>

<template>
  <b-container
    :toast="{ root: true }"
    fluid="sm"
    position="position-fixed"
    style="top: 50px; left: -200px"
  >
  </b-container>
  <div
    class="container blackContainer col col-md-6"
    style="border-radius: 15px"
  >
    <form @submit.prevent="submit">
      <h1 class="textBox">Log in to Your Account</h1>

      <h6
        style="
          color: #ffffff;
          font-weight: 300;
          font-size: 16px;
          text-align: center;
        "
      >
        Don't have an account?
        <RouterLink
          style="color: #ffffff; font-weight: 500; text-decoration: none"
          to="/register"
        >
          register</RouterLink
        >
      </h6>

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
