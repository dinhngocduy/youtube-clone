import "./video-feed.scss";
import SlidebarComponent from "../Slidebar/slidebar-component";
import { v4 as uuid } from "uuid";
import { VideoOverview } from "./components/video-overview-props";
import VideoOverviewComponent from "./components/video-overview-component";
type Props = {};

const VideoFeedComponent = (props: Props) => {
  const videoList: VideoOverview[] = [
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },

    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId: uuid(),
      views: 3400,
      createdAt: "15 minutes ago",
    },
    {
      id: uuid(),
      thumbnail:
        "https://i.ytimg.com/vi/q5DBN-wWOEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2dONFe8SeBCScDF4Gb1whTknVw",
      title: "Take Your Bets! Who's The Father? | House M.D.",
      channelName: "House M.D.",
      channelId:
        "https://yt3.ggpht.com/ytc/AGIKgqNkCooudKEIk6MEJTIkBhmyDq1dU8zdJCxEDqiT=s68-c-k-c0x00ffffff-no-rj",
      views: 3400,
      createdAt: "15 minutes ago",
    },
  ];
  console.log(videoList);
  return (
    <div className="video-feed-ctn">
      <SlidebarComponent />
      <div className="video-feed-body">
        <p>New Videos</p>
        <div className="video-feed-list">
          {videoList.map((video: VideoOverview) => (
            <VideoOverviewComponent video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoFeedComponent;
