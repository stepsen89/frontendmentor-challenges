import React from "react";
import { connect } from "react-redux";
import { newGame } from "../../redux/actions/gameSetup.actions";
import { resetAll } from "../../redux/actions/game.actions";

function PopUpMulti({ time = "00:00", moves, newGame, resetAll }) {
  const reset = () => {
    resetAll();
  };

  const startNewGame = () => {
    newGame();
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-container">
        <div className="popup-info">
          <h2> You did it! </h2>
          <p> Here's how you got on ... </p>
        </div>

        <div className="popup-info">
          <h2> Time Elapsed </h2>
          <h2 className="popup-stat"> {time}</h2>
        </div>

        <div className="popup-info">
          <h2> Moves Taken </h2>
          <h2 className="popup-stat"> {moves}</h2>
        </div>

        <button className="btn" onClick={reset}>
          {" "}
          Restart{" "}
        </button>
        <button className="btn gray" onClick={startNewGame}>
          {" "}
          Setup New Game{" "}
        </button>
      </div>
    </div>
  );
}

export default connect(null, { newGame, resetAll })(PopUpMulti);
