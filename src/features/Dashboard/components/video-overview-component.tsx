import "./video-overview.scss";
import { MenuDots } from "../../../libraries/icons/icon";
import { VideoList } from "../../../libraries/types/listVideo";
import moment from "moment";
type Props = {
  video: VideoList;
};

const VideoOverviewComponent = (props: Props) => {
  const { video } = props;

  return (
    <div className="video-overview-ctn" key={video.id.videoId}>
      <div className="thumbnail-ctn">
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="video-info-ctn">
        <div className="menu-dots">
          <MenuDots />
        </div>
        <img src={video.snippet.thumbnails.default.url} alt="" />
        <div className="video-info">
          <p className="video-title">
            {video.snippet.title.length > 60
              ? video.snippet.title.substring(0, 60).concat("...")
              : video.snippet.title}
          </p>
          {/* <p className="channel-title">{video.snippet.channelTitle}</p> */}
          <div className="views-createdAt">
            <span className="channel-title">{video.snippet.channelTitle}</span>
            <span className="video-createdAt">
              {moment(video.snippet.publishTime).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOverviewComponent;
