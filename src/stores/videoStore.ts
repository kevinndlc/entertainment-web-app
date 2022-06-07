import { defineStore } from 'pinia';
import data from '@/assets/data.json';
import type { VideoIntf } from '@/interfaces';

interface VideoState {
  videos: VideoIntf[];
  isLoading: boolean;
  isLoaded: boolean;
}

export const useVideos = defineStore({
  id: 'videos',
  state: (): VideoState => ({
    videos: [],
    isLoading: false,
    isLoaded: false,
  }),
  getters: {
    trendingVideos(state) {
      return state.videos.filter(video => video.isTrending)
    }
  },
  actions: {
    fetchVideos() {
      this.isLoading = true;

      this.videos = [ ...data ];

      this.isLoading = false;
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
