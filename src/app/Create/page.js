import Layout from "../layout";
import { FormCard } from "@/components/FormCard";

export default function Create() {
  return (
    <section className="movie-form-container">
      <div>
        <p className="movie-form-container-title">Create Movie</p>
        <p className="movie-form-container-subtitle">
          Add a new movie to your collection
        </p>
      </div>

      <FormCard />
    </section>
  );
}
