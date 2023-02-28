import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/header/Navigation";

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
