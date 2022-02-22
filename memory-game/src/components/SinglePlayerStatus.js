import React, { useState } from "react";
import { connect } from "react-redux";
import { startTimer } from "../utils/utils";

function SinglePlayerStatusComponent({ hasStarted, moves }) {
  const [timer, setTimer] = useState(["00", "00"]);

  const startTimer = (run, stop) => {
    // var totalSeconds = 0;
    // let intervalVar = setInterval(setTime, 1000);
    // stop && clearInterval(intervalVar);
    // run && setInterval(setTime(), 1000);
    // function setTime() {
    //   ++totalSeconds;
    //   console.log(totalSeconds);
    //   setTimer((array) => (array[1] = displayValue(totalSeconds % 60)));
    //   setTimer((array) => (array[1] = displayValue(totalSeconds / 60)));
    // }
    // function displayValue(val) {
    //   if (val < 10) {
    //     return "0" + val;
    //   } else {
    //     return val.toString();
    //   }
    // }
  };

  // const clear = () => {
  //   clearInterval(startTimer);
  // };

  return (
    <div className="wrapper">
      <div className="game--stats">
        <div className="stats-box">
          <h3> Time</h3>
          <p> {hasStarted && "00:00"}</p>
        </div>
        <div className="stats-box">
          {" "}
          <h3>Moves</h3>
          <p> {moves}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let moves = state.score.moves;
  let hasStarted = state.score.hasStarted;

  return { moves, hasStarted };
};

export default connect(mapStateToProps, {})(SinglePlayerStatusComponent);
