import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <nav className="flex justify-between lg:justify-between lg:items-center md:items-center py-2 px-4">
      {/*  LOGO */}
      <div className="text-2xl">Hospital</div>

      {/*  LARGE SCREEN NAV */}
      <div className="hidden lg:flex gap-4">
        <ul className="flex justify-center items-center gap-6 text-xl text-indigo-700">
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
            <NavLink to="/testimonals">Testimonials</NavLink>
          </li>
        </ul>
        <button className="bg-indigo-600 py-3 px-4 rounded-full  text-white hover:bg-indigo-700 hover:transition ease-in-out delay-150">
          Book appointment
        </button>
      </div>

      {/*  HAM BURGER MENU*/}
      <div className="lg:hidden flex justify-center items-center">
        {isChecked ? (
          <MobileNav setIsChecked={setIsChecked} />
        ) : (
          <RxHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsChecked(true)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
