import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search friends"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
