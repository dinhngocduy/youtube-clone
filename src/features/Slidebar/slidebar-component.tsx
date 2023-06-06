import "./slidebar-component.scss";
import { useAppSelector } from "../../app/hooks";
import { selectSlideBarActive } from "../../app/Slices/slideBarActiveSlice";
import SlidebarItemComponent from "./slidebar-item/slidebar-item";
import {
  HomeIcon,
  YoutubeHistory,
  YoutubeLibrary,
  YoutubeShorts,
  YoutubeSub,
  YoutubeYourVideo,
} from "../../libraries/icons/icon";
import { NavLink } from "react-router-dom";
import { ENUM_PAGE } from "../../libraries/ultils/enums/page";
import { Height } from "@mui/icons-material";
const SlidebarComponent = () => {
  const slidebarActive = useAppSelector(selectSlideBarActive);

  return (
    <div
      className="slidebar-ctn"
      style={{ width: slidebarActive ? "200px" : "60px" }}
    >
      <NavLink
        to={"/"}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <HomeIcon />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : isActive ? "12px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            >
              Home
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
      <NavLink
        to={ENUM_PAGE.SHORTS}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <YoutubeShorts
              className={"shorts-icon" + (isActive ? " active" : "")}
            />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : isActive ? "12px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            >
              Shorts
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
      <NavLink
        to={ENUM_PAGE.SUBSCRIPTION}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <YoutubeSub
              fill={isActive ? "white" : "black"}
              stroke={isActive ? "none" : "white"}
            />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            >
              Subscriptions
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #3f3f3f",
          margin: "5px 0",
          display: slidebarActive ? "block" : "none",
        }}
      />
      <NavLink
        to={ENUM_PAGE.LIBRARY}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <YoutubeLibrary
              stroke={isActive ? "none" : "white"}
              fill={isActive ? "white" : "black"}
            />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            >
              Library
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
      <NavLink
        to={ENUM_PAGE.HISTORY}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive} hideable={!slidebarActive}>
            <YoutubeHistory
              stroke={isActive ? "white" : "none"}
              strokeWidth={isActive ? 3 : 1}
            />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            >
              Watched videos
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
      <NavLink
        to={ENUM_PAGE.HISTORY}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive} hideable={!slidebarActive}>
            <div style={{
              width:"20px",
              height:"20px",
              border:"1px solid white",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              paddingLeft:"2px",
              boxSizing:"border-box"
              
            }}>
              <YoutubeYourVideo/>
            </div>
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
                marginLeft: slidebarActive ? "20px" : "0",
                marginTop: slidebarActive ? "0" : "10px",
              }}
            > 
             Your videos
            </p>
          </SlidebarItemComponent>
        )}
      </NavLink>
    </div>
  );
};

export default SlidebarComponent;
