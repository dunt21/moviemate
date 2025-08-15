import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "MovieMate",
  description: "Get your latest movies here",
};

export default function Layout({ children, variant }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased bg-bgGray h-screen w-screens`}
      >
        <Navbar variant={variant} />
        {children}
      </body>
    </html>
  );
}
