import React, { Component } from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        className="btn mx-2"
        name="query"
        placeholder="search channel"
        onChange={event => props.search(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;
