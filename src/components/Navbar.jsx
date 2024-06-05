import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div> Hospital</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/testimonals">Testimonals</NavLink>
        </li>
      </ul>
      <Link>Book an appointment</Link>
    </nav>
  );
}

export default Navbar;
