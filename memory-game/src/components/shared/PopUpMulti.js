import React from "react";
import { connect } from "react-redux";
import { newGame } from "../../redux/actions/gameSetup.actions";
import { resetAll } from "../../redux/actions/game.actions";

function PopUpMulti({ gameResults, newGame, resetAll }) {
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
          <h2>
            {" "}
            {gameResults.winner === 1
              ? `Player ${gameResults.players[0].number} Won!`
              : "It`s a tie!"}{" "}
          </h2>
          <p> Game over! Here are the results ... </p>
        </div>

        {gameResults.players.map((player, index) => (
          <div
            className={`popup-info ${index < gameResults.winner ? "won" : ""}`}
            key={player.number}
          >
            <h2>
              {" "}
              Player {player.number}{" "}
              {index < gameResults.winner ? "(Winner!)" : ""}{" "}
            </h2>
            <h2 className="popup-stat"> {player.score} Pairs </h2>
          </div>
        ))}

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
