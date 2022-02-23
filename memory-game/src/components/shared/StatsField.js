import React from "react";

function StatsFieldComponent({ player, active }) {
  return (
    <div className={`stats-field ${active ? "active" : ""}`}>
      <div class="player-info"></div>
      <h3> {player.score}</h3>
    </div>
  );
}

export default StatsFieldComponent;
