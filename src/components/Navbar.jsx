import Filter from "./Filter";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold">BOOLFLIX</a>
        <Filter />
      </div>
    </nav>
  );
}
