"use client";

import { FormCard } from "@/components/FormCard";
import { MOVIE_DEFAULTS } from "@/constants/choices";
import { submit, update } from "@/hooks/functionalities";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Edit() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [movie, setMovie] = useState(MOVIE_DEFAULTS);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await fetch(`https://localhost:7142/api/MovieMate/${id}`);
          const data = await res.json();
          console.log(data);

          setMovie(data);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [id]);

  return (
    <section className="movie-form-container">
      <div>
        <p className="movie-form-container-title">Edit Movie</p>
        <p className="movie-form-container-subtitle">
          Update movie information in your collection
        </p>
      </div>

      <FormCard
        update={(e) => {
          update(e, movie, setMovie);

          console.log(e.target.id, e.target.value);
        }}
        submit={() => submit(id, "PUT", movie)}
        movie={movie}
        setMovie={setMovie}
      />
    </section>
  );
}
