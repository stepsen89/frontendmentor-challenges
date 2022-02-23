import React from "react";

function StatsFieldComponent({ score, active }) {
  return (
    <div className={`stats-field ${active ? "active" : ""}`}>
      <div class="player-info"></div>
      <h3> {score}</h3>
    </div>
  );
}

export default StatsFieldComponent;
