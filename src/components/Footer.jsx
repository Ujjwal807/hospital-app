import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-indigo-900 flex py-12 justify-center text-white">
      <div className="max-w-screen-xl  flex justify-center w-full ">
        <div className="flex justify-between w-full  ">
          <div className="text-3xl">Hospital</div>
          <div>
            <ul>
              <li className="hover:text-indigo-200 my-3  transition-all">
                <Link to="/about-us">About</Link>
              </li>
              <li className="hover:text-indigo-200 my-3 transition-all">
                <Link to="/service">Service</Link>
              </li>
              <li className="hover:text-indigo-200 my-3 transition-all">
                <Link to="/contact-us">Contact</Link>
              </li>
              <li className="hover:text-indigo-200 my-3 transition-all">
                <Link to="/testimonals">Testimonals</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="mx-2 cursor-pointer hover:text-indigo-300 transition-all"> 
              <CiFacebook size={30} />
            </div>
            <div className="mx-2 cursor-pointer hover:text-indigo-300 transition-all">
              <FaInstagram size={30} />
            </div>
            <div className="mx-2 cursor-pointer hover:text-indigo-300 transition-all">
              <FaYoutube size={30} />
            </div>
          </div>
          <div >
            <p className="mb-8 text-xl font-bold tracking-wider	">Signup for our newsletter</p>
            <div>
              <input
                type="text"
                className="bg-transparent rounded-3xl   outline-none px-6 py-1  border-indigo-300 border-2 border-solid "
                placeholder="Type email here"
              />
              <button className="ml-2 bg-indigo-100 px-3 py-1 rounded font-semibold text-indigo-700">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
