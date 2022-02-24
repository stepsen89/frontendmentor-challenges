import React, { useState } from "react";
import { connect } from "react-redux";
import { newGame } from "../redux/actions/gameSetup.actions";
import { resetAll } from "../redux/actions/game.actions";

function Header({ newGame, resetAll }) {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuPopup = () => {
    setShowMenu(showMenu ? false : true);
  };

  const reset = () => {
    setShowMenu(false);
    resetAll();
  };

  const startNewGame = () => {
    setShowMenu(false);
    newGame();
  };

  const resumeGame = () => {
    setShowMenu(false);
  };

  const showPopupHeader = () => {
    return (
      <div class="menu">
        <div class="box">
          <div>
            <button className="btn" onClick={reset}>
              {" "}
              Restart{" "}
            </button>
          </div>
          <div>
            <button className="btn gray" onClick={startNewGame}>
              {" "}
              New Game{" "}
            </button>
          </div>
          <div>
            <button className="btn gray" onClick={resumeGame}>
              {" "}
              Resume Game{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div class="header">
        <div class="flex">
          {/* <div> */}
          <img src="/images/logo.svg" alt="" />
          {/* </div> */}
          <div className="mobile">
            <button class="btn small" onClick={showMenuPopup}>
              {" "}
              Menu{" "}
            </button>
          </div>
          <div className="tablet">
            <div>
              <button className="btn" onClick={reset}>
                {" "}
                Restart{" "}
              </button>
            </div>
            <div>
              <button className="btn gray" onClick={startNewGame}>
                {" "}
                New Game{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMenu && showPopupHeader()}
    </>
  );
}

export default connect(null, { newGame, resetAll })(Header);
