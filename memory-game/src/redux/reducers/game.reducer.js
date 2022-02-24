import {
  INIT_GAME,
  SET_PLAYERS,
  SET_PLAYER_TURN,
  SET_PLAYER_WIN,
  GET_PLAYERS,
  RESET_GAME,
  PAUSE_GAME,
  SET_MOVE,
  START_GAME,
  SET_FINISHED,
} from "../types";

const initialGameState = {
  items: null,
  players: null,
  reset: false,
  turn: 0,
  moves: 0,
  solvedTiles: [],
  hasStarted: false,
  pauseGame: false,
  finished: false,
};

export function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, hasStarted: true };

    case RESET_GAME:
      return {
        ...state,
        hasStarted: false,
        solvedTiles: [],
        moves: 0,
        turn: 0,
        reset: true,
      };

    case PAUSE_GAME:
      return { ...state, pauseGame: true };

    case INIT_GAME:
      return { ...state, items: action.payload, reset: false };

    // case SET_SOLVED:
    //   let arr = state.items;
    //   for (var key in state.items) {
    //     if (state.items[key].value === action.payload) {
    //       state.items[key].solved = true;
    //     }
    //   }
    //   return { items: arr };

    case SET_PLAYERS:
      let players = [];
      for (let p = 0; p < action.payload; p++) {
        players.push({ number: p + 1, score: 0 });
      }
      return { ...state, players };

    case SET_MOVE:
      return { ...state, moves: state.moves + 1 };

    case SET_PLAYER_WIN:
      let updatedPlayers = state.players;
      updatedPlayers[action.payload].score += 1;
      console.log(updatedPlayers);
      return { ...state, players: updatedPlayers };

    case SET_PLAYER_TURN:
      return { ...state, turn: action.payload };

    case GET_PLAYERS:
      return state;

    case SET_FINISHED:
      return {
        ...state,
        finished: true,
      };
    default:
      return state;
  }
}
