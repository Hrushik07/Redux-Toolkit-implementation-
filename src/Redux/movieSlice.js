import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [
      { id: 1, title: "Inception" },
      { id: 2, title: "The Matrix" },
      { id: 3, title: "Interstellar" },
      { id: 4, title: "The Dark Knight" },
      { id: 5, title: "Pulp Fiction" },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.movies.length
          ? state.movies[state.movies.length - 1].id + 1
          : 1,
        title: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
