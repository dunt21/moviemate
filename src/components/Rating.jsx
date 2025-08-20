const ageRatings = [
  { label: "Select Rating", value: "" },
  { label: "3+", value: 3 },
  { label: "7+", value: 7 },
  { label: "12+", value: 12 },
  { label: "13+", value: 13 },
  { label: "16+", value: 16 },
  { label: "18+", value: 18 },
];

export default function Rating({ className = "" }) {
  return (
    <select
      name="rating"
      id="rate"
      className={`bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl font-inherit font-medium text-gray  focus:outline-none focus:ring-2  focus:ring-purple/50 transition duration-500 ${className} `}
    >
      {ageRatings.map((age, index) => (
        <option key={index} value={age.value}>
          {age.label}
        </option>
      ))}
    </select>
  );
}
