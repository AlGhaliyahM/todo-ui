<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
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
          <li>
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/signup"
              >Register
            </RouterLink>
          </li>

          <!-- <li>
            <button class="registerBorder">Register</button>
          </li> -->

          <!-- <li>
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/Login"
              >Login</RouterLink
            >
          </li> -->
        </ul>

        <ul class="navbar-nav">
          <li>
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/Login"
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
