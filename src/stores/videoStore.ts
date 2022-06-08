import { defineStore } from 'pinia';
import data from '@/assets/data.json';
import type { VideoIntf } from '@/interfaces';

interface VideoState {
  videos: VideoIntf[];
  search: string;
  isLoading: boolean;
  isLoaded: boolean;
}

export const useVideos = defineStore({
  id: 'videos',
  state: (): VideoState => ({
    videos: [],
    search: '',
    isLoading: false,
    isLoaded: false,
  }),
  getters: {
    trendingVideos(state) {
      return state.videos.filter((video) => video.isTrending);
    },
    recommandedVideos(state) {
      return state.videos.filter((video) => !video.isTrending);
    },
    filteredVideos(state) {
      return state.videos.filter((video) => video.title.toLowerCase().includes(state.search));
    },
    movies(state) {
      return state.videos.filter((video) => video.category === 'Movie');
    },
    filteredMovies(state) {
      return state.videos.filter(
        (video) =>
          video.category === 'Movie' &&
          video.title.toLowerCase().includes(state.search)
      );
    },
    series(state) {
      return state.videos.filter((video) => video.category === 'TV Series');
    },
    filteredSeries(state) {
      return state.videos.filter(
        (video) =>
          video.category === 'TV Series' &&
          video.title.toLowerCase().includes(state.search)
      );
    },
    bookmarkedMovies(state) {
      return state.videos.filter(
        (video) => video.category === 'Movie' && video.isBookmarked
      );
    },
    bookmarkedSeries(state) {
      return state.videos.filter(
        (video) => video.category === 'TV Series' && video.isBookmarked
      );
    },
    filteredBookmarkedVideos(state) {
      return state.videos.filter(
        (video) =>
          video.isBookmarked && video.title.toLowerCase().includes(state.search)
      );
    },
  },
  actions: {
    fetchVideos() {
      this.isLoading = true;
      this.videos = [...data];
      this.isLoading = false;
    },
    updateSearch(search: string) {
      this.search = search.toLowerCase();
    },
    toggleBookmark(video: VideoIntf) {
      video.isBookmarked = !video.isBookmarked;
    },
  },
});

export function initialFetchVideos() {
  const videoStore = useVideos();

  if (!videoStore.isLoaded) {
    videoStore.fetchVideos();
    videoStore.isLoaded = true;
  }
}

export function resetSearch() {
  const videoStore = useVideos();

  videoStore.updateSearch('');
}