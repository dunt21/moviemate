import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
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
        className={`${inter.variable}  antialiased bg-bgGray min-h-screen w-screen overflow-x-hidden relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
