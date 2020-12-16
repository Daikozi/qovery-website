import "./App.css";

import { useEffect } from "react";

//Layout elements
import Hero from "./layout/Hero";
import About from "./layout/About";
import Usage from "./layout/Usage";
import Clients from "./layout/Clients";
import Features from "./layout/Features";
import Footer from "./layout/Footer";

//function
import { animation } from "./functions/animation";

function App() {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Usage />
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
