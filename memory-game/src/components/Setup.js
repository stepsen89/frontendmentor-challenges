import React, { useState } from "react";
import SelectFields from "./shared/SelectFields";

import { connect } from "react-redux";
import { setupFullGame } from "../redux/actions/gameSetup.actions";
import { initialiseGame } from "../redux/actions/game.actions";

function SetupComponent({ setupFullGame }) {
  const [setupValue, setSetupValue] = useState({
    players: 1,
    grid: 4,
    tiles: "numbers",
  });

  const setValue = (mode, value) => {
    setSetupValue((prevState) => ({ ...prevState, [mode]: value }));
    // console.log(setupValue);
  };

  const startGame = () => {
    setupFullGame(setupValue);
  };

  console.log(setupValue);
  return (
    <div className="container">
      <div className="setup">
        <div>
          <h1> memory</h1>
        </div>
        <div className="form">
          <div class="form--field">
            <SelectFields
              label={"Select Theme"}
              mode={"tiles"}
              options={["Numbers", "Icons"]}
              setValue={setValue}
            />
          </div>
          <div class="form--field">
            <SelectFields
              label={"Numbers of Players"}
              mode={"players"}
              options={[1, 2, 3, 4]}
              setValue={setValue}
            />
          </div>
          <div class="form--field">
            <SelectFields
              label={"Grid Size"}
              mode={"grid"}
              options={["4x4", "6x6"]}
              setValue={setValue}
            />
          </div>
          <div class="form--field">
            <button class="btn" onClick={startGame}>
              {" "}
              Start Game{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { setupFullGame })(SetupComponent);
