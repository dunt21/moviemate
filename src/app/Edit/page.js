import { FormCard } from "@/components/FormCard";

export default function Edit() {
  return (
    <section className="movie-form-container">
      <div>
        <p className="movie-form-container-title">Edit Movie</p>
        <p className="movie-form-container-subtitle">
          Update movie information in your collection
        </p>
      </div>

      <FormCard />
    </section>
  );
}
