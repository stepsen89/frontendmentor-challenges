import React, { useState, useEffect } from "react";
import GameTile from "./GameTile";

import { connect } from "react-redux";

import { initialiseGame, setSolved } from "../redux/actions/game.actions";
import { createRandomisedGrid } from "../utils/utils";

function Game({ game, grid, initialiseGame, setSolved }) {
  console.log(game);
  // const setGame = () => {
  //   let size = grid === "6x6" ? 36 : 16;
  //   let randomGame = createRandomisedGrid(size);
  //   console.log("randomGame", randomGame);
  //   initialiseGame(randomGame);
  // };

  useEffect(() => {
    let size = grid === "6x6" ? 36 : 16;

    // createRandomisedGrid(size);
    initialiseGame(createRandomisedGrid(size));
  }, []);

  const [tileShown, setTileShown] = useState(null);

  // const showTile = (e) => {
  //   console.log(e.target.children);
  //   return false;
  // };

  const guess = (e) => {
    console.log(e);
    console.log("tileShown currently: ", tileShown);
    if (tileShown === e) {
      alert(e);
      setSolved(e);
      setTileShown("");
    } else if (!tileShown) {
      setTileShown(e);
    } else {
      setTileShown(null);
    }
  };

  // const setAllHidden = (e) => {
  //   console.log(e);
  //   // setHasTileShown(true);
  // };

  return (
    <div className="game">
      <div className="game--area">
        {game &&
          game.map((tile, i) => (
            <GameTile
              key={i}
              tileContent={tile.value}
              show={tile.show}
              solved={tile.solved}
              // showTile={setAllHidden}
              guess={guess}
            />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let game = state.game && state.game.items;
  let grid = state.setup.setup.grid;

  return { game, grid };
};

export default connect(mapStateToProps, { initialiseGame, setSolved })(Game);
