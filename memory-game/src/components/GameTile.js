import React, { useState } from "react";

function GameTile({ tileContent, solved, showTile, guess }) {
  const [show, setShow] = useState(false);
  // console.log(showTile);

  const guessTile = (e) => {
    guess(tileContent);
    setShow(true);
  };

  return (
    <div className="tile--container" onClick={guessTile}>
      <div className="tile">{(solved || show) && <h2> {tileContent} </h2>}</div>
    </div>
  );
}

export default GameTile;
