import Image from "next/image";

export default function DeletePopup({ movie, onCancel, onConfirm }) {
  if (!movie) return null;

  return (
    <div className="bg-black/20 w-full h-full flex items-center justify-center absolute inset-0 backdrop-blur-xs z-100">
      <div
        className="w-fit flex flex-col items-center bg-white h-fit p-10  [&>p]:text-blueBlack border-0 rounded-xl
      "
      >
        <Image
          src="/icons/deleteIcon.svg"
          alt="delete icon"
          width={50}
          height={50}
          className="mb-7"
        />
        <p className="font-semibold text-2xl mb-3 ">Confirm Movie Deletion?</p>
        <p>
          Are you sure you want to delete{" "}
          <span className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple to-red">
            {movie.name}
          </span>
          ?
        </p>
        <p>This action cannot be undone.</p>
        <div className="mt-5 space-x-8  font-medium ">
          <button
            className="border-2 border-red  rounded-3xl text-red px-10 py-3 hover:scale-105 "
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="border-0 bg-red  rounded-3xl text-white px-10 py-3 hover:scale-105 "
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
