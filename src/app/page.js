import Image from "next/image";
import Layout from "./layout";
// import img from "g";

export default function Home() {
  return (
    <Layout variant="home">
      <section className="bg-[url('/images/cinematic.png')] bg-center bg-cover w-full h-[20rem]  relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-10 left-20 text-white space-y-4">
          <p className="text-5xl font-bold">Discover Amazing Movies</p>
          <p className="font-semibold text-lg">
            Browse our collection of the latest and greatest films from around
            the world.
          </p>
          <button className="btn-rd bg-[rgb(147,51,234)] ">
            <i class="mr-2" data-fa-i2svg="">
              <svg
                class="svg-inline--fa fa-play"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
                className="w-6 h-6"
              >
                <path
                  fill="white"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                ></path>
              </svg>
            </i>
            Explorer Now
          </button>
        </div>
      </section>

      <section className=" ">hi</section>
    </Layout>
  );
}
