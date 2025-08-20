import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-16 flex justify-between items-center px-36 bg-white py-3 border-t border-gray-200 font-medium text-gray">
      <div>
        <p>
          © 2025 <span className="logo !text-[16px]">MovieMate</span>. All
          rights reserved
        </p>
      </div>
      <nav className="space-x-7 ">
        <a>Home</a>
        <a>Privacy</a>
        <a>Terms</a>
        <a>Contact</a>
      </nav>
      <div className="space-x-3  footer-icons flex ">
        <button>
          <Image
            src="/icons/facebook.svg"
            width={12}
            height={12}
            alt="facebook"
          />
        </button>
        <button>
          <Image
            src="/icons/instagram.svg"
            width={16}
            height={16}
            alt="instagram"
          />
        </button>
        <button>
          <Image
            src="/icons/twitter.svg"
            width={16}
            height={16}
            alt="twitter"
          />
        </button>
      </div>
    </div>
  );
}
