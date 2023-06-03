import React from "react";
import "./search-input.scss";
type Props = {
  onChange: any;
};

const SearchInputComponent = (props: Props) => {
  const { onChange } = props;
  return (
    <input
      type="text"
      className="input-ctn"
      onChange={onChange}
      placeholder="Search..."
    />
  );
};

export default SearchInputComponent;
