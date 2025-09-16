"use client";

export async function submit(id, method, movie) {
  e.preventDefault();

  await fetch(`https://localhost:7142/api/MovieMate/${id}`, {
    method: `${method}`,
    headers: { "Content-Type": "application.json" },
    body: JSON.stringify(movie),
  });
}

export function update(e, movie, setMovie) {
  setMovie({ ...movie, [e.target.id]: e.target.value });
}
