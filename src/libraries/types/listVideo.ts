export interface VideoList {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: VideoListSnippet;
}

export interface VideoListSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: VideoThumbNail;
  title: string;
}
export interface VideoThumbNail {
  default: VideoThumbNailSetting;
  high: VideoThumbNailSetting;
  medium: VideoThumbNailSetting;
}
export interface VideoThumbNailSetting {
  height: number;
  url: string;
  width: number;
}
