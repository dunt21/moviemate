import Image from "next/image";
import { SearchInput } from "@/components/SearchInput";
import Layout from "./layout";
import { MovieCard } from "@/data/Movielist";

export default function Home() {
  return (
    <Layout variant="home">
      {/* Hero Section */}
      <section className="bg-[url('/images/cinematic.png')] bg-center bg-cover w-full h-[20rem] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-10 left-20 text-white space-y-4">
          <p className="text-5xl font-bold">Discover Amazing Movies</p>
          <p className="font-semibold text-lg">
            Browse our collection of the latest and greatest films from around
            the world.
          </p>
          <button className="btn-rd bg-[rgb(147,51,234)] ">
            <Image
              src="/icons/playbtn.svg"
              alt="play button"
              width={15}
              height={15}
              className="mr-2"
            />
            Explorer Now
          </button>
        </div>
      </section>

      {/* Page title and Constrols Section */}
      <section className="w-[85%] mx-auto pt-16">
        <div>
          <div className="space-y-2">
            <p className="font-bold text-4xl">Movie Collection</p>
            <p className="text-[var(--gray)]">
              {" "}
              Browse and manage your favorite movies
            </p>
          </div>

          <div className="mt-8 flex gap-5 ">
            <div className="relative  ">
              <select
                name="movies"
                className="bg-white py-3 px-4 appearance-none border border-gray-200 rounded-xl  focus:outline-none focus:ring-1  focus:ring-purple/50 transition duration-500 "
              >
                <option value="All Genres">All Genres</option>
                <option value="Comedy">Comedy</option>
                <option value="Romantic Comedy">Romantic Comedy</option>
                <option value="Western">Western</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
              </select>
              <div className="absolute top-1/2 transform -translate-y-[70%] left-[8rem] w-fit">
                <Image
                  src="/icons/dropdown.svg"
                  alt="dropdown"
                  width={15}
                  height={15}
                  className="text-purple-400"
                />
              </div>
            </div>
            <SearchInput />
            <button className="btn-square bg-gradient-to-r from-purple to-seaBlue">
              <Image
                src="/icons/filter.svg"
                alt="filter"
                width={15}
                height={15}
              />
              Filter
            </button>

            <button className="btn-square bg-red">
              <Image src="/icons/add.svg" alt="filter" width={15} height={15} />
              Create New
            </button>
          </div>
        </div>

        {/* Movie List */}
        <MovieCard />
      </section>
    </Layout>
  );
}
