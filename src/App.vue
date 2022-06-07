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

<style>
@import '@/assets/scss/base.scss';
@import '@/assets/scss/utilities.scss';

.main {
  padding: 1.5rem 1rem 4rem;
}
</style>
