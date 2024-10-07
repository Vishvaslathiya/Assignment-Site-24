import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HeroSection/>
    {/* <App /> */}
  </StrictMode>
);
