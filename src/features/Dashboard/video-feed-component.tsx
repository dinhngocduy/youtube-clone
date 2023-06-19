import "./video-feed.scss";
import SlidebarComponent from "../Slidebar/slidebar-component";
import VideoOverviewComponent from "./components/video-overview-component";
import { useEffect, useState } from "react";
import axios from "axios";
import { VideoList } from "../../libraries/types/listVideo";
import { KeyValue } from "../../libraries/types/keyValues";
type Props = {
  searchText: string;
  setSearchText: any;
};

const VideoFeedComponent = (props: Props) => {
  const { searchText, setSearchText } = props;
  const [videoList, setVideoList] = useState<VideoList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [selectedCategory, setSelectedCategory]
  const categoryList: KeyValue[] = [
    {
      value: "All",
      key: "",
    },
    {
      value: "Movies",
      key: "Movies",
    },
    {
      value: "Music",
      key: "Music",
    },
    {
      value: "Dramas",
      key: "Dramas",
    },
    {
      value: "Gaming",
      key: "Gaming",
    },
    {
      value: "Masterchef",
      key: "Masterchef",
    },
    {
      value: "Dota 2",
      key: "Dota 2",
    },
    {
      value: "Computer programming",
      key: "Computer programming",
    },
    {
      value: "FNAF",
      key: "FNAF",
    },
    {
      value: "Live",
      key: "Live",
    },
    {
      value: "Reactjs",
      key: "Reactjs",
    },
    {
      value: "Android studio",
      key: "Android studio",
    },
    {
      value: "Macbook",
      key: "Macbook",
    },
    {
      value: "Gordon Ramsay",
      key: "Gordon Ramsay",
    },
    {
      value: "Medical dramas",
      key: "Medical dramas",
    },
    {
      value: "Scene",
      key: "Scene",
    },
  ];
  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: searchText,
        part: "snippet,id",
        regionCode: "",
        maxResults: "300",
        // order: "date",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setVideoList(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchText]);

  return (
    <div className="video-feed-ctn">
      <SlidebarComponent />
      <div className="video-feed-body">
        <div className="categories-ctn">
          {categoryList.map((category) => (
            <div
              className={
                "video-category" +
                (searchText === category.key ? " active" : "")
              }
              key={category.key}
              onClick={() => {
                setSearchText(category.key);
              }}
            >
              <p>{category.value}</p>
            </div>
          ))}
        </div>
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div className="video-feed-list">
            {videoList?.map((video: VideoList) => (
              <VideoOverviewComponent video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoFeedComponent;
