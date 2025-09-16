import Image from "next/image";
export function SearchInput({ className = "", title, setTitle }) {
  return (
    <div
      className={`flex border-2 px-3 gap-2 items-center border-gray/30 bg-white flex-grow  focus-within:ring-2  focus-within:ring-purple/50 transition duration-500 rounded-xl  font-semibold text-lg ${className}`}
    >
      <Image src="/icons/search.svg" alt="search-icon" width={15} height={15} />
      <input
        value={title}
        onInput={(e) => setTitle(e.target.value)}
        type="search"
        placeholder="Search movies..."
        className={`focus:outline-none text-gray w-full `}
      />
    </div>
  );
}
