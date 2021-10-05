import React from "react";
import { ReactComponent as Logo } from "./assets/icon-moon.svg";

const Header = () => {
  let mode = "Light";
  return (
    <div className='header'>
      <h2 class='bold'> devfinder </h2>
      <div>
        <span> {mode} </span>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
