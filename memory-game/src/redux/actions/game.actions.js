import { LOGGER } from "../../utils/utils";
import {
  INIT_GAME,
  SET_SOLVED,
  SET_PLAYER_WIN,
  SET_PLAYERS,
  SET_PLAYER_TURN,
  GET_PLAYERS,
  RESET_GAME,
  SET_SOLVED_INDICES,
  SET_MOVE,
  START_GAME,
  RESET_GAME_START,
  SET_FINISHED,
} from "../types";

export function startPlaying() {
  LOGGER("game.actions: ------- ", "startPlaying", "set has started to true");

  return (dispatch) => {
    dispatch({
      type: START_GAME,
    });
  };
}

export function initialiseGame(items) {
  LOGGER("game.actions: ------- ", "initialise Game", items.length);

  return (dispatch) => {
    dispatch({
      type: INIT_GAME,
      payload: items,
    });
  };
}

export function resetGameStart() {
  LOGGER("game.actions: ------- ", "resetGameStart", "");

  return (dispatch) => {
    dispatch({
      type: RESET_GAME_START,
    });
  };
}

export function resetGame(bool) {
  console.log("resets the game");
  return (dispatch) => {
    dispatch({ type: RESET_GAME });
  };
}

export function resetAll() {
  console.log("game should be reset");
  return (dispatch) => {
    dispatch(resetGame());
    dispatch(resetGameStart());
  };
}

export function startNewGame(value) {
  return (dispatch) => {
    dispatch({
      type: SET_SOLVED,
      payload: value,
    });
  };
}

export function setPlayerWin(player) {
  LOGGER("game.actions: ------- ", "player number", player);
  return (dispatch) => {
    dispatch({
      type: SET_PLAYER_WIN,
      payload: player,
    });
  };
}

export function setSolvedIndices(solvedTiles) {
  LOGGER("game.actions: ------- ", "setSolvedTiles", solvedTiles);

  return (dispatch) => {
    dispatch({
      type: SET_SOLVED_INDICES,
      payload: { solvedTiles: [] },
    });
  };
}

export function setMove() {
  LOGGER("game.actions: ------- ", "setMove", "move + 1 ");

  return (dispatch) => {
    dispatch({
      type: SET_MOVE,
    });
  };
}

export function setSolved(value) {
  LOGGER("game.actions: ------- ", "setSolved", value);

  return (dispatch) => {
    dispatch({
      type: SET_SOLVED,
      payload: value,
    });
  };
}

export function setPlayers(players) {
  LOGGER("game.actions: ------- ", "setPlayers", players);

  return (dispatch) => {
    dispatch({
      type: SET_PLAYERS,
      payload: players,
    });
  };
}

export function getPlayers() {
  LOGGER("game.actions: ------- ", "getPlayers");

  return (dispatch) => {
    dispatch({
      type: GET_PLAYERS,
    });
  };
}

export function setPlayerTurn(nextPlayer) {
  LOGGER("gameActions", "setPlayerTurn", nextPlayer);

  return (dispatch) => {
    dispatch({
      type: SET_PLAYER_TURN,
      payload: nextPlayer,
    });
  };
}

export function setWinner() {
  LOGGER("game.actions: ------- ", "startPlaying", "set has started to true");

  return (dispatch) => {
    dispatch({
      type: SET_FINISHED,
    });
  };
}
