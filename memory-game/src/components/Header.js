import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuPopup = () => {
    setShowMenu(showMenu ? false : true);
  };
  return (
    <>
      <div class="header">
        <div class="flex">
          {/* <div> */}
          <img src="/images/logo.svg" alt="" />
          {/* </div> */}
          <div>
            <button class="btn small" onClick={showMenuPopup}>
              {" "}
              Menu{" "}
            </button>
          </div>
        </div>
      </div>
      {showMenu && <Menu close={showMenuPopup} />}
    </>
  );
}

function Menu({ close }) {
  const resetGame = () => {
    close();
  };

  const startNewGame = () => {
    close();
  };

  const resumeGame = () => {
    close();
  };

  return (
    <div class="menu">
      <div class="box">
        <div>
          <button className="btn" onClick={resetGame}>
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
}

export default Header;
