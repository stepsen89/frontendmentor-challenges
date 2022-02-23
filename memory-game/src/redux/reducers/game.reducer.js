import {
  INIT_GAME,
  SET_SOLVED,
  SET_PLAYERS,
  SET_PLAYER_TURN,
  SET_PLAYER_WIN,
  GET_PLAYERS,
} from "../types";

const initialGameState = {
  items: null,
  players: null,
  turn: 0,
};

export function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case INIT_GAME:
      return { ...state, items: action.payload };
    case SET_SOLVED:
      let arr = state.items;
      for (var key in state.items) {
        if (state.items[key].value === action.payload) {
          state.items[key].solved = true;
        }
      }
      return { items: arr };
    case SET_PLAYERS:
      let players = [];
      for (let p = 0; p < action.payload; p++) {
        players.push({ number: p, score: 0 });
      }
      return { ...state, players };
    case SET_PLAYER_WIN:
      let updatedPlayers = state.players;
      updatedPlayers[action.payload].score += 1;
      return { ...state, updatedPlayers };
    case SET_PLAYER_TURN:
      return { ...state, turn: action.payload };
    case GET_PLAYERS:
      return state;
    default:
      return state;
  }
}
