import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/movieSlice";

const MovieInput = () => {
  const [newMovie, setNewMovie] = React.useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      dispatch(addMovie(newMovie.trim()));
      setNewMovie("");
    }
  };

  return (
    <div style={{ marginBottom: "1rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          marginRight: "8px",
          width: "250px",
        }}
      />
      <button
        onClick={handleAddMovie}
        style={{
          padding: "8px 12px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieInput;
