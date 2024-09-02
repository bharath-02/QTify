import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from './components/Hero/Hero';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </Router>
  );
}

export default App;
