<script setup lang="ts">
import type { VideoIntf } from '@/interfaces';
import MoviesIcon from './Icons/MoviesIcon.vue';
import TvIcon from './Icons/TvIcon.vue';

import BookmarkFullIcon from './Icons/BookmarkFullIcon.vue';
import BookmarkEmptyIcon from './Icons/BookmarkEmptyIcon.vue';
import { computed } from 'vue';
import { useVideos } from '@/stores/videoStore';

const props = defineProps<{
  video: VideoIntf;
}>();

const images = import.meta.globEager(
  '@/assets/images/thumbnails/*/regular/small.jpg'
);
const backgroundImageInlineStyle = computed(
  () =>
    `background-image: url(${
      images[props.video.thumbnail.regular.small.replace('@', '..')].default
    })`
);

const videoStore = useVideos();

function toggleBookmark() {
  videoStore.toggleBookmark(props.video)
}
</script>

<template>
  <div class="video">
    <div class="video__card" :style="backgroundImageInlineStyle">
      <button class="video__bookmark-btn" @click="toggleBookmark">
        <BookmarkFullIcon v-if="video.isBookmarked" />
        <BookmarkEmptyIcon v-else />
      </button>
    </div>
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
</template>

<style scoped lang="scss">
@use '@/assets/scss/mixins';
.video {
  &__card {
    position: relative;
    height: 110px;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
    margin-bottom: 0.5em;

    @include mixins.md {
      height: 140px;
    }
  }

  &__bookmark-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    background-color: hsl(223deg 30% 9% / 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    @include mixins.md {
      top: 1rem;
      right: 1rem;
    }

    svg {
      height: 0.875rem;
      opacity: 1;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    opacity: 0.75;
    margin-bottom: 0.25rem;
    font-size: calc(11rem / 16);

    @include mixins.md {
      gap: 0.5rem;
      margin-bottom: 5px;
      font-size: calc(13rem / 16);
    }

    .dot {
      width: 2px;
      aspect-ratio: 1;
      background-color: var(--clr-text);
      border-radius: 50%;

      @include mixins.md {
        width: 3px;
      }
    }
  }

  &__category {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    @include mixins.md {
      gap: 0.375rem;
    }

    svg {
      width: 0.625rem;

      @include mixins.md {
        width: 0.75rem;
      }
    }
  }

  &__title {
    font-size: 0.875rem;

    @include mixins.md {
      font-size: 1.125rem;
    }
  }
}
</style>
