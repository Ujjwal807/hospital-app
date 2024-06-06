import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function MobileNav() {
    const [ischecked, setIsChecked] = useState(true);
    return (
        <nav className="flex justify-between ">
        <div className="text-2xl py-5 px-4 ">Hospital</div>
        {ischecked ? (
          <div className="py-5 flex flex-col p-5 h-screen absolute bg-gray-700 text-white right-0 transition-all shadow-lg">
            <ul className="flex flex-col items-start gap-6 py-2 px-3  ">
              <RxCross2
                size={25}
                onClick={() => setIsChecked(false)}
                className="lg:hidden md:hidden"
              />
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
            <div className="py-6">
              <Link className=" bg-indigo-600 py-3 px-4 rounded-full  text-white hover:bg-indigo-700 hover:transition ease-in-out delay-150  ">
                Book appointment
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-5  " onClick={() => setIsChecked(true)}>
            <RxHamburgerMenu size={30} />
          </div>
        )}
      </nav>
    )
}

export default MobileNav
