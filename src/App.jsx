import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

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
