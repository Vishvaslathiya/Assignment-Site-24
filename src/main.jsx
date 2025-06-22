import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HeroSection from "./Components/HeroSection.jsx";
import Step from "./Components/Step.jsx";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import PlantFrom from "./Components/PlantFrom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    
    <BrowserRouter>
    
      <Navbar />
      <HeroSection />
      <Step />
      <PlantFrom/>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
