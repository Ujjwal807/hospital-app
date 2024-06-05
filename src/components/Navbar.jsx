import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between h-16 items-center px-10 shadow-md ">
      <div className="text-3xl font-poppin font-semibold "> Hospital</div>
      <ul className="flex gap-8 text-lg items-center font-poppin font-medium">
        <li className=" hover:text-blue-700 ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" hover:text-blue-700">
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li className=" hover:text-blue-700">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className=" hover:text-blue-700">
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
        <li className=" hover:text-blue-700">
          <NavLink to="/testimonals">Testimonals</NavLink>
        </li>
      </ul>
      <Link className="text-lg rounded-xl bg-indigo-500 text-white py-2 px-4 hover:bg-indigo-700 transition-all">Book an appointment</Link>
    </nav>
  );
}

export default Navbar;
