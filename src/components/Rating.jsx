const ageRatings = [
  { label: "Select Rating", value: "" },
  { value: "3+" },
  { value: "7+" },
  { value: "12+" },
  { value: "13+" },
  { value: "16+" },
  { value: "18+" },
];

export default function Rating({ className = "", value, onChange }) {
  return (
    <select
      name="rating"
      id="rating"
      value={value}
      onChange={onChange}
      className={`bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl font-inherit font-medium text-gray  focus:outline-none focus:ring-2  focus:ring-purple/50 transition duration-500 ${className} `}
    >
      {ageRatings.map((age, index) => (
        <option key={index} value={age.value}>
          {age.value}
        </option>
      ))}
    </select>
  );
}
