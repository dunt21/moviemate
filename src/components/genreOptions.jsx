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

  return (
    <select
      name="movies"
      className={`bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl font-inherit font-medium text-gray  focus:outline-none focus:ring-2  focus:ring-purple/50 transition duration-500 ${className} `}
    >
      {genres.map((genre, id) => (
        <option key={id} value={genre.value}>
          {genre.label}
        </option>
      ))}
    </select>
  );
}
