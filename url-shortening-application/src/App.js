import "./App.css";
import BoostComponent from "./components/Boost";
import "./index.css";
import Header from "./components/Header";
import HeroComponent from "./components/Hero";
import ShortenerComponent from "./components/Shortener";
import StatisticsComponent from "./components/Statistics";

function App() {
  return (
    <div>
      <Header />
      <HeroComponent />
      {/* <ShortenerComponent /> */}
      <StatisticsComponent />
      <BoostComponent />
    </div>
  );
}

export default App;
