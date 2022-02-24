import React, { useEffect, useState } from "react";
import StatsFieldComponent from "./shared/StatsField";

import { connect } from "react-redux";

function MultiPlayerStatusComponent({ players, turn }) {
  const [p, setPlayers] = useState(players);

  useEffect(() => {
    setPlayers(players);
  }, [players]);

  return (
    <div className="multi-wrapper">
      <div className="game--stats">
        {players.map((player, i) => (
          <StatsFieldComponent
            score={player.score}
            index={i}
            active={turn === i}
          />
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
