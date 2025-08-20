import { SearchInput } from "../SearchInput";

export default function DefaultNavbar() {
  return (
    <nav className="nav">
      <p className="logo">MovieMate</p>
      <div>
        <div className="nav-p">
          <a href="/">Home</a>
          <a>Contact</a>
        </div>
      </div>
      <SearchInput className="flex-grow-0 h-10 !rounded-4xl !text-sm !border-gray/20" />
    </nav>
  );
}
