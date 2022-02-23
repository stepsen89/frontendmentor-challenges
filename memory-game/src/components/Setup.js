import React, { useState } from "react";
import SelectFields from "./shared/SelectFields";

import { connect } from "react-redux";
import { setupFullGame } from "../redux/actions/gameSetup.actions";

function SetupComponent({ setupFullGame }) {
  const [setupValue, setSetupValue] = useState({
    players: 1,
    grid: 4,
    tiles: "numbers",
  });

  const setValue = (mode, value) => {
    setSetupValue((prevState) => ({ ...prevState, [mode]: value }));
  };

  const startGame = () => {
    setupFullGame(setupValue);
  };

  return (
    <div className="container">
      <div className="setup">
        <div>
          <h1> memory</h1>
        </div>
        <div className="form">
          <div className="form--field">
            <SelectFields
              label={"Select Theme"}
              mode={"tiles"}
              options={["Numbers", "Icons"]}
              setValue={setValue}
            />
          </div>
          <div className="form--field">
            <SelectFields
              label={"Numbers of Players"}
              mode={"players"}
              options={[1, 2, 3, 4]}
              setValue={setValue}
            />
          </div>
          <div className="form--field">
            <SelectFields
              label={"Grid Size"}
              mode={"grid"}
              options={["4x4", "6x6"]}
              setValue={setValue}
            />
          </div>
          <div className="form--field">
            <button className="btn" onClick={startGame}>
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
