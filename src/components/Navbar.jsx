import Filter from "./Filter";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <Filter />
      </div>
    </nav>
  );
}
