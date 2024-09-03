import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
        <Section
          title="Top Albums"
          endpoint="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section
          title="New Albums"
          endpoint="https://qtify-backend-labs.crio.do/albums/new"
        />
        <Section
          title="Songs"
          endpoint="https://qtify-backend-labs.crio.do/songs"
        />
      </div>
    </Router>
  );
}

export default App;
