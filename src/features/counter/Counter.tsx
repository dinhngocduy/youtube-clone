import ReactPlayer from "react-player";
import SlidebarComponent from "../Slidebar/slidebar-component";
import { useLocation, useParams } from "react-router-dom";
import { log } from "console";

export function Counter() {
  const url = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <SlidebarComponent />
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${url.id}`}
        playing={true}
        // loop={true}
        controls={true}
        config={{
          file: {
            tracks: [
              {
                label: "",
                kind: "subtitles",
                src: "subs/subtitles.en.vtt",
                srcLang: "en",
                default: true,
              },
              {
                label: "",
                kind: "subtitles",
                src: "subs/subtitles.ja.vtt",
                srcLang: "ja",
              },
              {
                label: "",
                kind: "subtitles",
                src: "subs/subtitles.de.vtt",
                srcLang: "de",
              },
            ],
          },
        }}
      />
    </div>
  );
}
