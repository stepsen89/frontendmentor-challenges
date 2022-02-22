import { INIT_GAME, SET_SOLVED, SET_PLAYERS } from "../types";

const initialGameState = {
  items: null,
  players: null,
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
      console.log(action.payload);
      let players = [];
      for (let p = 0; p < action.payload; p++) {
        console.log({ number: p, score: 0 });
        players.push({ number: p, score: 0 });
      }
      console.log(players);
      return { ...state, players };
    default:
      return state;
  }
}
