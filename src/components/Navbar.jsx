import { Link, NavLink } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
  const [ischecked, setIsChecked] = useState(true);
  return (
    <nav className="flex justify-between lg:justify-between lg:items-center md:items-center ">
      <div className="text-2xl py-5 px-4 lg:px-8 lg:text-5xl">Hospital</div>
      {ischecked ? (
        <div className="py-5 flex flex-col p-5 h-screen absolute bg-gray-700 text-white lg:bg-white lg:text-indigo-700 md:bg-white md:text-indigo-700 right-0 transition-all shadow-lg lg:shadow-none lg:flex lg:relative lg:gap-8 lg:flex-row lg:h-0 lg:items-center md:h-0 md:flex md:flex-row md:shadow-none md:items-center md:gap-8 ">
          <ul className="flex flex-col items-start gap-6 py-2 px-3 lg:flex-row lg:text-xl md:flex-row md:items-center ">
            <RxCross2
              size={25}
              onClick={() => setIsChecked(false)}
              className="lg:hidden md:hidden"
            />
            <li className=" ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/testimonals">Testimonals</NavLink>
            </li>
          </ul>
          <div className="py-6 lg:flex lg:items-center lg:relative z-10  ">
            <Link className=" bg-indigo-600 py-3 px-4 rounded-full  text-white hover:bg-indigo-700 hover:transition ease-in-out delay-150  md:text-[14px] lg:text-lg ">
              Book appointment
            </Link>
          </div>
        </div>
      ) : (
        // <div className="p-5" onClick={() => setIsChecked(true)}>
        //   <RxHamburgerMenu size={30} />
        // </div>
        <MobileNav/>
      )}
    </nav>
  );
}

export default Navbar;
