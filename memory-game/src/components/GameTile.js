import React, { useState, useEffect } from "react";

function GameTile({ tileContent, solved, show, guess, index }) {
  const guessTile = (e) => {
    guess(tileContent, index);
  };

  return (
    <div className="tile--container">
      <div
        className={`tile ${solved ? "solved" : ""} ${show ? "shown" : ""}`}
        onClick={guessTile}
      >
        <div>{(solved || show) && <span> {tileContent} </span>}</div>
      </div>
    </div>
  );
}

export default GameTile;
