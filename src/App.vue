<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <main class="main">
    <RouterView />
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';
@import '@/assets/scss/base.scss';
@import '@/assets/scss/utilities.scss';

#app {
  overflow-x: hidden;
}

.main {
  padding: 1.5rem 1rem 4rem;

  @include mixins.md {
    padding: 2rem 1.5rem 4rem;
  }
}
</style>
