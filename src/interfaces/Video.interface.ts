export interface VideoIntf {
  category: Category | string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: ThumbnailIntf;
  title: string;
  year: number;
}

type Category = 'Movie' | 'TV Series';

interface ThumbnailIntf {
  regular: ThumbnailSizeIntf;
  trending?: ThumbnailSizeIntf;
}

interface ThumbnailSizeIntf {
  large: string;
  medium?: string;
  small: string;
}