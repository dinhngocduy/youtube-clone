import React from "react";
import "./search-input.scss";
type Props = {
  onChange: any;
};

const SearchInputComponent = (props: Props) => {
  const { onChange } = props;
  return (
    <form action="#">
      <input
        type="text"
        className="input-ctn"
        onChange={onChange}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInputComponent;
