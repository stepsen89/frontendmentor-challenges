import "./App.scss";
import "./scss/main.scss";

import Main from "./components/Main";
import { connect } from "react-redux";
import SetupComponent from "./components/Setup";

function App({ setUpDone }) {
  return <div className="App">{setUpDone ? <Main /> : <SetupComponent />}</div>;
}

const mapStateToProps = (state) => {
  let setUpDone = state.setup.done;
  let setup = state.setup.setup;

  return { setUpDone, setup };
};

export default connect(mapStateToProps, {})(App);
