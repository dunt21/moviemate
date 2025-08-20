import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";
import Genre from "@/components/genreOptions";
import { MovieCard } from "@/data/Movielist";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('/images/cinematic.png')] bg-center bg-cover w-full h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-14 left-38 text-white space-y-5">
          <p className="text-5xl font-bold">Discover Amazing Movies</p>
          <p className=" text-lg">
            Browse our collection of the latest and greatest films from around
            the world.
          </p>
          <button className="btn-rd bg-purple hover:bg-purple/90 hover:shadow-md hover:shadow-purple/30">
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
      <section className="w-[82%] mx-auto pt-16">
        <div>
          <div className="space-y-3">
            <p className="font-bold text-4xl">Movie Collection</p>
            <p className="text-gray"> Browse and manage your favorite movies</p>
          </div>

          <div className="mt-8 flex gap-5 ">
            <div className="relative  ">
              <Genre />
              <div className="absolute top-1/2 transform -translate-y-[50%] left-[8rem] w-fit">
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
            <button className="btn-square bg-gradient-to-r from-purple to-seaBlue hover:shadow-md">
              <Image
                src="/icons/filter.svg"
                alt="filter"
                width={15}
                height={15}
              />
              Filter
            </button>

            <Link
              href="/Create"
              className="btn-square bg-red hover:bg-red/90 hover:shadow-md hover:!text-white"
            >
              <button className="flex gap-2 hover:text-white">
                <Image
                  src="/icons/add.svg"
                  alt="filter"
                  width={15}
                  height={15}
                />
                Create New
              </button>
            </Link>
          </div>
        </div>

        {/* Movie List */}
        <MovieCard />

        {/* navigate pages */}
        <div className="navigate-btn flex justify-center mt-12 gap-2">
          <button className="unactive-btn hover:shadow-md">
            <Image
              src="/icons/arror-left.svg"
              width={10}
              height={10}
              alt="arror-left"
            />
          </button>
          <button className="active-btn">1</button>
          <button className="unactive-btn hover:shadow-md">
            <Image
              src="/icons/arrow-right.svg"
              width={10}
              height={10}
              alt="arrow-right"
            />
          </button>
        </div>
      </section>
    </>
  );
}
