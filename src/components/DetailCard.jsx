"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import usePopup from "@/hooks/usePopup";
import DeletePopup from "./DeletePopup";

export default function DefaultCard() {
  const router = useRouter();
  const { showPopup, open, close } = usePopup();

  const movieDetail = [
    {
      name: "Inception",
      date: "2010-03-15",
      genre: "Action",
      price: 9.99,
      rating: "18+",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7fae740a53-dddc29036894ff527b7d.png",
      summary:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-8 ">
      <p className="text-3xl font-bold mb-2">Movie Details</p>
      {movieDetail.map((mov, id) => (
        <div key={id} className="mx-auto w-[60%]  ">
          <p className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple to-red">
            {mov.name}
          </p>

          <div className="  bg-white rounded-xl shadow-glass p-7 flex items-center gap-7">
            <div className="w-auto hover:scale-105 rounded-lg overflow-hidden">
              <img
                src={mov.img}
                alt="movie cover"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4  detail-card">
              <p className="flex justify-between items-center">
                <span className="text-2xl text-blueBlack font-bold">
                  {mov.name}
                </span>
                <span className="bg-yellow-200/70 font-bold py-1 px-4 rounded-3xl text-lightbrown">
                  {" "}
                  {mov.rating}{" "}
                </span>{" "}
              </p>

              <p className="flex items-center gap-2">
                <Image
                  src="/icons/calendar.svg"
                  width={14}
                  height={14}
                  alt="calendar icon"
                />
                <span className="">Released: </span>
                <span>
                  {new Intl.DateTimeFormat(navigator.language, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(mov.date))}{" "}
                </span>
              </p>

              <p>
                <Image
                  src="/icons/movie.svg"
                  width={14}
                  height={14}
                  alt="movie icon"
                />
                <span>Genre: </span>{" "}
                <span className="genre-badge hover:scale-105 ">
                  {mov.genre}
                </span>
              </p>

              <p>
                <Image
                  src="/icons/coin.svg"
                  width={20}
                  height={20}
                  alt="coin icon"
                />
                <span> Price:</span>
                <span className="text-2xl font-bold text-red">
                  ${mov.price}
                </span>
              </p>

              <p className="font-bold text-black !mb-2">
                <Image
                  src="/icons/book.svg"
                  width={20}
                  height={20}
                  alt="book icon"
                />
                <span>Synopsis:</span>
              </p>

              <p>{mov.summary}</p>

              <div className="space-x-5 font-medium">
                <button
                  className=" form-btn bg-gradient-to-r from-purple to-seaBlue text-white border-1 rounded-3xl px-8 py-3 hover:scale-105 "
                  onClick={() => router.push("/Edit")}
                >
                  Edit Movie
                </button>

                <button
                  className="form-btn !border-2 border-purple  rounded-3xl text-purple px-8 py-3  hover:scale-105 "
                  onClick={() => router.push("/")}
                >
                  Back to List
                </button>
                <button
                  className="border-0 bg-red  rounded-3xl text-white px-10 py-3 hover:scale-105 ml-10"
                  onClick={open}
                >
                  Delete
                </button>
                {showPopup && (
                  <DeletePopup onCancel={close} onConfirm={close} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
