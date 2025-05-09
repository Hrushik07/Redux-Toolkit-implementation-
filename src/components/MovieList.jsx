import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../Redux/movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.computer.movies);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const confirm = window.confirm("Do you want to delete this movie?");
    if (confirm) {
      dispatch(removeMovie(id));
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>
        Movie List
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              marginBottom: "10px",
              background: "#ffffffcc",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "400px",
              margin: "0 auto 10px auto",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <span>{movie.title}</span>
            <button
              onClick={() => handleRemove(movie.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
