import React from "react";
import { ReactComponent as Icon } from "./assets/icon-search.svg";

const Search = () => {
  return (
    <div class='search'>
      <Icon class='icon' />
      <input placeholder='Search GitHub username...' />
      <button class='btn bold'> Search </button>
    </div>
  );
};

export default Search;
