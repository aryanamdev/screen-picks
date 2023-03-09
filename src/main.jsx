import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MovieContextProvider from "./context/MovieContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </>
);
