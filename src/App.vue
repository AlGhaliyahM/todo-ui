<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="d-flex justify-content-center">
    <RouterView />
  </div>
</template>

<style scoped>
.body {
  padding: 20% 0;
}
header {
  line-height: 1.5;
  max-height: 150vh;
  padding: 1rem;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
} */
</style>
