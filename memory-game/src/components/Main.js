import React from "react";
import { connect } from "react-redux";
import MultiPlayerStatusComponent from "./MultiPlayerStatus";
import SinglePlayerStatusComponent from "./SinglePlayerStatus";
import Game from "./Game";
import Header from "./Header";

function Main({ setup, players }) {
  return (
    <div className="full">
      <Header />
      <Game />
      {setup.players > 1 ? (
        <MultiPlayerStatusComponent />
      ) : (
        <SinglePlayerStatusComponent />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  let setup = state.setup.setup;
  let players = state.game.players;

  return { setup, players };
};

export default connect(mapStateToProps, {})(Main);
