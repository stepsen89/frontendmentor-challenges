import Header from "./Header";
import Projects from "./Projects";
import ProjectDetails from "./Project";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
