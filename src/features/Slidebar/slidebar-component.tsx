import React from "react";
import "./slidebar-component.scss";
import { useAppSelector } from "../../app/hooks";
import { selectSlideBarActive } from "../../app/Slices/slideBarActiveSlice";
import SlidebarItemComponent from "./slidebar-item/slidebar-item";
import { HomeIcon } from "../../libraries/icons/icon";
import { NavLink } from "react-router-dom";
import { ENUM_PAGE } from "../../libraries/ultils/enums/page";
const SlidebarComponent = () => {
  const slidebarActive = useAppSelector(selectSlideBarActive);

  return (
    <div
      className="slidebar-ctn"
      style={{ width: slidebarActive ? "200px" : "50px" }}
    >
      <NavLink
        to={ENUM_PAGE.DASHBOARD}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <HomeIcon />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
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
            <HomeIcon />
            <p
              style={{
                fontSize: slidebarActive ? "15px" : "10px",
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
        to={ENUM_PAGE.SHORTS}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <HomeIcon />
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
      <NavLink
        to={ENUM_PAGE.SHORTS}
        className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
      >
        {({ isActive }) => (
          <SlidebarItemComponent isActive={isActive}>
            <HomeIcon />
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
    </div>
  );
};

export default SlidebarComponent;
