

import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import "./App.css";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
    
      <LandingPage />
      <Footer/>
    </div>
  );
}
export default App;