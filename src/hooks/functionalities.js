"use client";

import { useState } from "react";

let imageFile;

export function update(e, movie, setMovie) {
  setMovie({ ...movie, [e.target.id]: e.target.value });
}

export function updateImage(e) {
  const img = e.target.files[0];
  imageFile = img;

  const previewUrl = URL.createObjectURL(img);

  e.target.value = "";

  return previewUrl;
}

export async function submit(id, method, movie) {
  e.preventDefault();

  console.log(imageFile);

  const updatedMov = {
    ...movie,
    releaseDate: new Date(releaseDate).toISOString(),
  };
  console.log(updatedMov);

  const formData = new FormData();

  formData.append("imageFile", imageFile);

  for (const [key, value] of Object.entries(updatedMov)) {
    formData.append(key, value);
  }

  await fetch(`https://localhost:7142/api/MovieMate/${id}`, {
    method: `${method}`,
    headers: { "Content-Type": "application.json" },
    body: formData,
  });
}
