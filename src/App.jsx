import React from "react";
import { Navbar, Hero , Services  , About , Pricing , Footer, Gallery , HeroCaraousel} from "./components/index";
import "./App.css";

const App = () => {

  return (
    <>

      <Navbar />

      <Hero />

      <Services/>
      <About/>
      <Gallery/>
      <Pricing/>
      <Footer/>


</>
  );
};

export default App;
