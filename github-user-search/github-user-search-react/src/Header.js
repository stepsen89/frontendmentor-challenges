import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ReactComponent as Moon } from "./assets/icon-moon.svg";
import { ReactComponent as Sun } from "./assets/icon-sun.svg";
import { setTheme } from "./redux/action";

const Header = ({ theme, setTheme }) => {
  const [chosenTheme, setChosenTheme] = useState(theme);

  const handleThemeChange = (e) => {
    let newTheme = chosenTheme === "light" ? "dark" : "light";
    setChosenTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className='header'>
      <h2 className='bold'> devfinder </h2>
      <button className='switcher' onClick={handleThemeChange}>
        <span> {chosenTheme === "light" ? "dark" : "light"} </span>
        {chosenTheme === "light" ? (
          <Moon className='icon' />
        ) : (
          <Sun className='icon' />
        )}
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  const theme = state.theme.theme;
  return { theme };
}

export default connect(mapStateToProps, { setTheme })(Header);
