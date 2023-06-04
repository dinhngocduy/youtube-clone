import { selectSlideBarActive } from "../../../app/Slices/slideBarActiveSlice";
import { useAppSelector } from "../../../app/hooks";
import "./slidebar-item.scss";
type Props = {
  children: any;
  isActive: boolean;
  hideable?: boolean;
};

const SlidebarItemComponent = (props: Props) => {
  const { children, isActive, hideable } = props;
  const slidebarActive = useAppSelector(selectSlideBarActive);

  return (
    <div
      className={"slidebar-item-ctn" + (isActive ? " active" : "")}
      style={{
        backgroundColor: isActive ? "#222222" : "",
        flexDirection: slidebarActive ? "row" : "column",
        display: hideable ? "none" : "flex",
      }}
    >
      {children}
    </div>
  );
};

export default SlidebarItemComponent;
