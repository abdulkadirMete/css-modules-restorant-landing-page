import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { Hero } from "./components/hero/Hero";
import { Cakes } from "./components/cakes/Cakes";
import { Favorite } from "./components/favorite/Favorite";
import { Chefs } from "./components/chefs/Chefs";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Cakes/>
      <Favorite/>
      <Chefs/>
      <Footer/>
    </>
  );
}

export default App;
