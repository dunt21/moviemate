import Genre from "./genreOptions";
import Rating from "./Rating";
import Image from "next/image";
import Link from "next/link";

export function FormCard() {
  return (
    <div className="bg-gray-100 w-[45%] h-full border-0 rounded-xl shadow-glass p-7 font-medium">
      <form className="space-y-7" noValidate>
        <div className="flex flex-col">
          <label for="title">Movie Title</label>
          <input
            type="text"
            placeholder="Days Apart..."
            id="title"
            required
          ></input>
        </div>

        <div className="grid grid-cols-2 gap-6 input-div-p">
          <div>
            <label for="date">Release Date</label>
            <input type="date" id="date" required></input>
          </div>

          <div className="">
            <label for="genre">Genre</label>
            <Genre
              id="genre"
              className=" !text-black !rounded-[0.5rem] inset-shadow-md"
              required
            />
          </div>
          <div className="">
            <label for="price">Price</label>
            <input
              type="number"
              placeholder="12.99..."
              id="price"
              required
            ></input>
          </div>

          <div className="">
            <label for="rate">Rating</label>
            <Rating
              id="rate"
              className="!text-black !rounded-[0.5rem] inset-shadow-md"
              required
            />
          </div>
        </div>

        <div className="h-64 flex gap-8">
          <div className="border-1 rounded-lg w-[40%] flex flex-col items-center pt-5 border-gray/50">
            <Image
              src="/icons/image.svg"
              alt="image icon"
              width={150}
              height={150}
            />
            <p className="text-blueBlack">Image will appear here</p>
          </div>

          <div className="border-2 border-gray/50 border-dashed flex-1 rounded-lg flex flex-col items-center justify-center">
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
            <input className="hidden" id="upload-img" type="file" required />

            <label
              for="upload-img"
              className="!mb-0 form-btn border-purple !text-purple border-1 rounded-3xl py-2 px-6 "
            >
              Browse Files
            </label>
            <p className="text-gray text-xs mt-3">
              Supported formats: JPG, PNG
            </p>
            <p className="text-gray text-xs"> Max size: 5MB</p>
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            href=""
            className="text-blueBlack flex gap-2 items-center font-normal"
          >
            <Image
              src="/icons/back.svg"
              alt="move back"
              width={15}
              height={15}
            />
            Back to List
          </Link>

          <div className="space-x-5 ">
            <button className=" form-btn !border-gray/40 text-blueBlack border-1 rounded-3xl px-6 py-3">
              Cancel
            </button>
            <button className="form-btn !border-0 bg-gradient-to-r from-purple to-seaBlue text-white rounded-3xl px-8 py-3">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
