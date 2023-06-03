import "./video-feed.scss";
import SlidebarComponent from "../Slidebar/slidebar-component";
type Props = {};

const VideoFeedComponent = (props: Props) => {
  return (
    <div className="video-feed-ctn">
      <SlidebarComponent />
    </div>
  );
};

export default VideoFeedComponent;
