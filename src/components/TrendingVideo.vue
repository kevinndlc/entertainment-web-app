<script setup lang="ts">
import type { VideoIntf } from '@/interfaces';
import { onMounted, ref } from 'vue';
import MoviesIcon from './Icons/MoviesIcon.vue';
import TvIcon from './Icons/TvIcon.vue';

import image from '@/assets/images/thumbnails/beyond-earth/trending/small.jpg';

const props = defineProps<{
  video: VideoIntf;
}>();
</script>

<template>
  <div class="video" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="video__content">
      <div class="video__info">
        <div class="video__year">{{ video.year }}</div>
        <div class="dot"></div>
        <div class="video__category">
          <MoviesIcon v-if="video.category === 'Movie'" /> <TvIcon v-else />
          {{ video.category }}
        </div>
        <div class="dot"></div>
        <div class="video__rating">{{ video.rating }}</div>
      </div>
      <h3 class="video__title">{{ video.title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.video {
  height: 100%;
  // background-image: url('@/assets/images/thumbnails/beyond-earth/trending/small.jpg');
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__content {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    padding: 1rem;

    .dot {
      width: 3px;
      aspect-ratio: 1;
      background-color: var(--clr-text);
      border-radius: 50%;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.75;
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
  }
  &__category {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    svg {
      width: 0.75rem;
    }
  }
  &__title {
    font-size: calc(15rem / 16);
  }
}
</style>
