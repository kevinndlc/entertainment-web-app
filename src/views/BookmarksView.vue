<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";

const videoStore = useVideos();
</script>

<template>
  <SearchBar placeholder="Search for bookmarked shows"/>
  <div class="bookmarked-videos" v-if="!videoStore.search">
    <h2 v-if="videoStore.filteredBookmarkedVideos.length === 0" class="no-bookmark">
      You currenly have no bookmark.
    </h2>
    <VideoList v-if="videoStore.bookmarkedMovies.length > 0" class="bookmarked-movies" title="Bookmarked Movies" :videos="videoStore.bookmarkedMovies"/>
    <VideoList v-if="videoStore.bookmarkedSeries.length > 0" class="bookmarked-tv-series" title="Bookmarked TV Series" :videos="videoStore.bookmarkedSeries"/>
  </div>
  <VideoList v-else class="results" :title="`Found ${videoStore.filteredBookmarkedVideos.length} results for '${videoStore.search}'`" :videos="videoStore.filteredBookmarkedVideos"/>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';
  .bookmarked-videos,
  .results {
    margin-top: 0.625rem;

    @include mixins.md {
      margin-top: 1.125rem;
    }
    @include mixins.lg {
      margin-top: 1.25rem;
    }
  }
  .bookmarked-videos {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .no-bookmark {
    font-size: 1.25rem;

    @include mixins.md {
      font-size: 2rem;
    }
  }
</style>