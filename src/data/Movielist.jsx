import Image from "next/image";

const movies = [
  {
    name: "Inception",
    date: "2010-03-15",
    genre: "Action",
    price: 9.99,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7fae740a53-dddc29036894ff527b7d.png",
  },
  {
    name: "Pulp Fiction",
    date: "1994-12-01",
    genre: "Comedy",
    price: 7.5,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7000f5206f-b6d826d3585329721875.png",
  },
  {
    name: "The Grand Budapest Hotel",
    date: "2014-05-20",
    genre: "Romantic Comedy",
    price: 8.0,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d48d2c2865-826d63975cfcafcad39a.png",
  },
  {
    name: "La La Land",
    date: "2016-01-10",
    genre: "Drama",
    price: 11.75,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/688054698f-bf8a3c4e88a4fb5363a9.png",
  },
  {
    name: "Parasite",
    date: "2019-04-05",
    genre: "Horror",
    price: 13.25,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7619ffe42b-93f88e0eeae6e981f89b.png",
  },
  {
    name: "The Dark Knight",
    date: "2008-05-20",
    genre: "Action",
    price: 8.0,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e03865e0dd-c698dffdafe4e39d1e13.png",
  },
  {
    name: "Spirited Away",
    date: "2001-01-10",
    genre: "Western",
    price: 11.75,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a80f554550-f1a460a8a27d47b0cc74.png",
  },
  {
    name: "Interstellar",
    date: "2014-04-05",
    genre: "Western",
    price: 13.25,
    rating: "18+",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/12bd4ae3fd-28223005915d7394fd36.png",
  },
];

export function MovieCard() {
  return (
    <div className="mt-9 w-full grid grid-cols-4 gap-6 h-full">
      {movies.map((movie, index) => (
        <div
          key={index}
          className=" bg-white border-0 overflow-x-hidden rounded-2xl font-medium shadow-md"
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
              <p className="text-seaBlue bg-seaBlue/20 font-medium px-3 text-xs  py-1 rounded-full ">
                {movie.genre}
              </p>
            </div>
            <p className="text-gray text-sm mb-6">${movie.price}</p>
            <div className="flex justify-between format-cont mb-7">
              <button className="">
                <Image
                  src="/icons/edit.svg"
                  width={14}
                  height={14}
                  alt="edit"
                />
                Edit
              </button>
              <button>
                <Image src="/icons/bin.svg" width={14} height={14} alt="bin" />
                Delete
              </button>
              <button>
                <Image
                  src="/icons/detail.svg"
                  width={14}
                  height={14}
                  alt="bin"
                />
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
