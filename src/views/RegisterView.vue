<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { APISettings } from '../api/config';

const data = reactive({
  name: '',
  email: '',
  password: '',
});

const router = useRouter();
const submit = async () => {
  //Send data to back end
  let status = 401;
  await fetch(APISettings.baseURL + 'user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // to get the cookie
    body: JSON.stringify(data),
  })
    .then((respones) => (status = respones.status))
    .catch((err) => console.log(err.message));

  if (status === 201) await router.push('/');
};
</script>

<template>
  <div class="blackContainer">
    <form @submit.prevent="submit">
      <h1 class="textBox">Register new Account</h1>

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

      <div style="display: flex; flex-direction: row">
        <h6 style="margin-left: 20px; color: #ffffff; font-weight: 300">
          Already have an account?
          <RouterLink
            style="color: #95d3f8; font-weight: 500; text-decoration: none"
            to="/Login"
          >
            Login</RouterLink
          >
        </h6>
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
