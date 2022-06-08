<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";

const videoStore = useVideos();
</script>

<template>
  <SearchBar placeholder="Search for movies"/>
  <VideoList v-if="!videoStore.search" class="movies" title="Movies" :videos="videoStore.movies"/>
  <VideoList v-else class="results" :title="`Found ${videoStore.filteredMovies.length} results for '${videoStore.search}'`" :videos="videoStore.filteredMovies"/>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';
  .movies,
  .results {
    margin-top: 0.625rem;

    @include mixins.md {
      margin-top: 1.125rem;
    }
    @include mixins.lg {
      margin-top: 1.25rem;
    }
  }
</style>