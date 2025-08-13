import HomeNavbar from "./HomeNavbar";
import DefaultNavbar from "./DefaultNavbar";

export default function Navbar({ variant }) {
  return variant === "home" ? <HomeNavbar /> : "";
}
