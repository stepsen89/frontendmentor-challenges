import React from "react";
import StatsFieldComponent from "./shared/StatsField";

import { connect } from "react-redux";

function MultiPlayerStatusComponent({ players, turn }) {
  return (
    <div className="multi-wrapper">
      <div className="game--stats">
        {players.map((player, i) => (
          <StatsFieldComponent player={player} index={i} active={turn === i} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let players = state.game.players;
  let turn = state.game.turn;

  return {
    turn,
    players,
  };
};

export default connect(mapStateToProps, {})(MultiPlayerStatusComponent);
