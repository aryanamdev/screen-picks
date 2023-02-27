import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Trending from "./components/Trending Home/TrendingMovies";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Navigation />
        
      </>
    </BrowserRouter>
  );
}

export default App;
