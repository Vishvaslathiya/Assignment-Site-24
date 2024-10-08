import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HeroSection from "./Components/HeroSection.jsx";
import Step from "./Components/Step.jsx";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Slider from "./Components/Slider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Step />
      {/* <Slider /> */}
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
