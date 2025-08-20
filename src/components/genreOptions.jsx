export default function Genre({ className = "" }) {
  return (
    <select
      name="movies"
      className={`bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl font-inherit font-medium text-gray  focus:outline-none focus:ring-1  focus:ring-purple/50 transition duration-500 ${className} `}
    >
      <option value="All Genres">All Genres</option>
      <option value="Comedy">Comedy</option>
      <option value="Romantic Comedy">Romantic Comedy</option>
      <option value="Western">Western</option>
      <option value="Drama">Drama</option>
      <option value="Action">Action</option>
      <option value="Horror">Horror</option>
    </select>
  );
}
