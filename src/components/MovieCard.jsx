"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DeletePopup from "@/components/DeletePopup";
import { Movies } from "@/data/MovieList";
import { useState, useEffect } from "react";

export function MovieCard({ movies }) {
  // const [moviesData, setMoviesData] = useState(Movies);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://localhost:7142/api/MovieMate")
  //     .then((response) => {
  //       console.log(response);

  //       if (!response.ok) {
  //         console.log("failed to fetch movies:", response.status);
  //       }

  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setMoviesData(data);

  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p> Loading movies ....</p>;
  // if (error) return <p> Error: {error}</p>;

  const [selectedMovie, setselectedMovie] = useState(null);
  const router = useRouter();

  return (
    <div className="mt-9 w-full grid grid-cols-4 gap-6 ">
      {movies.map((movie, index) => (
        <div
          key={index}
          className=" bg-white border-0 overflow-x-hidden rounded-2xl font-medium shadow-md  hover:scale-[1.03] hover:shadow-lg "
        >
          <div className="relative h-64">
            <img
              src={`https://localhost:7142${movie.imageUrl}`}
              className="h-full w-full object-cover"
              alt="movie poster for Inception with blue tones "
            />

            <p className="absolute top-3 right-4 text-white bg-purple p-2 border-0 rounded-lg text-sm leading-none">
              {movie.rating}
            </p>
          </div>

          <div className="px-5 pt-6  ">
            <p className="font-bold text-xl mb-2">{movie.title}</p>
            <div className="flex justify-between mb-3">
              <p className="flex items-center gap-2 text-sm leading-0 text-gray">
                <Image
                  src="/icons/calendar.svg"
                  width={14}
                  height={14}
                  alt="calendar"
                />
                {new Intl.DateTimeFormat(navigator.language, {
                  year: "numeric",
                }).format(new Date(movie.releaseDate))}
              </p>
              <p className="genre-badge  ">{movie.genre}</p>
            </div>
            <p className="text-gray text-sm mb-6">${movie.price.toFixed(2)}</p>
            <div
              className="flex justify-between format-cont mb-7 [&>*]:hover:shadow/20 "
              onClick={() => router.push(`/Edit?id=${movie.id}`)}
            >
              <a className="hover:!text-gray">
                <Image
                  src="/icons/edit.svg"
                  width={14}
                  height={14}
                  alt="edit"
                />
                Edit
              </a>
              <Link
                className="hover:!text-red"
                onClick={(E) => {
                  E.preventDefault();
                  setselectedMovie(movie);
                }}
                href=""
              >
                <Image src="/icons/bin.svg" width={14} height={14} alt="bin" />
                Delete
              </Link>

              <Link href="/Detail">
                <Image
                  src="/icons/detail.svg"
                  width={14}
                  height={14}
                  alt="bin"
                />
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}

      {selectedMovie && (
        <DeletePopup
          movie={selectedMovie}
          onCancel={() => setselectedMovie(null)}
          onConfirm={() => setselectedMovie(null)}
        />
      )}
    </div>
  );
}
