import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-indigo-900 flex py-12 justify-center items-center text-white">
      <div className="max-w-screen-xl   flex justify-center items-center px-4 w-full ">
        <div className="flex-col flex md:flex-row justify-between items-center md:items-start  w-full  ">
          <div className="text-3xl">Hospital</div>
          <div className="my-4">
            <ul className="">
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
          <div className="flex mt-4">
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
            <p className="mb-4 text-md text-center tracking-wider 	">Signup for our newsletter</p>
            <div className="flex">
              <input
                type="text"
                className="bg-transparent rounded-3xl w-48  outline-none px-2 py-1  border-indigo-300   border-2 border-solid "
                placeholder="Type email here"
              />
              <button className="ml-2  bg-indigo-100 px-2 py-1 text-sm rounded-3xl font-semibold text-indigo-700">Submit</button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
