import React, { useState, useEffect } from "react";
import GameTile from "./GameTile";

import { connect } from "react-redux";

import {
  initialiseGame,
  setSolved,
  setPlayerTurn,
  setPlayerWin,
  startPlaying,
  setMove,
} from "../redux/actions/game.actions";

import { createRandomisedGrid } from "../utils/utils";
import PopUpSolo from "./shared/PopUpSolo";
import PopUpMulti from "./shared/PopUpMulti";

function Game({
  game,
  grid,
  initialiseGame,
  startPlaying,
  hasStarted,
  setMove,
  participants,
  setPlayerTurn,
  setPlayerWin,
  isReset,
}) {
  // const setGame = () => {
  //   let size = grid === "6x6" ? 36 : 16;
  //   let randomGame = createRandomisedGrid(size);
  //   console.log("randomGame", randomGame);
  //   initialiseGame(randomGame);
  // };

  // to check if setmove should ever be called
  const [isSinglePlayer, setIsSinglePlayer] = useState(false);

  const [gameArea, setGameArea] = useState({});

  const [playerOnTurn, setPlayerOnTurn] = useState(0);

  const [prevTry, setPrevTry] = useState(null);
  const [prevTryPos, setPrevTryPos] = useState(null);

  const [shownIndex, setShownIndex] = useState([]);
  const [solvedIndices, setSolvedIndices] = useState([]);
  const [allPlayers, setAllPlayers] = useState(participants);
  // initialise game, set if single or multiple players
  useEffect(() => {
    let size = grid === "6x6" ? 36 : 16;

    let currentGame = createRandomisedGrid(size);
    initialiseGame(currentGame);
    setGameArea(currentGame);
    setIsSinglePlayer(allPlayers.length === 1 ? true : false);
  }, []);

  // see if reset is called to reset the game field
  useEffect(() => {
    if (isReset) {
      console.log("has game reset");
      setSolvedIndices([]);
      setShownIndex([]);
    }
  }, [isReset]);

  const guess = (e, index) => {
    // push index to shown index to show both tiles
    shownIndex.length < 2
      ? setShownIndex((oldArray) => [...oldArray, index])
      : setShownIndex([index]);

    if (!hasStarted) {
      startPlaying();
    }
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
      isSinglePlayer && setMove();
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
        // let nextPlayer =
        //   playerOnTurn < participants.length
        //     ? setPlayerOnTurn((prevPlayer) => prevPlayer + 1)
        //     : setPlayerOnTurn(0);

        // setPlayerTurn(nextPlayer);
        !isSinglePlayer && setPlayerWin(playerOnTurn);
        // setAllPlayers()

        // setAllPlayers(updatedPlayers);
        setPrevTry(null);
        setPrevTryPos(null);
      } else {
        if (!isSinglePlayer) {
          let nextPlayer =
            playerOnTurn < participants.length - 1 ? playerOnTurn + 1 : 0;

          setPlayerOnTurn(nextPlayer);
          setPlayerTurn(nextPlayer);
        }

        setPrevTry(null);
        setPrevTryPos(null);
        // setTimeout(() => {
        //   setShownIndex([]);
        // }, 700);
      }
    }
  };

  const generateWinner = () => {
    let gameInformation = {};

    let ranks = participants.sort(function (a, b) {
      return b.score - a.score;
    });

    // let unequalPlayers = [
    //   {
    //     number: 1,
    //     score: 15,
    //   },
    //   {
    //     number: 2,
    //     score: 15,
    //   },
    //   {
    //     number: 3,
    //     score: 13,
    //   },
    // ];
    // let ranks = unequalPlayers.sort(function (a, b) {
    //   return b.score - a.score;
    // });

    if (participants[0].score === participants[1].score) {
      let highest = participants[0].score;
      let tie = participants.filter((p) => p.score === highest);
      gameInformation.winner = tie.length;
    } else {
      gameInformation.winner = participants[0].number;
    }
    gameInformation.players = ranks;

    return gameInformation;
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
      {solvedIndices.length === gameArea.length && isSinglePlayer && (
        <PopUpSolo />
      )}

      {solvedIndices.length === gameArea.length && !isSinglePlayer && (
        <PopUpMulti gameResults={generateWinner()} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  let game = state.game && state.game.items;
  let participants = state.game && state.game.players;
  let grid = state.setup.setup.grid;
  let hasStarted = state.game.hasStarted;
  let isReset = state.game.reset;
  let winner = state.game.winner;

  return { game, grid, hasStarted, participants, isReset, winner };
};

export default connect(mapStateToProps, {
  initialiseGame,
  setSolved,
  setMove,
  startPlaying,
  setPlayerTurn,
  setPlayerWin,
})(Game);
