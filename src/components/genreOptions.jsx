"use client";

import { useState, useEffect } from "react";

export default function Genre({ className = "" }) {
  const genres = [
    { label: "Select Genre", value: "" },
    { label: "All Genres", value: "All Genres" },
    { label: "Comedy", value: "Comedy" },
    { label: "Romantic Comedy", value: "Romantic Comedy" },
    { label: "Western", value: "Western" },
    { label: "Drama", value: "Drama" },
    { label: "Horror", value: "Horror" },
  ];

  const [genre, setGenres] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://localhost:7142/api/MovieMate/genresList")
      .then((res) => {
        if (!res.ok) {
          console.log("error getting list:", res.status);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGenres(data);
      })
      .catch((err) => setError(err));
  }, []);

  console.log(genre);
  return (
    <select
      name="movies"
      className={`bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl font-inherit font-medium text-gray  focus:outline-none focus:ring-2  focus:ring-purple/50 transition duration-500 ${className} `}
    >
      {genre.map((genre, id) => (
        <option key={id} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}
