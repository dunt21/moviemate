"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "@/components/Navbar/HomeNavbar";
import DefaultNavbar from "@/components/Navbar/DefaultNavbar";

export default function Navbar() {
  const pathName = usePathname();
  return pathName === "/" ? <HomeNavbar /> : <DefaultNavbar />;
}
