"use client";

import Image from "next/image";
import Link from "next/link";
import DeletePopup from "@/components/DeletePopup";
import { Movies } from "@/data/MovieList";
import { useState } from "react";

export function MovieCard() {
  const [moviesData, setMoviesData] = useState(Movies);
  const [selectedMovie, setselectedMovie] = useState(null);

  // const handleDelete = (mov) => {
  //   // setMoviesData((arr) => arr.pop(mov));
  //   setselectedMovie(null);
  // };

  return (
    <div className="mt-9 w-full grid grid-cols-4 gap-6 ">
      {moviesData.map((movie, index) => (
        <div
          key={index}
          className=" bg-white border-0 overflow-x-hidden rounded-2xl font-medium shadow-md  hover:scale-[1.03] hover:shadow-lg "
        >
          <div className="relative h-64">
            <img
              src={movie.img}
              className="h-full w-full object-cover"
              alt="movie poster for Inception with blue tones "
            />

            <p className="absolute top-3 right-4 text-white bg-purple p-2 border-0 rounded-lg text-sm leading-none">
              {movie.rating}
            </p>
          </div>

          <div className="px-5 pt-6  ">
            <p className="font-bold text-xl mb-2">{movie.name}</p>
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
                }).format(new Date(movie.date))}
              </p>
              <p className="genre-badge  ">{movie.genre}</p>
            </div>
            <p className="text-gray text-sm mb-6">${movie.price.toFixed(2)}</p>
            <div className="flex justify-between format-cont mb-7 [&>*]:hover:shadow/20 ">
              <a className="hover:!text-gray" href="/Edit">
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
