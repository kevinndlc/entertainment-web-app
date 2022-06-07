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

const videoStore = useVideos();

function toggleBookmark() {
  videoStore.toggleBookmark(props.video)
}

const images = import.meta.globEager('@/assets/images/thumbnails/*/trending/small.jpg');
const backgroundImageInlineStyle = computed(() => `background-image: url(${images[props.video.thumbnail.trending!.small.replace('@', '..')].default})`)
</script>

<template>
  <div class="video" :style="backgroundImageInlineStyle">
    <button class="video__bookmark-btn" @click="toggleBookmark">
      <BookmarkFullIcon v-if="video.isBookmarked" />
      <BookmarkEmptyIcon v-else />
    </button>
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
@use '@/assets/scss/mixins';

.video {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

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
      right: 1.5rem;
    }

    svg {
      height: 0.875rem;
    }
  }

  &__content {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    padding: 1rem;

    @include mixins.md {
      padding: 1.5rem;
    }

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

    @include mixins.md {
      font-size: calc(15rem / 16);
    }
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

    @include mixins.md {
      font-size: 1.5rem;
    }
  }
}
</style>
