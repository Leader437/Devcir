import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Button from "../Button/Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="container fixed top-[20px] lg:left-1/2 lg:-translate-x-1/2 z-40">
      <div className="bg-custom-dark-green p-4 md:p-5  rounded-[7px] flex justify-between items-center">
        <Link to="/" className="block z-50">
          <img src={logo} alt="main Devcir logo" className="w-20" />
        </Link>
        <div
          className={`bg-custom-dark-green fixed lg:relative top-0 left-0 bottom-0 right-0 md:block transition-transform ${
            showMenu ? "-translate-x-0" : "-translate-x-full"
          } lg:-translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-6 pl-7 md:pl-13 lg:pl-0 mt-24 lg:mt-0 text-white text-md lg:text-sm font-yaro font-medium">
            <li className="cursor-pointer transition-colors hover:text-custom-green">
              <span>Services</span>
              <i className="ri-arrow-down-s-line"></i>
            </li>
            <li className="cursor-pointer transition-colors hover:text-custom-green">
              <span>Offers</span>
              <i className="ri-arrow-down-s-line"></i>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="block lg:hidden">
            <Button>Do you have a Project?</Button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 md:gap-5 text-custom-white z-50">
          <select
            name="Language"
            id="Language"
            className="outline-none focus:outline-none bg-custom-dark-green text-custom-white text-md lg:text-sm cursor-pointer"
          >
            <option value="En">En</option>
            <option value="fr">Fr</option>
          </select>
          <div className="hidden lg:block">
          <Button>Do you have a Project?</Button>
          </div>
          <div className="block text-xl lg:hidden" onClick={toggleMenu}>
            <i className="ri-menu-3-fill"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
