import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TbBrandYoutube } from "react-icons/tb";
function Footer() {
  return (
    <footer className="lg:bg-black lg:h-[40vh] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6 md:bg-black md:flex md:flex-col md:items-center md:justify-center md:gap-6 md:h-[30vh]">
      <div className="lg:flex lg:gap-6  md:flex md:gap-6">
        <div className="lg:bg-white rounded-full p-2 md:bg-white">
          <IoLogoInstagram size={40} />
        </div>
        <div className="lg:bg-white rounded-full p-2 md:bg-white">
          <TiSocialFacebookCircular size={40} />
        </div>
        <div className="lg:bg-white rounded-full p-2 md:bg-white">
          <TbBrandYoutube size={40} />
        </div>
      </div>
      <div>
        <ul className="lg:flex lg:gap-6 text-white lg:text-xl  md:flex md:gap-6 ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Testimonals</li>
        </ul>
      </div>
      <div className="text-white">Copyright &copy; Fortis Hospital .</div>
    </footer>
  );
}

export default Footer;
