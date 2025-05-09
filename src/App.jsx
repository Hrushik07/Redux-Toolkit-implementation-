import React from "react";
import "./App.css";
import MovieInput from "./components/MovieInput";
import { MovieList } from "./components/Movielist";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #2c3e50, #3498db)",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <MovieInput />
      <MovieList />
    </div>
  );
}

export default App;
