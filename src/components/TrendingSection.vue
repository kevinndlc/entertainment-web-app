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
  .trending {
    &__title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      letter-spacing: -0.3px;
    }

    &__videos {
      display: flex;
      gap: 1rem;
      overflow-x: scroll;
      padding-bottom: 1rem;

      &::-webkit-scrollbar {
        height: 5px;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--clr-accent);
        border-radius: 10px;
      }
    }

    &__video { 
      flex: 0 0 15rem;
      height: 8.75rem;
      border-radius: 0.5rem 0.5rem 0 0;
      overflow: hidden;
    }

    
  }
</style>
