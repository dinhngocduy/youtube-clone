import React from "react";
import "./video-overview.scss";
import { VideoOverview } from "./video-overview-props";
type Props = {
  video: VideoOverview;
};

const VideoOverviewComponent = (props: Props) => {
  const { video } = props;
  return (
    <div className="video-overview-ctn">
      <div className="thumbnail-ctn">
        <img src={video.thumbnail} alt="" />
      </div>
      <div className="video-info-ctn">
        <img src={video.channelId} alt="" />
        <div className="video-info">
          <p className="video-title">
            {video.title}
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoOverviewComponent;
