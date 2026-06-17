import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/subjects">Subjects</Link>
      <Link to="/assignments">Assignments</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;