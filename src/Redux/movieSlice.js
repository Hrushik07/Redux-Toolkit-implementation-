import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [
      { id: 1, title: "Inception", genre: "Sci-Fi", year: "2010" },
      { id: 2, title: "The Matrix", genre: "Action", year: "1999" },
      { id: 3, title: "Interstellar", genre: "Sci-Fi", year: "2014" },
      { id: 4, title: "The Dark Knight", genre: "Action", year: "2008" },
      { id: 5, title: "Pulp Fiction", genre: "Crime", year: "1994" },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      const { title, genre = "Unknown", year = "Unknown" } = action.payload;
      const newMovie = {
        id: state.movies.length
          ? state.movies[state.movies.length - 1].id + 1
          : 1,
        title,
        genre,
        year,
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
