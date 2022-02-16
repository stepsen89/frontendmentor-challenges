import "./App.css";
import BoostComponent from "./components/Boost";
import "./index.css";
import Header from "./components/Header";
import HeroComponent from "./components/Hero";
import ShortenerComponent from "./components/Shortener";
import StatisticsComponent from "./components/Statistics";
import FooterComponent from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <HeroComponent />
      {/* <ShortenerComponent /> */}
      <StatisticsComponent />
      <BoostComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
