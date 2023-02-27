import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Trending from "./components/Trending";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Navigation />
        <Trending />
      </>
    </BrowserRouter>
  );
}

export default App;
