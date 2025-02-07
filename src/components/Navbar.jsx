import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/wedding">Wedding</Link>
    </nav>
  );
};

export default Navbar;
