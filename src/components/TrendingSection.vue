<script setup lang="ts">
import type { VideoIntf } from "@/interfaces";
import TrendingVideo from "./TrendingVideo.vue";

defineProps<{
  videos: VideoIntf[];
}>()
</script>

<template>
  <section class="trending">
    <h2 class="trending__title">Trending</h2>

    <ul class="trending__videos">
      <li v-for="video of videos" :key="video.title" class="trending__video">
        <TrendingVideo :video="video" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';

  .trending {
    padding-bottom: 1.5rem;

    @include mixins.md {
      padding-bottom: 2.5rem;
    }

    &__title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      letter-spacing: -0.3px;

      @include mixins.md {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        letter-spacing: -0.5px;
      }
    }

    &__videos {
      display: flex;
      gap: 1rem;
      overflow: auto;
      overscroll-behavior-inline: contain;
      margin-inline: -1rem;
      padding-inline: 1rem;

      &::-webkit-scrollbar {
        display: none;
      }

      @include mixins.md {
        gap: 2.5rem;
        margin-inline: -1.5rem;
        padding-inline: 1.5rem;
      }

      @include mixins.lg {
        margin-inline: -2.25rem;
        padding-inline: 2.25rem;
      }
    }

    &__video { 
      flex: 0 0 15rem;
      height: 8.75rem;
      border-radius: 0.5rem 0.5rem 0 0;
      overflow: hidden;

      @include mixins.md {
        flex-basis: 29.375rem;
        height: 14.375rem;
      }
    }

    
  }
</style>
