import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
function MobileNav({ setIsChecked }) {
  return (
    <nav>
      <div className="py-5 flex flex-col gap-6 p-5 h-screen absolute top-0 bg-gray-700 text-white right-0 transition-all shadow-lg">
        <div>
          <RxCross2
            size={25}
            onClick={() => setIsChecked(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-start gap-6 py-2 px-3">
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
        <button className="bg-indigo-600 py-3 px-4 rounded-full text-white hover:bg-indigo-700 hover:transition ease-in-out delay-150">
          Book appointment
        </button>
      </div>
    </nav>
  );
}

export default MobileNav;
