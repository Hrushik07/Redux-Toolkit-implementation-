import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/movieSlice";
import Toast from "./Toast";

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const dispatch = useDispatch();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      dispatch(addMovie({ title: newMovie.trim(), genre, year }));
      setNewMovie("");
      setGenre("");
      setYear("");
      setToastMsg("Movie added successfully!");
    }
  };

  const handleSpeech = () => {
    if (!recognition) {
      alert("Speech recognition is not supported by your browser.");
      return;
    }

    recognition.lang = "en-US"; 
    recognition.start(); 

    recognition.onresult = (event) => {
      const movieTitle = event.results[0][0].transcript;
      setNewMovie(movieTitle); 
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event);
    };
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={inputRowStyle}>
          <input
            type="text"
            placeholder="Enter movie title"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            style={enhancedInputStyle}
          />
          <button onClick={handleSpeech} style={speechButtonStyle}>
            🎤
          </button>
        </div>
        <div style={inputRowStyle}>
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={enhancedInputStyle}
          />
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={enhancedInputStyle}
          />
        </div>
        <button onClick={handleAddMovie} style={buttonStyle}>
          Add Movie
        </button>
      </div>
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
};

const containerStyle = {
  marginBottom: "1rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

const inputRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const enhancedInputStyle = {
  padding: "10px",
  borderRadius: "8px",
  width: "200px",
  border: "1px solid #ccc",
  boxShadow: "0 2px 4px rgba(205, 192, 192, 0.1)",
  fontSize: "14px",
  transition: "0.3s ease",
};

const buttonStyle = {
  padding: "10px 16px",
  borderRadius: "8px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const speechButtonStyle = {
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#28a745",
  color: "#555",
  border: "1px solid #ccc",
  fontSize: "20px",
  cursor: "pointer",
  width: "70px",
  height: "40px",
  transition: "background-color 0.3s ease",
};

export default MovieInput;
