import React from "react";
import { ReactComponent as Icon } from "./assets/icon-search.svg";

const Search = () => {
  return (
    <div className='search'>
      <Icon className='icon' />
      <input placeholder='Search GitHub username...' />
      <button className='btn bold'> Search </button>
    </div>
  );
};

export default Search;
