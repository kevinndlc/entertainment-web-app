<script setup lang="ts"></script>

<template>
  <section class="trending">
    <h2 class="trending__title">Trending</h2>

    <ul class="trending__videos">
      <li class="trending__video" :style="{backgroundImage: `url('@/assets/images/thumbnails/beyond-earth/trending')`}"></li>
      <li class="trending__video"></li>
      <li class="trending__video"></li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  .trending {
    &__title {
      font-size: 1.25rem;
    }

    &__videos {
      display: flex;
      gap: 1rem;
      // overflow-x: scroll;
    }

    &__video { 
      flex: 0 0 15rem;
      height: 8.75rem;
      border: 1px solid red;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
</style>
