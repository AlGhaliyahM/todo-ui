<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

//the path does not update when the actual path does
//need to fix it to complete
const URL = window.location.href;
const path = URL.split('/').pop();
console.log(path);
const authStore = useAuthStore();

authStore.isAuth();
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark">
    <div class="container-md">
      <a class="navbar-brand"
        ><RouterLink class="nav-link" to="/" style="font-weight: 600"
          >TODO</RouterLink
        ></a
      >
      <div class="navbar" id="navbarNav">
        <ul class="navbar-nav">
          <!-- if we are in the login page show the register route  -->
          <li
            v-if="authStore.$state.authenticated == false && path === 'Login'"
          >
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/register"
              >Register
            </RouterLink>
          </li>
          <!-- if we are in the register page show the login route  -->
          <li
            v-if="
              authStore.$state.authenticated == false && path === 'register'
            "
          >
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/Login"
              >Login</RouterLink
            >
          </li>
        </ul>
        <!-- show the logout route if we are in the todo page -->
        <ul class="navbar-nav" v-if="authStore.$state.authenticated == true">
          <li style="color: gray; font-weight: 600" class="nav-link">
            username
          </li>
          <li>
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/Login"
              v-on:click="authStore.logout()"
              >Logout</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <hr /> -->
</template>

<style>
.registerBorder {
  border-radius: 15px;
  border-color: #c6bbf8;
  background-color: #212328;
  /* border-width: 2px; */
  width: 135px;
  height: 50px;
  color: #ffffff;
}
</style>
