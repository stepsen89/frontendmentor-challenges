import "./App.css";

import Header from "./components/Header";
import HeroComponent from "./components/Hero";
import ShortenerComponent from "./components/Shortener";
import StatisticsComponent from "./components/Statistics";

function App() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <ShortenerComponent />
      <StatisticsComponent />
    </div>
  );
}

export default App;
