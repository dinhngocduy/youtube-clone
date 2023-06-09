import { selectSlideBarActive } from "../../../app/Slices/slideBarActiveSlice";
import { useAppSelector } from "../../../app/hooks";
import "./slidebar-item.scss";
type Props = {
  children: any;
  isActive: boolean;
};

const SlidebarItemComponent = (props: Props) => {
  const { children, isActive } = props;
  const slidebarActive = useAppSelector(selectSlideBarActive);

  return (
    <div
      className={"slidebar-item-ctn"}
      style={{
        backgroundColor: isActive ? "#222222" : "",
        flexDirection: slidebarActive ? "row" : "column",
      }}
    >
      {children}
    </div>
  );
};

export default SlidebarItemComponent;
