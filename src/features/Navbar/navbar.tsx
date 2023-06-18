import "./navbar.scss";
import {
  MenuIcon,
  NotificationIcon,
  SearchIcon,
  YoutubeIcon,
} from "../../libraries/icons/icon";
import { toggle } from "../../app/Slices/slideBarActiveSlice";
import SearchInputComponent from "../../libraries/components/searchInput/search-input";
import { useAppDispatch } from "../../app/hooks";
type Props = {
  setSearchText: any;
};

const Navbar = (props: Props) => {
  const { setSearchText } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="navbar-ctn">
      <div className="navbar-logo-ctn">
        <div
          className="navbar-menu-ctn"
          onClick={() => {
            dispatch(toggle());
          }}
        >
          <MenuIcon />
        </div>
        <div className="navbar-icon-ctn">
          <YoutubeIcon />
          <p className="navbar-logo-title">DuezTube</p>
        </div>
      </div>
      <div className="search-ctn">
        <SearchInputComponent onChange={setSearchText} />
        <div className="search-icon-ctn">
          <SearchIcon />
        </div>
      </div>
      <div className="notification-profile-ctn">
        <div className="notification-shortcut">
          <NotificationIcon />
        </div>
        <div className="profile-shortcut">
          <p>D</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
