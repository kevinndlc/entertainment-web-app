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
  @include mixins.lg {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
    overflow-y: hidden;
    padding: 2rem;
    padding-right: 0;
  }
}

.main {
  padding: 1.5rem 1rem 4rem;

  @include mixins.md {
    padding: 2rem 1.5rem 3.25rem;
  }

  @include mixins.lg {
    padding-inline: 2.25rem;
    margin-bottom: -2rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
