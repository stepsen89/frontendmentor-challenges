import React, { useState, useEffect } from "react";
import GameTile from "./GameTile";

import { connect } from "react-redux";

import { initialiseGame, setSolved } from "../redux/actions/game.actions";
import { createRandomisedGrid } from "../utils/utils";

function Game({ game, grid, initialiseGame, setSolved }) {
  // const setGame = () => {
  //   let size = grid === "6x6" ? 36 : 16;
  //   let randomGame = createRandomisedGrid(size);
  //   console.log("randomGame", randomGame);
  //   initialiseGame(randomGame);
  // };

  const [gameArea, setGameArea] = useState({});
  const [prevTry, setPrevTry] = useState(null);
  const [prevTryPos, setPrevTryPos] = useState(null);

  const [shownIndex, setShownIndex] = useState([]);
  const [solvedIndices, setSolvedIndices] = useState([]);
  useEffect(() => {
    let size = grid === "6x6" ? 36 : 16;

    let currentGame = createRandomisedGrid(size);
    initialiseGame(currentGame);
    setGameArea(currentGame);
  }, []);

  // const showTile = (e) => {
  //   console.log(e.target.children);
  //   return false;
  // };

  const guess = (e, index) => {
    // push index to shown index to show both tiles
    shownIndex.length < 2
      ? setShownIndex((oldArray) => [...oldArray, index])
      : setShownIndex([index]);

    // when no previous try is set, set previous try
    if (!prevTry) {
      setPrevTry(e);
      setPrevTryPos(index);
      return;
    }

    // if clicked tile is the same
    if (prevTryPos === index) {
      return;
    }

    // when previous try is set, compare value of it and push indices to solvedIndices

    if (prevTry) {
      if (prevTry === e) {
        // set solved properties in redux
        // for (var key in gameArea) {
        //       if (gameArea[key].value === e) {
        //         gameArea[key].solved = true;
        //       }
        //     }

        //     setGameArea((prevState) => ({
        //       ...gameArea,
        //     }));
        setSolvedIndices((oldArray) => [...oldArray, prevTryPos, index]);
        setPrevTry(null);
        setPrevTryPos(null);
      } else {
        setPrevTry(null);
        setPrevTryPos(null);
      }
    }
  };

  return (
    <div className="game">
      <div className={`game--area ${grid === "4x4" && `small`}`}>
        {game &&
          game.map((tile, i) => (
            <GameTile
              key={i}
              index={i}
              tileContent={tile.value}
              show={shownIndex.indexOf(i) !== -1 ? true : false}
              solved={solvedIndices.indexOf(i) !== -1 ? true : false}
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

export default connect(mapStateToProps, {
  initialiseGame,
  setSolved,
})(Game);
