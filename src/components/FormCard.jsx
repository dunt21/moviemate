import Genre from "./genreOptions";
import Rating from "./Rating";
import Image from "next/image";
import Link from "next/link";

export function FormCard({ update, submit, movie, setMovie }) {
  return (
    <div className="bg-gray-100 w-[50%] h-full border-0 rounded-xl shadow-glass p-7 font-medium">
      <form className="space-y-7" onSubmit={submit} noValidate>
        {/* movie title */}
        <div className="flex flex-col">
          <label htmlFor="title">Movie Title</label>
          <input
            type="text"
            value={movie.title}
            placeholder="Days Apart..."
            id="title"
            onChange={update}
            required
          ></input>
        </div>

        {/* input for date, price, genre and rating */}
        <div className="grid grid-cols-2 gap-6 input-div-p">
          <div>
            <label htmlFor="date">Release Date</label>
            <input
              type="date"
              id="date"
              value={movie.date}
              onChange={update}
              required
            ></input>
          </div>

          <div className="">
            <label htmlFor="genre">Genre</label>
            <Genre
              id="genre"
              genre={movie.genre}
              className=" !text-black !rounded-[0.5rem] inset-shadow-md"
              required
            />
          </div>
          <div className="">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="12.99..."
              id="price"
              value={movie.price}
              onChange={update}
              required
            ></input>
          </div>

          <div className="">
            <label htmlFor="rate">Rating</label>
            <Rating
              id="rate"
              className="!text-black !rounded-[0.5rem] inset-shadow-md"
              required
              onChange={update}
            />
          </div>
        </div>

        {/* synopsis */}
        <div>
          <label className="" htmlFor="summary">
            Synopsis
          </label>
          <textarea
            placeholder="Description goes here..."
            minLength="150"
            maxLength="600"
            id="summary"
            value={movie.summary}
            onChange={update}
          ></textarea>
        </div>

        {/* movie upload section */}
        <div>
          <p className="text-blueBlack mb-2"> Movie Poster</p>

          <div className="h-64 flex gap-8 ">
            <div className="border-1 rounded-lg w-[45%] flex flex-col items-center pt-5 border-gray/50 relative">
              <Image
                src="/icons/image.svg"
                alt="image icon"
                width={150}
                height={150}
              />
              <p className="text-blueBlack">Image will appear here</p>
              <button className="bg-red py-1 px-2 rounded-2xl absolute right-2 top-2 hidden">
                <Image
                  src="/icons/close.svg"
                  width={15}
                  height={15}
                  alt="close icon"
                />
              </button>
            </div>

            <div className="border-2 border-gray/50 border-dashed flex-1 rounded-lg flex flex-col items-center justify-center hover:border-purple/50">
              <Image
                src="/icons/upload.svg"
                alt="upload icon"
                width={45}
                height={45}
                className="mb-5"
              />
              <p className="text-center text-blueBlack mb-2">
                Drag & drop your image here
                <br />
                <span className="text-gray ">or</span>
              </p>
              <input
                className="hidden"
                id="image"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setMovie({ ...movie, [e.target.id]: file });
                }}
                required
              />

              <label
                htmlFor="upload-img"
                className="!mb-0 form-btn border-purple !text-purple border-1 rounded-3xl py-2 px-6 hover:bg-purple hover:!text-white cursor-pointer"
              >
                Browse Files
              </label>
              <p className="text-gray text-xs mt-3">
                Supported formats: JPG, PNG
              </p>
              <p className="text-gray text-xs"> Max size: 5MB</p>
            </div>
          </div>
        </div>

        {/* control section */}
        <div className="flex justify-between">
          <Link
            href="/"
            className="text-blueBlack flex gap-2 items-center font-normal "
          >
            <Image
              src="/icons/back.svg"
              alt="move back"
              width={15}
              height={15}
            />
            <span className="hover:border-b-2 hover:border-b-purple">
              Back to List
            </span>
          </Link>

          <div className="space-x-5 ">
            <button className=" form-btn !border-gray/40 text-blueBlack border-1 rounded-3xl px-6 py-3">
              Cancel
            </button>
            <button className="form-btn !border-0 bg-gradient-to-r from-purple to-seaBlue text-white rounded-3xl px-8 py-3 hover:shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
