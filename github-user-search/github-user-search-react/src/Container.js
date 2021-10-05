import React, { Component } from "react";
import Search from "./Search";
import UserProfile from "./UserProfile";

class Container extends Component {
  render() {
    return (
      <div class='container'>
        <Search />
        <UserProfile />
      </div>
    );
  }
}

export default Container;
