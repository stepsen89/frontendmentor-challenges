import {
  SET_PLAYER_WIN,
  RESET_SCORE,
  SET_SOLVED_INDICES,
  SET_MOVE,
  START_GAME,
} from "../types";

export function setPlayerWin(player, stats) {
  return (dispatch) => {
    dispatch({
      type: SET_PLAYER_WIN,
      payload: { player, stats },
    });
  };
}

export function resetScore(players) {
  return (dispatch) => {
    dispatch({
      type: RESET_SCORE,
      payload: { score: [] },
    });
  };
}

export function setSolvedIndices(solvedTiles) {
  return (dispatch) => {
    dispatch({
      type: SET_SOLVED_INDICES,
      payload: { solvedTiles: [] },
    });
  };
}

export function setMove(move) {
  return (dispatch) => {
    dispatch({
      type: SET_MOVE,
      payload: { move },
    });
  };
}

export function startPlaying() {
  return (dispatch) => {
    dispatch({
      type: START_GAME,
    });
  };
}
