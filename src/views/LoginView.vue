<script lang="ts">
import { APISettings } from '../api/config';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const data = reactive({
      email: '',
      password: '',
    });

    const router = useRouter();

    const submit = async () => {
      //Send data to back end

      await fetch(APISettings.baseURL + '/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // to get the cookie
        body: JSON.stringify(data),
      });

      await router.push('/');
      //console.log(data);
    };
    return {
      data,
      submit,
    };
  },
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
  /* display: flex; */
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /* background-color: #f5f5f5; */
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
