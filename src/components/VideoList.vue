<script setup lang="ts">
import type { VideoIntf } from '@/interfaces';
import VideoCard from './VideoCard.vue';

defineProps<{
  title: string;
  videos: VideoIntf[];
}>();
</script>

<template>
  <section class="videos">
    <h2 class="videos__title">{{ title }}</h2>
    <ul class="videos__list">
      <li v-for="video of videos" class="videos__item">
        <VideoCard :video="video"/>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/mixins';

.videos {
  &__title {
    font-size: 1.25rem;
    letter-spacing: -0.3px;
    margin-bottom: 1.5rem;

    @include mixins.md {
      font-size: 2rem;
      letter-spacing: -0.5px;
    }

    @include mixins.lg {
      margin-bottom: 2rem;
    }
  }
  &__list {
    --column-count: 2;
    display: grid;
    grid-template-columns: repeat(var(--column-count), 1fr);
    gap: 1rem;

    @include mixins.md {
      --column-count: 3;
      row-gap: 1.5rem;
      column-gap: 1.875rem;
    }

    @include mixins.lg {
      --column-count: 4;
      row-gap: 2rem;
      column-gap: 2.5rem;
    }

    @include mixins.xl {
      --column-count: 5;
    }

    @include mixins.xxl {
      --column-count: 6;
    }
  }
}

</style>
