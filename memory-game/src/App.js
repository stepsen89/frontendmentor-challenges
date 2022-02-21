import "./App.scss";
import "./scss/main.scss";

import { connect } from "react-redux";
import SetupComponent from "./components/Setup";

function App({ setupDone }) {
  return (
    <div className="App">
      {setupDone ? <h2> Done </h2> : <SetupComponent />}
    </div>
  );
}

const mapStateToProps = (state) => {
  let setUpDone = state.setup.done;
  let setup = state.setup.setup;

  return { setUpDone, setup };
};

export default connect(mapStateToProps, {})(App);
