<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { APISettings } from '../api/config';

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: '',
    });

    const router = useRouter();
    const submit = async () => {
      //Send data to back end

      await fetch(APISettings.baseURL + '/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      await router.push('/login');
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
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal" style="color: white">Please Sign up</h1>

      <input
        v-model="data.name"
        class="form-control"
        placeholder="Name"
        required
      />

      <input
        v-model="data.email"
        type="email"
        class="form-control"
        placeholder="Email"
        required
      />

      <input
        v-model="data.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />

      <button
        class="w-100 btn btn-lg btn-primary"
        style="background-color: black; border-color: black"
        type="submit"
      >
        Sign up
      </button>
    </form>
  </main>
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
